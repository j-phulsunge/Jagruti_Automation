
/// // <reference types="Cypress" />
require('cypress-xpath');
describe('filter/search', () => {
    it('Verify keyword search returns correct results and multiple filter.', () => {
      
       cy.visit("https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html")
                  
      cy.get("#list-search-56e2e2cf2a").type("Virtual")    // ID
      cy.contains('SEARCH').click() 
         
      cy.get('label[for="filter-tags-787c3f3963-1"]').click()// multiple filter
       cy.get('label[for="filter-tags-d1174eeea7-1"]').click()
      })

   })
   
