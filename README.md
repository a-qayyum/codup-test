# codup-test
This is the repository to perform tests for the codup challenge 

**Do the Following to run this code**

**Steps:**
1. Clone the repository
2. Run **npm install cypress** and **npm install -D cypress-xpath** on terminal of any IDE that supports Javascript
3. After installing cypress and xpath, run **npx cypress open**
4. Cypress will open Up
5. Click E2E Testing on UI
6. Click on 'Start E2E Testing in Chrome' on the next window
7. Chrome window will open up and configured Cypress Tests will show up
8. For API Tests, click on apispec.js
9. For UI Tests, Click on uitests.js

**In this Repository**
1. e2e folder contains tests
2. fixtures folder contains data which we use in tests
3. Support folder contains additional custom commands I have used for verifying API response to amke tests better and fast
4. cypress.config.js file consists of configurations for opening chrome in incognito mode for the tests