describe('Visual Test', () => {
    it('should look the same', () => {
        cy.visit('https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html');
      cy.compareSnapshot('homepage', 0.5); 
    });
  });
  