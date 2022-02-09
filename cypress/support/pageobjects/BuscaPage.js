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
    buscar() {
        cy.get(buscaElements.input_busca())
            .click()
            .type()
        cy.get(buscaElements.button_debentures())
            .click()
    }

    click_detalhes() {
        cy.get(buscaElements.button_detalhes())
            .click()

    }
}

export default BuscaPage;

// aqui ficam as funções que serão chamadas nos steps
