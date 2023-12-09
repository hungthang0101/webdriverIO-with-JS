import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicLoading extends Page {
    /**
     * define selectors using getter methods
     */
    public hplExample(contentHyperLink: string) {
        return $('//a[text()="' + contentHyperLink + '"]');
    }

    public get btnStart() {
        return $('//button');
    }

    public get lbContentHiden() {
        return $('//div[@id="finish"]//h4');
    }

    public get imgNipperLoading() {
        return $('#loading');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return browser.url(`https://the-internet.herokuapp.com/dynamic_loading`)
    }
}

export default new DynamicLoading();