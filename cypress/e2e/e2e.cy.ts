/// <reference types="cypress" />
it('should visit main route', () => {
  cy.visit('/');
  cy.contains('About').click();
  cy.get('h2').should('contain', 'About Us');
});
