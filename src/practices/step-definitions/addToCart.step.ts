import { When, Then } from '@wdio/cucumber-framework';

import HomePage from '../page-objects/home.page.js';
import ShoppingCartPage from '../page-objects/shoppingCart.page.js';


When(/^User click on Add to cart button$/, async () => {
    (await HomePage.btnAddToCart).click()
});

Then(/^Add to cart button is changed to Remove button$/, async () => {
    await expect(HomePage.btnAddToCart).not.toBeDisplayed()
    await expect(HomePage.btnRemove).toBeDisplayed()
});

Then(/^The product is added to cart which is displayed correctly$/, async () => {
    await expect(HomePage.btnShoppingCart).toHaveText("1")
});


Then(/^User can see cart icon which is updated the value counter$/, async () => {
    await HomePage.btnShoppingCart.click()
    await expect(await (ShoppingCartPage.listProductItem).length).toEqual(1)
});
