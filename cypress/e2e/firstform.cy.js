//<reference types="Cypress" />
require('cypress-xpath');

describe('Login Functionality Test', () => {
    beforeEach(() => {
    
    
        cy.visit("https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo/articles/what-is-a-virtual-firewall.html")
        cy.get("input[placeholder='First Name']").type("Shriya")
     



    } )

} )