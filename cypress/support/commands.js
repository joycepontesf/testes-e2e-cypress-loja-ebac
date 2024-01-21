Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('addProdutos', (produto1, tamanho1, cor1, produto2, tamanho2, cor2, produto3, tamanho3, cor3, produto4, tamanho4, cor4) => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('[class="product-block grid"]')
        .contains(produto1).click()
    cy.get('.woocommerce-product-gallery').should("be.visible")
    cy.get('.button-variable-item-' + tamanho1).click()
    cy.get('.button-variable-item-' + cor1).click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('[class="product-block grid"]')
        .contains(produto2).click()
    cy.get('.button-variable-item-' + tamanho2).click()
    cy.get('.button-variable-item-' + cor2).click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(2) > .page-numbers').click()
    cy.get('[class="product-block grid"]')
        .contains(produto3).click()
    cy.get('.button-variable-item-' + tamanho3).click()
    cy.get('.button-variable-item-' + cor3).click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(2) > .page-numbers').click()
    cy.get('[class="product-block grid"]')
        .contains(produto4).click()
    cy.get('.button-variable-item-' + tamanho4).click()
    cy.get('.button-variable-item-' + cor4).click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()

})

Cypress.Commands.add("login_sucesso", (email, password) => {
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get('.woocommerce-form > .button').click()
    
})

Cypress.Commands.add("login_erro_usuario", (email, password) => {
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get('.woocommerce-form > .button').click()

})

Cypress.Commands.add("login_erro_senha", (email, password) => {
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should("contain", "Erro: a senha fornecida")
})