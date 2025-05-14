const { describe } = require("mocha");

describe('1st screenshot',()=>
{
  it('capture screenshot',()=>
  {
    cy.visit("https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html");
    cy.screenshot("homepage");
    cy.get("img[alt='TotalConetent']").screenshot("logo");

  })
  
})
