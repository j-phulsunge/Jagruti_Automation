describe('Visual Testing', () => {
     Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })

    it('should compare the detail page ', () => {
      cy.visit('https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo/press-releases/what-is-a-virtual-firewall.html');
      cy.compareSnapshot('detail page '); 
    });
  });
  