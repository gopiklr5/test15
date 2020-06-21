/// <reference types="cypress" />

describe('EAPP testing - Testsuite', () => {




    it('test case', () => {

        cy.visit('http://eaapp.somee.com/');
        cy.get('#loginLink').click();
        cy.get('input[name="UserName"]').type('admin');
        cy.get('input[name="Password"]').type('password');
        cy.get('input[type="submit"]').click();

        cy.title().should('include', 'Home - Execute Automation Employee App')


    })

   




})