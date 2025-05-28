// cypress/support/baseUrl.js

const globalData = require('../../e2e/testdata/global/globalTestData.json');

const brandDetails = globalData.brandDetails;
const brandName = "Initialyzer";

const baseLink = Cypress.env('URL') || brandDetails[Cypress.env('environment')][brandName];

export const baseUrl = () => {
  return baseLink;
};
