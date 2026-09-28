\# E-Commerce QA Automation Framework



An end-to-end QA automation framework for testing an e-commerce application using Playwright, JavaScript, API testing, database validation, integration testing, and GitHub Actions.



\## Project Overview



This project demonstrates an automation framework covering multiple layers of an e-commerce application:



\* UI automation

\* API automation

\* Database validation

\* UI/API/Database integration

\* Smoke testing

\* Regression testing

\* CI/CD execution



\## Tech Stack



| Technology      | Purpose                          |

| --------------- | -------------------------------- |

| Playwright      | UI and API automation            |

| JavaScript      | Programming language             |

| Playwright Test | Test runner                      |

| SQLite          | Database validation              |

| better-sqlite3  | Database connectivity            |

| npm             | Dependency and script management |

| Git             | Version control                  |

| GitHub          | Source code repository           |

| GitHub Actions  | CI/CD                            |



\## Project Structure



```text

ecommerce-qa-automation/

│

├── .github/

│   └── workflows/

│

├── config/

│

├── database/

│

├── docs/

│   ├── test-strategy.md

│   ├── test-scenarios.md

│   ├── test-cases.md

│   ├── bug-report.md

│   └── test-execution-report.md

│

├── fixtures/

├── pages/

├── test-data/

├── tests/

├── utils/

│

├── .gitignore

├── package.json

├── package-lock.json

└── playwright.config.js

```



\## Framework Design



The framework follows a maintainable automation structure with separate areas for:



\* Page objects

\* Test cases

\* Test data

\* Fixtures

\* Configuration

\* Database utilities

\* Common utilities

\* CI/CD configuration



\## Test Coverage



\### UI Automation



The UI suite validates important e-commerce workflows including:



\* Login

\* Product selection

\* Add to cart

\* Checkout

\* Order placement



\### API Automation



API tests validate:



\* API requests

\* HTTP status codes

\* Response data

\* Required response fields

\* Negative scenarios



\### Database Automation



Database validation verifies:



\* Records created by application operations

\* Stored values

\* Data consistency

\* Application/database integration



\### Integration Testing



Integration tests validate consistency across:



```text

UI

&#x20;↓

API

&#x20;↓

Database

```



\## Smoke Testing



Smoke tests validate critical application functionality.



Run:



```bash

npm run test:smoke

```



\## Regression Testing



Regression tests validate existing functionality after changes.



Run:



```bash

npm run test:regression

```



\## Available Commands



Run all tests:



```bash

npm test

```



Run Chromium tests:



```bash

npm run test:chromium

```



Run smoke tests:



```bash

npm run test:smoke

```



Run regression tests:



```bash

npm run test:regression

```



Run UI tests:



```bash

npm run test:ui

```



Run API tests:



```bash

npm run test:api

```



Run database tests:



```bash

npm run test:database

```



Run integration tests:



```bash

npm run test:integration

```



Open the Playwright report:



```bash

npm run report

```



\## Installation



Clone the repository and install dependencies:



```bash

npm ci

```



Install Playwright browsers:



```bash

npx playwright install

```



\## Running the Framework



After installing dependencies, execute:



```bash

npm test

```



For smoke testing:



```bash

npm run test:smoke

```



For regression testing:



```bash

npm run test:regression

```



\## Test Reporting



Playwright generates an HTML test report.



Open the report using:



```bash

npm run report

```



Generated reports and test-result folders are excluded from Git using `.gitignore`.



\## CI/CD



The project uses GitHub Actions for automated test execution.



The workflow is located under:



```text

.github/workflows/

```



The CI process installs dependencies, installs Playwright browsers, executes automated tests, and publishes the test results.



\## Documentation



Detailed QA documentation is available in the `docs` folder:



\* Test Strategy

\* Test Scenarios

\* Test Cases

\* Bug Report

\* Test Execution Report



\## Key QA Practices Demonstrated



This project demonstrates practical knowledge of:



\* Page Object Model

\* Test automation

\* UI testing

\* API testing

\* Database testing

\* Integration testing

\* Smoke testing

\* Regression testing

\* Test data management

\* Assertions

\* Playwright reporting

\* Git/GitHub

\* CI/CD

\* GitHub Actions



\## Author



\*\*Rakshitha\*\*



QA Automation Testing Project



