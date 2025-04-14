// <reference types="Cypress" />
require('cypress-xpath');

describe('Checking UI ELement',()  =>  {

    it("Checking Radio button",() => {
    
    
        cy.visit("https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html?1t.c=ae&1t.0=aem-initialyzer.resource-type~article&orderby=%40date&orderby.sort=asc")
       cy.xpath('//*[@id="container-484f032f46"]/div[2]/div/ul/li[1]/article/dl[2]/div[1]/dd/a/span').click()
            
     



    
    } )

} )