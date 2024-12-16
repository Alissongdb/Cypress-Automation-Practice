/// <reference types="cypress" />

import RegisterPage from '../pages/RegisterPage.cy';

describe('Registrar usuario', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Devo registrar o usuario', () => {
    RegisterPage.clickMenuPageInitial();
    RegisterPage.clickMyAccount();
    RegisterPage.fillEmail('alissoncupinchaveio@hotmail.com');
    RegisterPage.fillPassword('alissoncupinchaveio@123');
    RegisterPage.btnRegister();

  });

});
