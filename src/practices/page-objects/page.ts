import type { ChainablePromiseElement } from 'webdriverio';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    BASE_URL = 'https://www.saucedemo.com/';

    /**
    * Opens BASE_URL of the page
    */
    public open() {
        return browser.url(`${this.BASE_URL}`)
    }

    /**
    * Get title of the page
    */
    public getTitle() {
        return browser.getTitle();
    }

    /**
    * Get URL of the page
    */
    public getURLOfPage() {
        return browser.getUrl();
    }

    /**
    * Upload file path into the page
    */
    public remoteFilePath(filePath) {
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

    /**
     * Wait for loading the page
     */
    public waitForLoadingPage() {
        browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
                timeout: 60000, // 60 seconds
                timeoutMsg: 'The loading page process is failed'
            }
        );
    }

    /**
     * screenshoot the page
     */
    public screenshoot() {
        browser.saveScreenshot(`./src/practices/ThangNH30/Final-project/screenshots/` + Date.now() + '.png');
    }

    /**
     * Open maximun browser
     */
    public maximunWindow() {
        browser.maximizeWindow()
    }
}
