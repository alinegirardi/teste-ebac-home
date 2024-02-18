///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
            //.first().click()
            //.last().click()
            //.eq(2).click()
            .contains('Ariel Roll Sleeve Sweatshirt').click()
            cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});