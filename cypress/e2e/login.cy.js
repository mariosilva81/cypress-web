/// <reference types="cypress"/>

import { user } from "../fixtures";

describe("Login", () => {
  beforeEach("Access page", () => {
    cy.visit("/login");
  })

  it("Successful login", () => {
    cy.get("#user").type(user.email);
    cy.get("#password").type(user.password);
    cy.get("#btnLogin").click();
    cy.get("#swal2-title").should("have.text", "Login realizado");
    cy.url().should("include", "/my-account");
  });

  it("Unsuccessful login - Invalid email", () => {
    cy.get("#user").type(user.invalidEmail);
    cy.get("#password").type(user.password);
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("have.text", "E-mail inválido.");
  });

  it("Unsuccessful login - Invalid password", () => {
    cy.get("#user").type(user.email);
    cy.get("#password").type(user.invalidPassword);
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("have.text", "Senha inválida.");
  });
});
