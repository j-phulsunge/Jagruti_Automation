
require('cypress-xpath');
describe('Hover interaction', () => {
    it('should show the hidden element on hover', () => {
      cy.visit('https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html'); 
  
    
      cy.xpath('//*[@id="container-484f032f46"]/div[2]/div/ul/li[3]/article/dl[1]/div').trigger('mouseover');
        cy.xpath('//*[@id="container-484f032f46"]/div[2]/div/ul/li[3]/article/dl[1]/div/dd/div/img').should('be.visible');
  
       
      
    });
  });