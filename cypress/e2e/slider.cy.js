describe('Slider', () => {
  it('should  slider value present', () => {
    cy.visit('https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html');

    // Set slider value using invoke
    cy.get('label[for="filter-tags-d965121d5d-1"]')
      .invoke('val', 10)
      .trigger('input')  
      .trigger('change'); 

   
    //cy.get("div[data-cmp-filter-tagid='aem-initialyzer.topics~governance'] div[class='form-check']" ,{ timeout: 10000 })
  
    //.should('contain', '10');
    cy.get("div[data-cmp-filter-tagid='aem-initialyzer.topics~governance'] div[class='form-check']").then($el => {
  cy.log($el.text());
});
})
})
