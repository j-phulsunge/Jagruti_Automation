describe('Hero/Header Visual Test', () => {
    it('captures the hero component with title and banner', () => {
      
      cy.visit('https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html');
  
     
      cy.wait(1000);
       
      cy.get('#container-44e44b319b')  
        .should('be.visible');
      
      cy.get('#container-44e44b319b').compareSnapshot('hero-header');
    })
  });
  