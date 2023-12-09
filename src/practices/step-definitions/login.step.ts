import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../page-objects/login.page.js';
import HomePage from '../page-objects/home.page.js';

//global variable, username of account
const usernames = {
    "normal account": "standard_user",
    "invalid account": "invalid-username",
    "locked account": "locked_out_user",
    "problem account": "problem_user",
    "performance glitch account": "performance_glitch_user",
    blank: ""
}

//global variable, password of account
const passwords = {
    "valid password": "secret_sauce",
    "invalid password": "invalid-password",
    blank: ""
}


Given(/^User am on the login page$/, async () => {
    await LoginPage.open()
    await LoginPage.maximunWindow()
});

When(/^User log in with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.inputAccount(usernames[username], passwords[password])
    await LoginPage.clickOnLoginBtn()
});

Then(/^User log in successfully$/, async () => {
    await expect(HomePage.lbTitle).toBeDisplayed()
})

Then(/^User log in unsuccessfully and (.*) display$/, async (message) => {
    await expect(LoginPage.lbErrorMessage).toHaveText(message)
})

Then(/^The error message is displayed with content is (.*)$/, async (message) => {
    await expect(LoginPage.lbErrorMessage).toHaveText(message)
})


