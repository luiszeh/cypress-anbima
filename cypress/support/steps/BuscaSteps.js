/// <reference types="Cypress" />
/* global Given, Then, When */

import BuscaPage from '../pageobjects/BuscaPage'
const buscaPage = new BuscaPage
import BuscaElements from '../elements/BuscaElements';
const buscaElements = new BuscaElements;

Given("que estou na página inicial", () => {
    buscaPage.acessarSite();
})

// ------------------------------- WHEN --------------------------------------

When("realizo a busca por {string}, utilizando a opção Debêntures", (debenture) => {
    buscaPage.buscar(debenture);
})

When("realizo a busca por uma Debênture {string}", (debentureInexistente) => {
    buscaPage.buscarInexistente(debentureInexistente);
})

// ------------------------------- THEN --------------------------------------

Then("visualizo o ativo {string} no resultado da busca", (debentureThen) => {
    cy.get(buscaElements.resultadoBusca(debentureThen))
})

Then("visualizo que a busca não foi encontrada", () => {
    cy.get(buscaElements.resultadoBuscaInexistente())
        .should('be.visible')
})

// aqui "linkamos" a feature com as funções a serem executadas
