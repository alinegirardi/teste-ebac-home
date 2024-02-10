///<reference types="cypress"/>

describe('Funcionalidade: Cadastro de notas', () =>{
    it('Deve cadastrar as notas dos alunos', () =>{
        cy.visit('https://diego-projeto-calculadoras-medias.vercel.app/')
        cy.get('#nome-atividade').type('Prova de QA')
        cy.get('#nota-atividade').type('7')
        cy.get('button').click()

        cy.get('#nome-atividade').type('Atividade 1')
        cy.get('#nota-atividade').type('10')
        cy.get('button').click()

        cy.get('#nome-atividade').type('Atividade 2')
        cy.get('#nota-atividade').type('9')
        cy.get('button').click()

      })
})