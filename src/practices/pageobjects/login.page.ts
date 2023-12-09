import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get tbUsername () {
        return $('[name="username"]');
    }

    public get tbPassword () {
        return $('[name="password"]');
    }

    public get pageTitle() {
        return $('//span[@class="Login_titleHeader__4HlZD"]')
    }

    public get hplForgotPassword () {
        return $(`//a[normalize-space()='Forgot password?']`);
    }

    public get btnSubmit () {
        return $(`//button[@type='submit']`);
    }

    public get errorMessage () {
        return $('p=Either email address or password is incorrect. Please try again')
    }

    public get validateMessage () {
        return $("(//p[@class='error'][normalize-space()='This field is required'])");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async inputAccount (username: string, password: string) {
        await this.tbUsername.setValue(username);
        await this.tbPassword.setValue(password);
    }

    public async clickOnLoginBtn () {
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();