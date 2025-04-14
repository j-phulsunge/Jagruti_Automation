# NewCoding
# initialyze-initialyzers-aem-initialyzer-qa

This repository contains the Cypress based automation tests for Initialyzers.

## Prerequisites

Before you can run the Cypress tests, ensure you have the following prerequisites installed on your machine:
1. Node.js: Make sure you have Node.js installed. You can download it from the official website: https://nodejs.org/

## Getting Started

### Install dependencies 

Once you have Node.js installed, navigate to the project's root directory and run the following command to install the required dependencies:

```bash
    npm install
```

### Start cypress

To open the Cypress Test Runner, use the following command:

```bash
    npx cypress open
```

#### Configure the testing type 

In the Cypress Test Runner, select "E2E Testing."

## Running the Tests

### Headless Mode with a Particular Browser

To run the test cases in headless mode with a specific browser (e.g., Chrome), use the following command:

```bash
    npm test
```

### Changing the Browser

To change the browser, you need to modify the `package.json` file under the `scripts` section. Locate the `cy:run` script and adjust the `--browser` option accordingly. For example, to run the tests in Chrome:

```bash
"cy:run": "cypress run --env allure=true --browser chrome",
```

### Running a Single Test

To run a single test, you need to modify the `package.json` file under the `scripts` section. Locate the `cy:run` script and adjust the `--spec` option to point to the desired test file. For example, to run the `title.cy.ts` test case:

```bash
"cy:run": "cypress run --spec cypress/e2e/testcases/title.cy.ts --env allure=true --browser chrome",
```

### Passing Breakpoint and Device Information

To pass breakpoint and device information at the time of test run, you need to modify the `package.json` file under the `scripts` section. Locate the `cy:run` script and add the device name, width, and height as shown in the example below:

```bash
"cy:run": "cypress run --spec cypress/e2e/testcases/title.cy.ts --env allure=true,device=iPhone-12,width=390,height=844 --browser chrome",
```

### Passing URL at the Time of Test Run

To pass the URL at the time of test run, modify the `package.json` file under the `scripts` section. Locate the `cy:run` script and add the URL as shown in the example below:

```bash
"cy:run": "cypress run --spec cypress/e2e/testcases/title.cy.ts --env allure=true,URL=https://publish-p30618-e1050779.adobeaemcloud.com --browser chrome",
```

```markdown
# Models: golbaltestdata.ts

## Purpose:
This TypeScript file, `golbaltestdata.ts`, defines interfaces for global test data structures used in Cypress tests.

## Folder Structure Explanation: Support > Utils

### Purpose:
This folder structure is designed to manage various utility configurations for Cypress tests, including BaseUrl and viewport settings.

### Support Folder:
The `support` folder within a Cypress project contains various utility files and configurations that assist in test execution.

### Utils Subfolder:
Within the `support` folder, the `utils` subfolder is dedicated to housing utility files that provide common functionalities required across tests.

### BaseUrl File:
The `baseUrl.ts` file within the `utils` subfolder handles the BaseUrl configuration.

### Viewport File:
The `viewport.ts` file within the `utils` subfolder specifically handles the viewport configuration.

### Usage:
- **Setting the BaseUrl:** The `baseUrl.ts` file sets the BaseUrl for the environment. If a specific URL is passed as an environment variable during test execution, it will use that URL as the BaseUrl. Otherwise, it reads the BaseUrl from the test data.
- **Setting the Viewport:** The `viewport.ts` file sets the viewport for the tests. Similar to BaseUrl, if a specific viewport is passed as an environment variable during test execution, it will use that viewport. Otherwise, it reads the viewport data from the test data.

## Test Data: globalTestData.json

### Folder Structure: testdata > global > globalTestData.json

#### Purpose:

The `globalTestData.json` file, located within the `testdata > global` folder structure, serves as a central repository for storing environment links, URLs, and common data used in Cypress tests.

#### Contents:

The `globalTestData.json` file contains essential information for Cypress tests:

- **Environment URLs**: It includes URLs for different environments such as local, development, staging, and production, allowing tests to be executed against various environments without hardcoding URLs in the test scripts.

- **Global Data**: It stores general data that is shared across multiple tests, such as color details. This ensures consistency and reusability of test data throughout the test suite.
```
