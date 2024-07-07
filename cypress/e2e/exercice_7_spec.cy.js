describe('Exercise 7: ', () => {
  beforeEach(() => {
    cy.visit("/Exercise7");
  })
  it('Normal display must be as defined on creating project', () => {
    cy.get('h1').should('have.css', 'font-size', '30px');
    cy.get('nav ul').should('have.css', 'display', 'flex')
    cy.get('nav ul').should('have.css', 'flex-direction', 'row')
    cy.get('nav ul li:first').should('have.css', 'margin-right', '20px')
    })
  it("Shows on responsive some changes", ()=>{
    cy.viewport(320, 900)
    cy.get('h1').should('have.css', 'font-size', '20px');
    cy.get('nav ul').should('have.css', 'display', 'flex')
    cy.get('nav ul').should('have.css', 'flex-direction', 'column')
    cy.get('nav ul li:first').should('have.css', 'margin-right', '0px')
  })
})

