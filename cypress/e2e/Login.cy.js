/// <reference types="cypress" />

import LoginPage from '../pages/LoginPage.cy';

describe('Logar usuario', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Devo acessar o site e logar o usuario', () => {
        LoginPage.clickMenuPageInitial()
        LoginPage.clickMyAccount()
        LoginPage.fillEmailLogin('alissoncupinchaveio@hotmail.com')
        LoginPage.fillPasswordLogin('alissoncupinchaveio@123')
        LoginPage.btnLogin()
    });

});
