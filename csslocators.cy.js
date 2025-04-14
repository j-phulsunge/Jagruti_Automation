
describe('csslocator',()  =>  {

it("csslocators",() => {


    cy.visit("https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html")
    cy.get("#list-search-56e2e2cf2a").type("Virtual")    // ID
    cy.contains('SEARCH').click()   // contain Assertions




 

})

} )