import { SELECTORS } from '../support/selectors';

it('should pass the happy flow', () => {
    cy.intercept(`https://jsonplaceholder.typicode.com/posts`).as('GETPosts');
    cy.visit('/');
    cy.wait('@GETPosts');
    cy.get(SELECTORS.posts).its('length').should('eq', 100);
    cy.get(SELECTORS.post(19)).contains(19);
    cy.get(SELECTORS.postFront(19)).click();
    cy.get(SELECTORS.postBack(19)).contains(2);
    cy.get(SELECTORS.post(37)).contains(37);
    cy.get(SELECTORS.postFront(37)).click();
    cy.get(SELECTORS.postBack(37)).contains(4);
    cy.get(SELECTORS.post(73)).contains(73);
    cy.get(SELECTORS.postFront(73)).click();
    cy.get(SELECTORS.postBack(73)).contains(8);
  }
);
