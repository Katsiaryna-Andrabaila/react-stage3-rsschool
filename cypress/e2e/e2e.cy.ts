/// <reference types="cypress" />

it('should visit main route', () => {
  cy.visit('/');
});

it('should visit about route', () => {
  cy.visit('/');
  cy.contains('About').click();
  cy.get('h2').should('contain', 'About Us');
});

it('should not show form error when name is correct', () => {
  cy.visit('/form');
  cy.get('form');
  cy.get('input[name="name"]').type('John').should('have.value', 'John');
  cy.get('form').submit();
  cy.contains('Name required!').should('not.exist');
});

it('should save submitted search value after following about link', () => {
  cy.visit('/');
  cy.get('input[type="search"]').type('77');
  cy.get('form').submit();
  cy.contains('About').click();
  cy.contains('Home').click();
  cy.get('input[type="search"]').should('have.value', '77');
});

it('should show error message after typing incorrect search value', () => {
  cy.visit('/');
  cy.get('input[type="search"]').type('abrakadabra');
  cy.get('form').submit();
  cy.contains('No data found');
});

it('should open portal after clicking on card', () => {
  cy.visit('/');
  cy.get('.card').first().click();
  cy.get('.skeleton_portal').should('exist');
  cy.wait(5000);
  cy.get('.portal').should('exist');
  cy.get('.shadow').should('exist');
});

it('should redirect to 404', () => {
  cy.visit('/test');
  cy.url().should('include', '/404');
});
