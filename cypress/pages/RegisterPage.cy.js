/// <reference types="cypress" />

class RegisterPage {

    clickMenuPageInitial() {
        cy.get('#menu-icon').click();
    }

    clickMyAccount() {
        cy.contains('My Account').click();
    }

    fillEmail(email) {
        cy.get('#reg_email')                
            .type(email);     
    }

    fillPassword(password) {
        cy.get('#reg_password')
            .type(password);
    }

    btnRegister() {
        cy.get('.woocomerce-FormRow > .woocommerce-Button')
            .click();
    }

}

export default new RegisterPage();
