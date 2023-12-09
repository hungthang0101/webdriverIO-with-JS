import { When, Then } from '@wdio/cucumber-framework';
import HomePage from '../page-objects/home.page.js';

//initialize global variable, array product (name, price)
let productNameList, productPriceList, productNameListSortOnPage, productPriceListSortOnPage;

//pick up function to sort list product corresponding with sort option
const selectSortFuncWithSortOption = {
    "Name (A to Z)": "HomePage.sortingAscProductList(productNameList)",
    "Name (Z to A)": "HomePage.sortingDecsProductList(productNameList)",
    "Price (low to high)": "HomePage.sortingAscProductList(productPriceList)",
    "Price (high to low)": "HomePage.sortingDecsProductList(productPriceList)",
}
//pick up expected to check list product corresponding with sort option
const selectExpectedWithSortOption = {
    "Name (A to Z)": "expect(productNameListSortOnPage).toEqual(sorted)",
    "Name (Z to A)": "expect(productNameListSortOnPage).toEqual(sorted)",
    "Price (low to high)": "expect(productPriceListSortOnPage).toEqual(sorted)",
    "Price (high to low)": "expect(productPriceListSortOnPage).toEqual(sorted)",
}





Then(/^User see (.*) which is displayed on the product listing page$/, async (productName) => {
    await expect(HomePage.getProductName(productName)).toBeDisplayed()
});

When(/^User select to (.*)$/, async (sortItem) => {
    productNameList = await HomePage.getAllProductName()    //get array name of product BEFORE select sort option
    productPriceList = await HomePage.getAllProductPrice()  //get array price of product BEFORE select sort option
    await (await HomePage.sltSort).selectByVisibleText(sortItem)
});

Then(/^User see product list which is sorted corresponding with (.*) option$/, async (sortItem) => {
    productNameListSortOnPage = await HomePage.getAllProductName()      //get array name of product value AFTER select sort option
    productPriceListSortOnPage = await HomePage.getAllProductName()     //get array price of product AFTER select sort option
    
    const sorted = await selectSortFuncWithSortOption[sortItem]
    await selectExpectedWithSortOption[sortItem]
});
