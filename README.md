# QA Automation Sample

## Overview
This repository contains a basic QA automation project demonstrating end-to-end test cases for a web application.

## Scope
- UI test cases for common user flows
- Basic regression testing examples
- Clear and readable test structure

## Tech Stack
- Playwright
- JavaScript
- Node.js

## Project Structure

- `tests/login.spec.js` – UI tests for login form (valid and invalid credentials)
- `playwright.config.js` – Playwright configuration (base URL, basic settings)
- `package.json` – project dependencies and test script

## My Role

- Set up Playwright project structure
- Implemented end-to-end UI scenarios for login
- Documented how to run the tests

## What is tested
- Login form validation
- Registration flow
- Basic navigation scenarios

## How to run tests
1. Install Node.js (v18+)
2. Clone this repository
3. Run the following commands:

```bash
npm install
npx playwright test
