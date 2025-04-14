describe('Logo exists', () => {
    it('assertions', () => {
      
       cy.visit("https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html")
      cy.get('#image-a95f1b5c45 > .cmp-image__image').should('be.visible')
      .and('exist')

    })
  })