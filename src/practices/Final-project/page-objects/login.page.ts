import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get tbUsername() {
        return $('#user-name');
    }

    public get tbPassword() {
        return $('#password');
    }

    public get btnSubmit() {
        return $('#login-button');
    }

    public get titleHomePage() {
        return $('//div[@class="app_logo"]')
    }

    public get lbErrorMessage() {
        return $(`//h3[@data-test='error']`)
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async inputAccount(username, password) {
        await this.tbUsername.setValue(username);
        await this.tbPassword.setValue(password);
    }

    public async clickOnLoginBtn() {
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */

}

export default new LoginPage();