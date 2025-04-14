Cypress.Commands.overwrite(
    'screenshot',
    (originalFn, subject, name, options) => {
      // only take screenshots in headless browser
      if (Cypress.browser.isHeadless) {
        // return the original screenshot function
        return originalFn(subject, name, options)
      }
  
      return cy.log('No screenshot taken when headed')
    }
  )
  
  // only takes in headless browser
  cy.screenshot()