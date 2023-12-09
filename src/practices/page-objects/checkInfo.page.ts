import Page from './page.js';

const firstNames = {
    valid: "Thang",
    blank: ""
}

const lastNames = {
    valid: "Nguyen",
    blank: ""
}

const zipCodes = {
    valid: "1233211",
    blank: ""
}

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get tbFirstName() {
        return $(`#first-name`)
    }

    public get tbLastName() {
        return $(`#last-name`)
    }

    public get tbZipCode() {
        return $(`#postal-code`)
    }

    public get btnCheckout() {
        return $(`#continue`)
    }

    public get msgError() {
        return $(`//h3[@data-test='error']`)
    }

    public get btnFinish() {
        return $(`#finish`)
    }

    /**
     * a method to enter user information
     */
    public get msgCheckoutFinish() {
        return $(`//h2[@class='complete-header']`)
    }

    /**
     * a method to enter user information
     */
    public async inputInfomation(firstName, lastName, zipcode) {
        await this.tbFirstName.setValue(firstNames[firstName]);
        await this.tbLastName.setValue(lastNames[lastName]);
        await this.tbZipCode.setValue(zipCodes[zipcode]);
    }

    /**
     * get a element of product position on this page
     */
    public getLocatorOfProduct(productName) {
        return $(`//div[text()="` + productName + `"]/../../div[@class="item_pricebar"]`)
    }

}

export default new CheckoutPage();