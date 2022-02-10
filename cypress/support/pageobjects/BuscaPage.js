/// <reference types="Cypress" />

import BuscaElements from '../elements/BuscaElements';
const buscaElements = new BuscaElements;
const url = Cypress.config("baseUrl");

class BuscaPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Realiza a busca por debentures
    buscarB3() {
        cy.get(buscaElements.inputBusca())
            .click()
            .type('AALM11')
        cy.get(buscaElements.buttonDebentures())
            .click()
    }

    buscarIsin() {
        cy.get(buscaElements.inputBusca())
            .click()
            .type('BRAALMDBS009')
        cy.get(buscaElements.buttonDebentures())
            .click()
    }

    buscarEmissor() {
        cy.get(buscaElements.inputBusca())
            .click()
            .type('AURA ALMAS MINERACAO S.A')
        cy.get(buscaElements.buttonDebentures())
            .click()
    }

    buscarAgente() {
        cy.get(buscaElements.inputBusca())
            .click()
            .type('OLIVEIRA TRUST DTVM S/A')
        cy.get(buscaElements.buttonDebentures())
            .click()
    }

    buscarCnpj() {
        cy.get(buscaElements.inputBusca())
            .click()
            .type('08213823000107')
        cy.get(buscaElements.buttonDebentures())
            .click()
    }

    buscarInexistente() {
        cy.get(buscaElements.inputBusca())
            .click()
            .type('INEXISTENTE')
        cy.get(buscaElements.buttonDebentures())
            .click()
    }
}

export default BuscaPage;

// aqui ficam as funções que serão chamadas nos steps
