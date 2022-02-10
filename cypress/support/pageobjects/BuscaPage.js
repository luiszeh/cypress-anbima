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
    buscar(debenture) {
        cy.get(buscaElements.inputBusca())
            .click()
            .type(debenture)
        cy.get(buscaElements.buttonDebentures())
            .click()
    }

    buscarInexistente(debentureInexistente) {
        cy.get(buscaElements.inputBusca())
            .click()
            .type(debentureInexistente)
        cy.get(buscaElements.buttonDebentures())
            .click()
    }
}

export default BuscaPage;

// aqui ficam as funções que serão chamadas nos steps
