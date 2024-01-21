const { faker } = require('@faker-js/faker');

describe('Funcionalidade Cadastro de Pessoa Usuária', () => {

    let nomeFaker = faker.name.firstName()
    let sobrenomeFaker = faker.name.lastName()
    let senhaFaker = faker.internet.password()
    let emailFaker = faker.internet.email(nomeFaker)

    beforeEach(() => {
        cy.visit('minha-conta')
    })

    it('Deve cadastrar novo usuário com sucesso', () => {
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(senhaFaker, { log: false })
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should("contain", "Detalhes da conta")
    })

    it('Não deve permitir cadastro com email repetido', () => {
        cy.fixture('usuario').then((dados) => {
            cy.get('#reg_email').type(dados.usuario)
            cy.get('#reg_password').type(senhaFaker, { log: false })
        })        
        cy.get('.button').contains('Register').click()
        cy.get('.woocommerce-error'). should('contain', 'Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.')
    })
})