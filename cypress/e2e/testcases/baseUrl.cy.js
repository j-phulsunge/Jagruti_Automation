import * as globalData from '../testdata/global/globalTestData.json';
import { baseUrl } from '../../support/utils/baseUrl'; // Adjust path as needed
describe('Base URL Test', () => {
 beforeEach(()=> {
        cy.visit(baseUrl() + globalData.url.Totalcontent);
         cy.title().should('contain', 'TotalContent Demo');

                 })
  it('should print the base URL', () => {
    const url = baseUrl();
    cy.log('Resolved URL: ' + url);

    cy.visit(url);
  })
       
    })
  