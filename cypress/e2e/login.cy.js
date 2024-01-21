/// <reference types="Cypress" />

describe('Fluxo de Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    })

    it('Deve fazer login bem sucedido', () => {

        cy.login_sucesso('aluno_ebac@teste.com', 'teste@teste.com')
        cy.get('.woocommerce-MyAccount-content').should("contain", "Olá, aluno_ebac")
    })

    it('Deve apresentar mensagem de erro para credenciais inválidas', () => {
        cy.login_erro_usuario('234@teste.com', 'teste@teste.com')
        cy.get('.woocommerce-error').should("contain", "Endereço de e-mail desconhecido.")

    })

})