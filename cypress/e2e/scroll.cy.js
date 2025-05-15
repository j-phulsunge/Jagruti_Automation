describe('Scroll and capture image', () => {
  beforeEach(() => {
    cy.visit('https://publish-p30618-e1050810.adobeaemcloud.com/en-us/home/frameworks/totalcontent/demo.html'); 
  });

  it('Scrolls to elements and captures screenshots', () => {
    // Capture top of the page
    cy.screenshot('top-of-page');

    // Scroll to a specific element and capture
    cy.get('#page-c23b384f4a')
      .scrollIntoView()
      .should('be.visible');

    cy.screenshot('#page-c23b384f4a');

    // Optional: Scroll to bottom of page and capture
    cy.scrollTo('bottom');
    cy.wait(500); // Wait for lazy-loaded content
    cy.screenshot('bottom-of-page');
  });

  it('Scrolls in steps and captures full page sections', () => {
    const scrollHeight = 1000;
    let position = 0;

    cy.document().then((doc) => {
      const totalHeight = doc.body.scrollHeight;

      function scrollAndCapture() {
        if (position >= totalHeight) return;

        cy.scrollTo(0, position);
        cy.wait(300);
        cy.screenshot(`scroll-position-${position}`);
        position += scrollHeight;

        // Use recursion with Cypress chain
        //cy.then(() => scrollAndCapture()); //continue scrolling and capturing until the bottom of the page is reached.


      }

      scrollAndCapture();
    });
  });
});
