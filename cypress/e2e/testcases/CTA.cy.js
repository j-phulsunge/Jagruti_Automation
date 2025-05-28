import * as globalData from '../../e2e/testdata/global/globalTestData.json';
import { baseUrl } from '../../support/utils/baseUrl'; 

 beforeEach(()=> {
        cy.visit(baseUrl() + globalData.url.Totalcontent);
         cy.title().should('contain', 'TotalContent Demo');

                 })

describe('CTA Button Validation', () => {
        it('should display CTA button(s) with correct text ', () => {
    
      cy.get('a[title="Read More - Next-Gen Virtual Firewall Solutions Enhance Network Security"] span') 
        .should('be.visible') 
        .and('contain.text', 'Read More'); 
  
            cy.get('a[title="Read More - Next-Gen Virtual Firewall Solutions Enhance Network Security"] span').then(($el) => {
        const style = window.getComputedStyle($el[0]);
  
        
      });
    });
  
    it('should be placed correctly ', () => {
      // Validate parent container 
      cy.get('a[title="Read More - Next-Gen Virtual Firewall Solutions Enhance Network Security"] span')
        .should('exist')
        .parents('.cmp-list-results__group')
        .should('exist');
    });
  
    
    });
  
  