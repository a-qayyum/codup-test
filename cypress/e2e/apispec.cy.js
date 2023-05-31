import {username, city} from '../fixtures/data'

  describe("API Tests", () => {
    it("should verify the status code and response body of the users API", () => {
      cy.verifyAPIResponse(
        "https://jsonplaceholder.typicode.com/users",
        200,
       username,
       city
      );
    });
  });
