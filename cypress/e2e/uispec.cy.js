import '../support/commands';
import 'cypress-xpath';
import { ui_url } from '../fixtures/data';

//Clearing cookies so that the cart would be empty again
beforeEach(() => {
    cy.clearCookiesBeforeEachTest();
});

describe('UI Tests', () => {
    it('should search for gaming keyboards, add to cart, and verify cart details', () => {
        const searchTerm = 'gaming keyboards';
        const expectedText = '1 item';
        
        cy.visit(ui_url);
        // Search for the specified term
        cy.get('#twotabsearchtextbox').type(`${searchTerm}{enter}`);
        
        // Add the second result to cart - Need optimization on this locator
        cy.xpath('//*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/div/div/div/div[2]/div/div/div[1]')
        .should('be.visible')
        .click();
        
        //Add to Cart
        cy.get('#add-to-cart-button').should('be.visible').click();
        
        //Go to Cart
        cy.get('.nav-cart-icon').should('be.visible').click({force:true});

        // Verify the item added to the cart
        cy.get('.sc-list-item-content').should('have.length','1');

        // Verify the quantity of the item in the cart
        cy.get('#sc-subtotal-label-buybox').should('contain.text', expectedText);
  
        // Click the "This order contains a gift" checkbox and verify it is ticked
        cy.get('#sc-buy-box-gift-checkbox').should('not.be.checked').click();
        cy.get('#sc-buy-box-gift-checkbox').should('be.checked');
    });
});