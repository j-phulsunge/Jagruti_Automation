// <reference types="Cypress" />
require('cypress-xpath');
describe('Test', function () {
  it('logs into google', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })


    //it('should successfully log in with valid credentials', () => {
      cy.visit('https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html') 
      cy.xpath('//*[@id="container-484f032f46"]/div[2]/div/ul/li[2]/article/dl[2]/div[1]/dd/a').click()
      cy.get('.cmp-userinfo__loginBtn > .cmp-button__text').click()
      cy.origin('https://auth0dev.initialyze.com',()=>{
        const email = 'test@example.com'; 
        const password = 'securepassword'; 
        cy.get('#username').type('jphulsunge@initialyze.com')
        cy.get('#password').type('Tiya@1234')
       cy.get('.c374f5b8a.c1085a438.ccdf87e4e.cc02a3617.cbb792e2c').click()
      })  
      
      
      


    } )
})