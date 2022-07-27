/* eslint-disable no-undef */
describe('Auth (e2e)', () => {
  it('should load and redirect to /signin', () => {
    cy.visit('http://localhost:3001/');

    cy.url().should('include', 'signin');
  });

  it('should have default initial state', () => {
    const initialAppState = {
      auth: {
        user: null,
        jwt: null,
        isAuthenticated: false,
        isLoading: false,
        isSuccess: false,
        isError: false,
      },
    };

    cy.window()
      .its('store')
      .invoke('getState')
      .should('deep.equal', initialAppState);
  });

});