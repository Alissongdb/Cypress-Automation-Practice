/// <reference types="cypress" />

class ShopPage {

    clickMenuPageInitial() {
        cy.get('#menu-icon').click();
    }

    clickMyAccount() {
        cy.contains('Shop').click();
    }

    chooseItem() {
        cy.get('.post-169 > .woocommerce-LoopProduct-link > .attachment-shop_catalog')
            .click()
    }

    btnAddBasket() {
        cy.get('.single_add_to_cart_button')
            .click()
    }

    btnViewBasket() {
        cy.get('.woocommerce-message > .button')
            .click()
    }

    btnCheckout() {
        cy.get('.checkout-button')
            .click()
    }

    billingPageVisible() {
        cy.get('.woocommerce-billing-fields > h3')
            .should('have.text', 'Billing Details')
    }

    fillFirstName() {
        cy.get('#billing_first_name')
            .type('Alisson')
    }

    fillLastName() {
        cy.get('#billing_last_name')
            .type('Bosco')
    }

    fillCompany() {
        cy.get('#billing_company')
            .type('My Company')
    }

    fillEmailAddress() {
        cy.get('#billing_email')
            .type('alissoncupinchaveio@hotmail.com')
    }

    fillPhoneNumber() {
        cy.get('#billing_phone')
            .type('5541985746578')
    }

    fillAddress() {
        cy.get('#billing_address_1')
            .type('Rua teste alisson')
    }

    fillCity() {
        cy.get('#billing_city')
            .type('City teste')
    }

    fillPostCode() {
        cy.get('#billing_postcode')
            .type('856475947')
    }

    fillAddInformation() {
        cy.get('#order_comments')
            .type('Informacoes adicionais sobre minha compra teste')
    }

    btnPlaceHolder() {
        cy.get('#place_order')
            .click()
    }

    messageOrderDetailsSucess() {
        cy.get('.woocommerce-thankyou-order-received')
            .should('have.text', 'Thank you. Your order has been received.')
    }




}

export default new ShopPage();

