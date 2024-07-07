describe('Exercise 5: ', () => {
    beforeEach(() => {
        cy.visit("/Exercise5");
    })
    it('Have an anchor link that leads to Home', () => {
        cy.contains('a', 'Home', {matchCase: false}).should('have.attr', 'href', '#accueil')
    })
    it('Have an anchor link that leads to About', () => {
        cy.contains('a', 'About', {matchCase: false}).should('have.attr', 'href', '#a-propos').click()
    })
    it('Have an anchor link that leads to Services', () => {
        cy.contains('a', 'Services', {matchCase: false}).should('have.attr', 'href', '#services')
    })
    it('Have an anchor link that leads to Contact', () => {
        cy.contains('a', 'Contact', {matchCase: false}).should('have.attr', 'href', '#contact')
    })
})
