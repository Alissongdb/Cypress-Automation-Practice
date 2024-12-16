/// <reference types="cypress" />

import ShopPage from '../pages/ShopPage.cy';


describe('Logar usuario', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Devo adicionar o produto ao carrinho e finalizar a compra', () => {
        ShopPage.clickMenuPageInitial()
        ShopPage.clickMyAccount()
        ShopPage.chooseItem()
        ShopPage.btnAddBasket()
        ShopPage.btnViewBasket()
        ShopPage.btnCheckout()
        ShopPage.billingPageVisible()
        ShopPage.fillFirstName()
        ShopPage.fillLastName()
        ShopPage.fillCompany()
        ShopPage.fillEmailAddress()
        ShopPage.fillPhoneNumber()
        ShopPage.fillAddress()
        ShopPage.fillCity()
        ShopPage.fillPostCode()
        ShopPage.fillAddInformation()
        ShopPage.btnPlaceHolder()
        ShopPage.messageOrderDetailsSucess()

    });


});
