
/// // <reference types="Cypress" />
require('cypress-xpath');
describe('Logo exists', () => {
    it('assertions', () => {
      
       cy.visit("https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html")
      
       cy.get('#image-a95f1b5c45 > .cmp-image__image').should('be.visible')
      .and('exist')
      cy.get('label[for="filter-tags-d1174eeea7-1"]').click()
      cy.xpath('//*[@id="container-3dd89b40f4"]/div[4]/div/div/div[2]/a/i').click()
      cy.get("#list-search-56e2e2cf2a").type("Virtual")    // ID
      cy.contains('SEARCH').click() 
      //cy.get('label[for="filter-tags-d1174eeea7-1"]').click()
cy.get('label[for="filter-tags-787c3f3963-1"]').click()
       cy.get('label[for="filter-tags-d1174eeea7-1"]').click()
    })
  })