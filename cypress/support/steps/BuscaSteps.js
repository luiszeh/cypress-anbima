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

When("realizo a busca por AALM11, utilizando a opção Debêntures", () => {
    buscaPage.buscarB3();
})

When("realizo a busca por BRAALMDBS009, utilizando a opção Debêntures", () => {
    buscaPage.buscarIsin();
})

When("realizo a busca por AURA ALMAS MINERACAO S.A, utilizando a opção Debêntures", () => {
    buscaPage.buscarEmissor();
})

When("realizo a busca por OLIVEIRA TRUST DTVM, utilizando a opção Debêntures", () => {
    buscaPage.buscarAgente();
})

When("realizo a busca por 08213823000107, utilizando a opção Debêntures", () => {
    buscaPage.buscarCnpj();
})

When("realizo a busca por uma Debênture INEXISTENTE", () => {
    buscaPage.buscarInexistente();
})

// ------------------------------- THEN --------------------------------------

Then("visualizo o ativo AALM11 no resultado da busca", () => {
    cy.get(buscaElements.resultadoBusca())
        .should('have.text', 'AALM11')
})

Then("não visualizo o ativo AALM11 no resultado da busca", () => {
    cy.get(buscaElements.resultadoBusca())
        .should('not.exist')
})

// Then("visualizo o texto: Não encontramos o que você procura", () => {
//     cy.get(buscaElements.resultadoBuscaInexistente())
//         .should('have.text', 'Não encontramos o que você procura')
// })

// Then("visualizo o texto: Não encontramos o que você procura", () => {
//     cy.xpath('//h3[@class="title-normal"]')
//         .should('have.text', 'Não encontramos o que você procura')
// })

// aqui "linkamos" a feature com as funções a serem executadas
