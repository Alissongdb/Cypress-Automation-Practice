/// <reference types="cypress" />

import RegisterPage from '../pages/RegisterPage.cy';

describe('Registrar usuario', () => {
  it('Devo acessar o site e registrar o usuario', () => {
    RegisterPage.visit()
    RegisterPage.clickBtnRegister()
    RegisterPage.fillFirstName('Alisson')
    RegisterPage.fillLastName('Dal Bosco')
    RegisterPage.fillAddress('Teste de endereco')
    RegisterPage.fillEmail('abcdefghijklmnopq@hotmail.com')
    RegisterPage.fillPhone('2783648276348273648')
    RegisterPage.fillGender()
    RegisterPage.fillHobbies()
    RegisterPage.fillSkills()
    RegisterPage.fillCountry()
    RegisterPage.fillBirthday()
    RegisterPage.fillPasswords('senhatest')
    RegisterPage.btnSubmit()
    
    
  })
})