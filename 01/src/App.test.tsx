import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders learn react link', () => {
  mount(<App />);
  cy.get('a').contains('Learn React');
  cy.get('.navbar-brand');
  cy.get('.btn').contains('Hello');
});

it('renders hello button', () => {
  mount(<App />);
  cy.get('.btn').contains('Hello');
});

it('renders narbar brand ', () => {
  mount(<App />);
  cy.get('.navbar-brand');
});