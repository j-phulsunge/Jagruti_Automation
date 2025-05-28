describe('Visual Regression Test', () => {
  
    beforeEach(() => {
      cy.visit('https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html'); 
      cy.compareSnapshot('homepage'); 
    });
  
    it('should match the full page snapshot', () => {
      cy.compareSnapshot(); 
    });
  
    it('should match a specific element snapshot', () => {
      cy.get('#container-44e44b319b').compareSnapshot('homepage-banner'); 
    });
  
  
          });