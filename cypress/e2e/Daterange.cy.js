require('cypress-xpath');
describe('Visual Test Date Range Picker', () => {
  it('should visually select a date range and verify UI changes', () => {
    cy.visit('https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html');

    const startDate = '2025-05-15';
    const endDate = '2025-05-20';

      cy.xpath('//*[@id="container-3dd89b40f4"]/div[9]/div/div/div[1]/i').click();
    // Open the date picker
    
    // Select the start date
    cy.get('#predicateLowerBoundName').click();

    // Select the end date
    cy.get('#filter-daterange-85b60406ac_collapse').click();

    // Assert values in the input fields (optional)
    //cy.get('#predicateLowerBoundName').should('have.value', '2025-05-15');
    //cy.get('#predicateUpperBoundName').should('have.value', '2025-05-20');
  });
});