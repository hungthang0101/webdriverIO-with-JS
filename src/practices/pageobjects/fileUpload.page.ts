import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicLoading extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputFileUpload() {
        return $('#file-upload');
    }

    public get btnUpload() {
        return $('#file-submit');
    }

    public get lbUploadSuccess() {
        return $('//h3[text()="File Uploaded!"]');
    }

    public get lbFileUploaded() {
        return $('#uploaded-files');
    }

    public get lbUploadFailed() {
        return $('//h1');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return browser.url(`https://the-internet.herokuapp.com/upload`)
    }
}

export default new DynamicLoading();