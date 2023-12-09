import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../page-objects/home.page.js';
import LoginPage from '../page-objects/login.page.js';

//global variable, nevigate to page option
const nevigationPage = {
    "All Items": "inventory",
    "About": "about",
    "Logout": "logout"
}

Given(/^User login successful with normal account$/, async () => {
    await LoginPage.open()
    await LoginPage.maximunWindow()
    await LoginPage.inputAccount(`standard_user`, `secret_sauce`)
    await LoginPage.clickOnLoginBtn()
})

When(/^User nevigate to (.*)$/, async (nevigeItem) => {
    await (await HomePage.lbTitle).waitForDisplayed
    await (await HomePage.btnNavigateMenu).click()
    await (await HomePage.nevigateItem(nevigationPage[nevigeItem])).waitForClickable()
    await (await HomePage.nevigateItem(nevigationPage[nevigeItem])).click()
});

Then(/^User is accessed to (.*)$/, async (urlToNevigate) => {
    await HomePage.waitForLoadingPage()
    await expect(browser).toHaveUrl(urlToNevigate)
});

When(/^User click on Logout$/, async () => {
    await (await HomePage.lbTitle).waitForDisplayed
    await (await HomePage.btnNavigateMenu).click()
    await (await HomePage.nevigateItem(nevigationPage["Logout"])).waitForClickable()
    await (await HomePage.nevigateItem(nevigationPage["Logout"])).click()
});

Then(/^User can not be accessed to Inventory page$/, async () => {
    await HomePage.waitForLoadingPage()
    await expect(browser).toHaveUrl("https://www.saucedemo.com/")
});
