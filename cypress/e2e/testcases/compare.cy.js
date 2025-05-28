 import * as globalData from '../../e2e/testdata/global/globalTestData.json';
 import { baseUrl } from '../../support/utils/baseUrl'; // Adjust path as needed
 describe('Base generation and compare', () => {
    beforeEach(()=> {
        cy.visit(baseUrl() + globalData.url.Totalcontent);
        cy.title().should('contain', 'TotalContent Demo');
 
    })
    it.only('Home full page', () => {
       cy.scrollTo('bottom', { duration: 2000 })
       cy.wait(3000)
       cy.scrollTo('top', { duration: 2000 })
       cy.wait(3000)                                  
       cy.compareSnapshot(Cypress.currentTest.title + "_home_page") 
     })
  
   })