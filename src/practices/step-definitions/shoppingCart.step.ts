import { When, Then, Given } from '@wdio/cucumber-framework';

import HomePage from '../page-objects/home.page.js';
import ShoppingCartPage from '../page-objects/shoppingCart.page.js';
import CheckInfoPage from '../page-objects/checkInfo.page.js';


Given(/^User open shopping cart page with some product are added$/, async () => {
    await (await HomePage.btnAddToCartProduct1).click()
    await (await HomePage.btnAddToCartProduct2).click()
    await (await HomePage.btnShoppingCart).click()
});

When(/^User click on Remove button$/, async () =>{
    await (await HomePage.btnRemove).click()
})

Then(/^User see the product which is removed$/, async () => {
    await expect(await (CheckInfoPage.getLocatorOfProduct(`Sauce Labs Backpack`))).not.toBeDisplayed()
});


When(/^User go to checkout page$/, async () => {
    await (await ShoppingCartPage.btnCheckout).click()
});

When(/^User enter Fisrt Name is (.*), Last Name is (.*) and Zip Code is (.*)$/, async (firstName, lastName, zipcode) => {
    await (await CheckInfoPage.inputInfomation(firstName,lastName,zipcode))
    await (await CheckInfoPage.btnCheckout).click()
})

Then(/^User can see the validation message which is (.*)$/, async (message) => {
    await expect(await (CheckInfoPage.msgError)).toHaveText(message);
});


Then(/^User see product which is displayed correctly on the final order summary page$/, async () => {
    await expect(await (CheckInfoPage.getLocatorOfProduct(`Sauce Labs Backpack`))).toBeDisplayed()
    await expect(await (CheckInfoPage.getLocatorOfProduct(`Sauce Labs Bike Light`))).toBeDisplayed()

    // let getPriceOfProducts = await ShoppingCartPage.getAllProductPrice()
    // await console.log(ShoppingCartPage.getTotalPrice)
    // await expect(await ShoppingCartPage.getTotalPrice).toContain(4)
});

Then(/^User is nevigated to the checkout complete page$/, async () => {
    await (await CheckInfoPage.btnFinish).click()
    await expect(await (CheckInfoPage.msgCheckoutFinish)).toHaveText(`Thank you for your order!`)
    await CheckInfoPage.screenshoot()
});