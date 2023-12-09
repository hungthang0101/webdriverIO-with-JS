import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * @return a element of title on top
     */
    public get lbTitle() {
        return $('//div[@class="app_logo"]')
    }

    /**
     * @return a element of add to cart button of sauce-labs-backpack
     */
    public get btnAddToCartProduct1() {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    /**
     * @return a element of add to cart button of sauce-labs-bike-light
     */
    public get btnAddToCartProduct2() {
        return $('#add-to-cart-sauce-labs-bike-light')
    }

    /**
     * @return a element of remove button 
     */
    public get btnRemove() {
        return $('#remove-sauce-labs-backpack')
    }

    /**
     * @return a element of the shopping cart button
     */
    public get btnShoppingCart() {
        return $("#shopping_cart_container")
    }

    /**
     * @return a element of the nevigate menu button
     */
    public get btnNavigateMenu() {
        return $("#react-burger-menu-btn")
    }

    /**
     * @return a element of close button to the nevigate menu
     */
    public get btnCloseNavigateMenu() {
        return $("#react-burger-cross-btn")
    }

    /**
     * @param item is value to combine to generate ID string
     * 
     * @return a element on nevigate bar
     */
    public nevigateItem(item) {
        return $('#' + item + "_sidebar_link")
    }

    /**
     * @return a element of Sort selector
     */
    public get sltSort() {
        return $(`//select[@class="product_sort_container"]`)
    }

    /**
     * @return array element of name of product
     */
    public getAllProductName() {
        const elems = $$(`//div[@class="inventory_item_name"]`)
        return elems.map((e) => e.getText())
    }

    /**
     * @return array element of price of product
     */
    public getAllProductPrice() {
        const elems = $$(`//div[@class="inventory_item_price"]`)
        return elems.map((e) => e.getText())
    }

    /**
     * @return a element of name of product
     */
    public getProductName(productName) {
        return $(`//div[text()="` + productName + `"]`)
    }


    /**
     * @return list product order by name (Asc)
     */
    public sortingAscProductList(sortList) {
        return sortList.sort()
    }

    /**
     * @return list product order by name (Decs)
     */
    public sortingDecsProductList(sortList) {
        return sortList.sort().reverse()
    }

}

export default new HomePage();