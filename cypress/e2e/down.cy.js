
describe('Download', () => {

it('should download file on link click', () => {
  
  cy.visit('https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html');
  
  cy.get('a[title="Download - EZ Events"]').click();
  cy.readFile("D:\\Jagruti-Automation\\cypress\\downloads\\EZ Events.pdf").should('exist');
});


})