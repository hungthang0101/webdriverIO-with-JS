import { Given, When, Then, BeforeStep } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';

const pages = {
    login: LoginPage,
}

BeforeStep(() => {
    console.log('Before Step');
})

Given(/^I am on the login page$/, async () => {
    await LoginPage.open()
});

When(/^I input (.*) and (.*) of account$/, async (username, password) => {
    await LoginPage.inputAccount(username,password)
});

When(/^I click on Login button$/, async () => {
    await LoginPage.clickOnLoginBtn()
});

When(/^I click on the Forgot Password hyperlink$/, async () => {
    await LoginPage.hplForgotPassword.click()
});

Then(/^I see the login label is (.*)$/, async (value) => {
    await expect(LoginPage.pageTitle).toHaveText(value)
});

Then(/^I see the email address and password textbox are displayed$/, async () => {
    await expect(LoginPage.tbUsername).toBeDisplayed()
    await expect(LoginPage.tbPassword).toBeDisplayed()
});

Then(/^I see the a Login button has value which is (.*)$/, async (value) => {
    await expect(LoginPage.btnSubmit).toHaveText(value)
});

Then(/^Forgot Password hyperlink with value is (.*)$/, async (value) => {
    await expect(LoginPage.hplForgotPassword).toHaveText(value)
});

Then(/^I should see a validation message which is (.*)$/, async (value) => {
    await expect(LoginPage.validateMessage).toHaveText(value)
});


Then(/^I should see a error message which is (.*)$/, async (value) => {
    await expect(LoginPage.errorMessage).toBeDisplayed()
});