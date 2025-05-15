
require('cypress-xpath');
describe('Landing Page', () => {
    beforeEach(() => {
      cy.visit("https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html"); 
    });
  
    it('should redirects correctly on different viewports', () => {
      // Test on iPhone 6
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })
      cy.viewport('iphone-6');
      cy.get('#container-44e44b319b').should('be.visible'); 
      // Test on anroid
      cy.viewport('samsung-s10');
      cy.xpath('//ul[@data-initialyzer-id="results-load-more"]//dl[2]//div[5]//a[@title="Read More - What Is a Virtual Firewall?"]').click();
     // cy.visit("https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html")
      //cy.get("#list-search-56e2e2cf2a").type("Virtual")    // ID
    //cy.contains('SEARCH').click() 
    });
  });