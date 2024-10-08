///<reference types="cypress"/>

describe('Funcionalidade: Detalhes da conta', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/edit-account/')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
            //cy.login('aline.teste@teste.com.br', 'teste@123') --> inves de utilizar dados fixos, colocamos o cy.login dentro do método fixtture
        })
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Aline', 'Girardi', 'aline.teste')
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso')
    });
});

