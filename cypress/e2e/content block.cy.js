
require('cypress-xpath');
describe('Visual Testing of Content Blocks', () => {
    beforeEach(() => {
      cy.visit('https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html'); 
    });
  
    it('should visually verify the title', () => {
     
            cy.xpath('//*[@id="container-6caf269b73"]/div[2]/div') 
        .should('be.visible')
       
    });
  
    it('should visually verify the image', () => {
      cy.get('#image-a95f1b5c45 > img') 
        .should('be.visible')
       
    });
  
     
    it('should visually verify the call to action button', () => {
      cy.get('a[title="Read More - Next-Gen Virtual Firewall Solutions Enhance Network Security"] span')
        .should('be.visible')
        
           
    
})
  });
