import dadosDeCompra from "../support/pages/dadosDeCompra.page"

describe('Validação do Fluxo de Compra', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('usuario').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
    })

    it('Deve fazer pedido ponta a ponta na EBAC SHOP', () => {

        let produto1 = "Atlas Fitness Tank"
        let produto2 = "Aero Daily Fitness Tee"
        let produto3 = "Atomic Endurance Running Tee (V-neck)"
        let produto4 = "Autumn Pullie"

        cy.addProdutos('Atlas Fitness Tank', 'S', 'Blue', 'Aero Daily Fitness Tee', 'XS', 'Black', 'Atomic Endurance Running Tee (V-neck)', 'S', 'Green', 'Autumn Pullie', 'XS', 'Purple')
        dadosDeCompra.preencherDadosCompra()
        cy.get('.page-title').should("be.visible")
        cy.get('.woocommerce-notice', { timeout: 10000 }).should("contain", "Obrigado. Seu pedido foi recebido.")
        cy.get('tbody > :nth-child(1) > .product-name').should("contain", produto1)
        cy.get('tbody > :nth-child(2) > .product-name').should("contain", produto2)
        cy.get(':nth-child(3) > .product-name').should("contain", produto3)
        cy.get(':nth-child(4) > .product-name').should("contain", produto4)
    })

})