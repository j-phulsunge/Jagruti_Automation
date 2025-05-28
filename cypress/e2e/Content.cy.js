describe('Check Headings and Paragraphs', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })

    it('Should verify heading and paragraph text', () => {
      cy.visit('https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo/articles/what-is-a-virtual-firewall.html');   
      // Check H1 heading
      cy.get('h1').should('contain.text', 'What Is a Virtual Firewall?');
  
        
      // Check first paragraph
      cy.get('p.cmp-text__paragraph', { timeout: 10000 }) // 10 seconds
  .should('contain.text', 'Update this text using page properties');

      // Check all paragraphs
      cy.get('p').each(($el, index, $list) => {
        cy.wrap($el).should('be.visible'); // Optional: checks visibility
      });
    });
  });
  