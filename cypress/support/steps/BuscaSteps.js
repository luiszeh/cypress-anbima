/// <reference types="Cypress" />
/* global Given, Then, When */

import BuscaPage from '../pageobjects/BuscaPage'
const buscaPage = new BuscaPage
import BuscaElements from '../elements/BuscaElements';
const buscaElements = new BuscaElements;

Given("que estou na página inicial", () => {
    buscaPage.acessarSite();
})

// ------------------------- WHEN -------------------------------------------

When("realizo a busca por AALM11, utilizando a opção Debêntures", () => {
    buscaPage.buscar();
})

// ------------------------- THEN -------------------------------------------

Then("visualizo o ativo AALM11 no resultado da busca", () => {
    cy.get(buscaElements.resultado_busca())
        .should('have.text', 'AALM11')
})

// aqui "linkamos" a feature com as funções a serem executadas
