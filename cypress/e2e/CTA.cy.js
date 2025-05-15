describe('CTA Button Validation', () => {
    beforeEach(() => {
      
      cy.visit('https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html');
    });
  
    it('should display CTA button(s) with correct text ', () => {
    
      cy.get('a[title="Read More - Next-Gen Virtual Firewall Solutions Enhance Network Security"] span') 
        .should('be.visible') 
        .and('contain.text', 'Read More'); 
  
            cy.get('a[title="Read More - Next-Gen Virtual Firewall Solutions Enhance Network Security"] span').then(($el) => {
        const style = window.getComputedStyle($el[0]);
  
        
      });
    });
  
    it('should be placed correctly ', () => {
      // Validate parent container (optional)
      cy.get('a[title="Read More - Next-Gen Virtual Firewall Solutions Enhance Network Security"] span')
        .should('exist')
        .parents('.cmp-list-results__group')
        .should('exist');
    });
  
    
    });
  
  