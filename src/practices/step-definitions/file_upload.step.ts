import { Given, When, Then, BeforeStep } from '@wdio/cucumber-framework';
import path from 'node:path'

import FileUpload from '../pageobjects/fileUpload.page.js';


BeforeStep(() => {
    console.log('Before Step');
})

Given(/^User am on the file upload page$/, async () => {
    await FileUpload.open()
});

When(/^User select a file to upload$/, async () => {
    const filePath = path.join('./src/practices/ThangNH30/features/file_upload.feature');
    const remoteFilePath = await FileUpload.remoteFilePath(filePath)
    await (await FileUpload.inputFileUpload).waitForDisplayed()
    await (await FileUpload.inputFileUpload).setValue(remoteFilePath)
});

When(/^User click on the upload button$/, async () => {
    await (await FileUpload.btnUpload).click()
});

When(/^User click on the upload button without selecting a file$/, async () => {
    await (await FileUpload.btnUpload).click()
});

When(/^User select a file with an unsupported file type$/, async () => {

});

Then(/^User should see a success message$/, async () => {
    await (await FileUpload.lbUploadSuccess).waitForDisplayed()
    await expect(FileUpload.lbUploadSuccess).toBeDisplayed()
});

Then(/^the file should be uploaded successfully$/, async () => {
    await (await FileUpload.lbFileUploaded).waitForDisplayed()
    await expect(FileUpload.lbFileUploaded).toHaveText("file_upload.feature")
});

Then(/^User should see an error message$/, async () => {
    await (await FileUpload.lbUploadFailed).waitForDisplayed()
    await expect(FileUpload.lbUploadFailed).toHaveText("Internal Server Error")
});

Then(/^the file should not be uploaded$/, async () => {
    await expect(FileUpload.lbFileUploaded).not.toBeDisplayed()
});