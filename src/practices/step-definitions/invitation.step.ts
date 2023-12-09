import { Given, When, Then, BeforeStep } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import InvitationPage from '../pageobjects/invitation.page.js';
import DashboardPage from '../pageobjects/dashboard.page.js';

const pages = {
    login: LoginPage,
    invitation: InvitationPage
}

const title = {
    login: LoginPage,
    invitation: InvitationPage
}

BeforeStep(() => {
    console.log('Before Step');

})

When(/^I login with account which has email (.*) and password (.*)$/, async (username: string, password: string) => {
    await LoginPage.inputAccount(username, password)
    await LoginPage.btnSubmit.click()

});

When(/^I click to the Invitation page$/, async () => {
    await (await DashboardPage.patientNavigation).click()
    await (await DashboardPage.btnInvitePatient).click()

});

When(/^I input value (.*) to (.*)$/, async (value: string, xpath: string) => {
    await (await InvitationPage.getLocator(xpath)).setValue(value)
    await (await InvitationPage.btnSendInvitation).click()

});

Then(/^I see the message of the (.*) which is (.*)$/, async (xpath: string, message) => {
    var locator = xpath + "/../../../../p"
    await expect($(locator)).toHaveText(message)
});

Then(/^I see the title on (.*) which is displayed (.*) and color is (.*) and font size is (.*)$/, async (xpath: string, title: string, color: string, fontSize: string) => {
    await expect(InvitationPage.getLocator(xpath)).toHaveText(title)
    console.log(InvitationPage.getLocator(xpath).getCSSProperty('color'))
    await expect($('//div[@class="PatientInvitation_title__1e812"]').getCSSProperty('color')).toHaveText(color)
    await expect(InvitationPage.getLocator(xpath).getCSSProperty('font-size')).toHaveText(fontSize)
});