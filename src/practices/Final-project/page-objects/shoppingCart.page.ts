import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShoppingCartPage extends Page {
    /**
     * @return list element of product item
     */
    public get listProductItem() {
        return $$('//div[@class="cart_list"]//div[@class="cart_item"]')
    }

    /**
     * @return a element of add to cart button 
     */
    public get btnAddToCart() {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    /**
     * @return a element of remove button 
     */
    public get btnRemove() {
        return $('#remove-sauce-labs-backpack')
    }

    /**
     * @return a element of remove button 
     */
    public get btnCheckout() {
        return $('#checkout')
    }

    // /**
    //  * @return array element of price of product
    //  */
    // public async getAllProductPrice() {
    //     const elems = await $$(`//div[@class="inventory_item_price"]//text()[2]`)
    //     return elems.map((e) => e.getText())
    // }

    // /**
    //  * @return calculate price of all product in cart
    //  */
    // public calculateAllProductPrice(listPriceOfProduct) {
    //     let total = 0

    //     listPriceOfProduct.forEach(element => {
    //         total += parseInt(element)
    //     });

    //     return total;
    // }



    // /**
    //  * @return a element of total price of list product in cart
    //  */
    // public get getTotalPrice() {
    //     return browser.evaluate(`//div[@class='summary_subtotal_label']/text()[2]`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    // }

}

export default new ShoppingCartPage();