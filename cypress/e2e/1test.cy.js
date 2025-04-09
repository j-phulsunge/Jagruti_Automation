describe('My First Test', () => {
    it('Test1', () => {
      
       cy.visit("https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home.html")
       cy.title().should('eq','Introduction')

    })
  })