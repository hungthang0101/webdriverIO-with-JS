import type { ChainablePromiseElement } from 'webdriverio';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    BASE_URL = 'https://fsdhp.com/';

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open(path: string) {
        return browser.url(`${this.BASE_URL}${path}`)// open the page with the path   specified
    }

    public getTitle() {
        return browser.getTitle();
    }

    public getURLOfPage(){
        return browser.getUrl();
    }

    public remoteFilePath(filePath){
        return browser.uploadFile(filePath)
    }

    /**
    * Pause execution for a given number of milliseconds
    * @param  {Number}   ms   Number of milliseconds to pause
    */
    public pause(ms: number) {
        return browser.pause(ms);
    }

    /**
     * Wait for the given element to be enabled, displayed, or to exist
     * @param  {String}   selector    Element selector
     * @param  {String|Number}   ms   Wait duration (optional)
     * @param  {Boolean} falseCase    Whether or not to expect a visible or hidden state
     */
    public waitForDisplayed(element: ChainablePromiseElement<WebdriverIO.Element>, ms: number | string = 3000, falseCase: boolean = false) {
        /**
        * Maximum number of milliseconds to wait, default 3000
        * @type {Int}
        */
        const intMs = typeof ms == 'string' ? parseInt(ms, 10) : ms || 3000;

        return element.waitForDisplayed({
            timeout: intMs,
            reverse: Boolean(falseCase),
        });
    }

    /**
     * Wait for the given element to be enabled, displayed, or to exist
     * @param  {String}   selector    Element selector
     * @param  {String|Number}   ms   Wait duration (optional)
     * @param  {Boolean} falseCase    Whether or not to expect a visible or hidden state
     */
    public waitForExist(element: ChainablePromiseElement<WebdriverIO.Element>, ms: number | string = 3000, falseCase: boolean = false) {
        /**
        * Maximum number of milliseconds to wait, default 3000
        * @type {Int}
        */
        const intMs = typeof ms == 'string' ? parseInt(ms, 10) : ms || 3000;

        return element.waitForExist({
            timeout: intMs,
            reverse: Boolean(falseCase),
        });
    }
}
