//const cypress = require('cypress');

/// // <reference types="Cypress" />
require('cypress-xpath');
describe('Checking UI ELement',function () {
    it("Checking Radio button", function () {
      Cypress.on('uncaught:exception', (err, runnable) => {
          return false
          })
            
            cy.visit("https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html")
       cy.get('label[for="filter-tags-d1174eeea7-1"]').click()
       cy.xpath('//ul[@data-initialyzer-id="results-load-more"]//dl[2]//div[5]//a[@title="Read More - What Is a Virtual Firewall?"]').click()
       cy.get("input[placeholder='First Name']").type("Shriya")
       cy.get('#LastName').type("Patil")
       cy.get('#Email').type("jphulsunge@initialyze.com")
       cy.xpath('//*[@id="mktoForm_1001"]/div[5]/span/button').click()
       const numberOfRefreshes = 5;

    //cy._.times(numberOfRefreshes, (index) => {
      //cy.log(`Refreshing page - Attempt ${index + 1}`);
      cy.reload();
      cy.url().should('include', 'what-is-a-virtual-firewall.html');
      // Add assertions if needed
      cy.log('All refreshes completed.');
      cy.reload();
    });

   
      })
      
       //cy.xpath('//*[@id="totalContent-navigation"]/ul/li[1]/a').click()
       //cy.xpath('//*[@id="container-27765f2973"]/div[2]/div/ul/li[2]/article/dl[2]/div[5]/dd/a/span').click()

       
    
  
    
  
    
    