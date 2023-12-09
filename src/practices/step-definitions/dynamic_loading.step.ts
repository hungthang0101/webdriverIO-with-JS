import { Given, When, Then, BeforeStep } from '@wdio/cucumber-framework';

import DynamicLoading from '../pageobjects/dynamic_loading.page.js';


BeforeStep(() => {
    console.log('Before Step');
})

Given(/^I am on the dynamic loading page$/, async () => {
    await DynamicLoading.open()
});

When(/^I click on the "(.*)" link$/, async (contentHyperLink) => {
    await (await DynamicLoading.hplExample(contentHyperLink)).click()
});

When(/^I click on the start button$/, async () => {
    await (await DynamicLoading.btnStart).click()
});

Then(/^I should see the hidden content after it is loaded$/, async () => {
    await expect(DynamicLoading.lbContentHiden).toHaveText("Hello World!")
});

Then(/^I should see a loading spinner until the content is loaded$/, async () => {
    await expect(DynamicLoading.imgNipperLoading).toBeDisplayed()
    await (await DynamicLoading.lbContentHiden).waitForDisplayed()
    await expect(DynamicLoading.imgNipperLoading).not.toBeDisplayed()
});

Then(/^I should see the dynamically rendered content after it is loaded$/, async () => {
    await expect(DynamicLoading.lbContentHiden).not.toBeDisplayed()
    await expect(DynamicLoading.imgNipperLoading).toBeDisplayed()
    await expect(DynamicLoading.lbContentHiden).toBeDisplayed()
});
