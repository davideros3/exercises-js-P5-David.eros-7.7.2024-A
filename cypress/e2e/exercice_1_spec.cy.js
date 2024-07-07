describe("Exercise 1", ()=>{
    beforeEach(() => {
        cy.visit("/Exercise1");
    })

    it("Should render the heading element", ()=>{
        cy.get('h1').contains('My first website', { matchCase: false })
    })
    it("Should render the paragraph element", ()=>{
        cy.get('p').contains('Welcome to my website!', {matchCase: false});
    })
})
