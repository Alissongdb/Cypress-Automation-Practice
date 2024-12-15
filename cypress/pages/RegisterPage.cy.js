/// <reference types="cypress" />


class RegisterPage {
    visit() {
        cy.visit('/');
    }

    clickBtnRegister() {
        cy.get('#btn2')
            .click()
    }

    fillFirstName(name) {
        cy.get(':nth-child(1) > :nth-child(2) > .form-control')
            .type(name)
    }

    fillLastName(lastname) {
        cy.get(':nth-child(1) > :nth-child(3) > .form-control')
            .type(lastname)
    }

    fillAddress(address) {
        cy.get('.col-md-8 > .form-control')
            .type(address)
    }

    fillEmail(email) {
        cy.get('#eid > .form-control')
            .type(email)
    }

    fillPhone(phone) {
        cy.get(':nth-child(4) > .col-md-4 > .form-control')
            .type(phone)
    }

    fillGender() {
        cy.get(':nth-child(5) > .col-md-4 > :nth-child(1) > input')
            .check()

    }

    fillHobbies() {
        cy.get('#checkbox2')
            .should('be.visible')
            .click();
    }

    fillSkills() {
        cy.get('#Skills')
            .select('Javascript')

    }

    fillCountry() {
        cy.get('.select2-selection')
            .click()
        cy.get('#select2-country-results > :nth-child(2)')
            .click()
    }

    fillBirthday() {
        cy.get('#yearbox')
            .select('1999')

        cy.get(':nth-child(11) > :nth-child(3) > .form-control')
            .select('December')

        cy.get('#daybox')
            .select('13')

    }

    fillPasswords(password) {
        cy.get('#firstpassword')
            .type(password)

        cy.get('#secondpassword')
            .type(password)

    }

    btnSubmit() {
        cy.get('#submitbtn')
            .click()
    }







}

export default new RegisterPage();
