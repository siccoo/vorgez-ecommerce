/* eslint-disable no-undef */
describe('Auth (e2e)', () => {
    it('should load and redirect to /signin', () => {
      cy.visit('http://localhost:3001/');
  
      cy.url().should('include', 'signin');
    });
});