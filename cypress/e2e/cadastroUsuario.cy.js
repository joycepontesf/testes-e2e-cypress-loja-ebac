/// <reference types="Cypress" />

const { faker } = require('@faker-js/faker');

describe('Funcionalidade Cadastro de Pessoa Usuária', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    })

    it('Deve cadastrar novo usuário com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should("contain", "Detalhes da conta")
    })

    it('Não deve permitir cadastro com email repetido', () => {
        cy.get('#reg_email').type("Araceli.Bednar@gmail.com")
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error'). should('contain', 'Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.')
    })
})