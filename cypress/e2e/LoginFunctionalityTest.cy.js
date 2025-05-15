// <reference types="Cypress" />
require('cypress-xpath');
describe('Test', function () {
  //it('logs into google', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })

       
           it('should successfully log in with valid credentials', () => {
      cy.visit('https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html');
      cy.xpath('//div[@id="container-484f032f46"]//li[2]//a[contains(@title, "Read Next-Gen Virtual Firewall Solutions Enhance Network Security")]').click()
      cy.get('.cmp-userinfo__loginBtn > .cmp-button__text').click()
      cy.origin('https://auth0dev.initialyze.com',  ()=>{
        //const email = 'test@example.com'; 
        const password = 'Tiya@1234'; 
        const email = 'jphulsunge@initialyze.com'; 
        cy.get('#username').type(email)
        cy.get('#password').type(password)
       cy.get('.c374f5b8a.c1085a438.ccdf87e4e.cc02a3617.cbb792e2c').click()
       //cy.pause()
             cy.get('[data-cmp-hook-userinfo=”logout”]').click()
             cy.xpath('//*[@id="container-header"]/div[3]/div/div/div[2]/div[3]/button/span').click()
             cy.xpath('//*[@id="image-06376218d9"]/a/img').click
       //cy.visit('https://publish-p30618-e1050810.adobeaemcloud.com/content/aem-initialyzer-docs/us/en/home.html',() =>{
      cy.reload()
      })
    
    })
    
         

    } )

  