require('cypress-xpath');
describe('Empty State UI Test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })

    it('shows the empty state when no results are found', () => {
     
      cy.visit('https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo/articles/what-is-a-virtual-firewall.html');
  
      //  Assert the empty state text
      cy.get('#FirstName').should('be.visible').click();
      cy.get('button[type="submit"]').click();
           cy.get('#ValidMsgFirstName').should('contain.text', 'This field is required.');
  });

      
       
  
      
    });
