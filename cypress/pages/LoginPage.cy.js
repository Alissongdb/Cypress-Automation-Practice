/// <reference types="cypress" />

class LoginPage {

    clickMenuPageInitial() {
        cy.get('#menu-icon').click();
    }

    clickMyAccount() {
        cy.contains('My Account').click();
    }

    fillEmailLogin(emailLogin) {
        cy.get('#username')
            .type(emailLogin)
    }

    fillPasswordLogin(passwordLogin) {
        cy.get('#password')
            .type(passwordLogin)
    }

    btnLogin() {
        cy.get(':nth-child(3) > .woocommerce-Button')
            .click()
    }

    MessageLogin() {
        cy.get('.woocommerce-MyAccount-content > :nth-child(1)')
            .should('have.text', 'alissoncupinchaveio')
    }

}

export default new LoginPage();
