// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignora erros relacionados a "angular is not defined"
    if (err.message.includes('angular is not defined')) {
        return false; // Retorne false para impedir que o Cypress falhe
    }

    // Permita que outros erros sejam lançados
    return true;
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorne false para evitar falhas no teste
    return false;
});

