describe('basic test', () => {

    it('allows api calls with pipes', () => {
        cy.server().route('/api*').as('api')

        cy.visit('/');
        cy.wait('@api');
        cy.get('#result').should('contain', '1|2')
    })
    
})