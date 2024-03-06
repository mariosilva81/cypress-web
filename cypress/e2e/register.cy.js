/// <reference types="cypress"/>

import { user } from "../fixtures";

describe("Register", () => {
  beforeEach("Access page", () => {
    cy.visit("/register");
  })

  it("Successful register", () => {
    cy.get("#user").type(user.name);
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.password);
    cy.get("#btnRegister").click();
    cy.get("#swal2-title").should("have.text", "Cadastro realizado!");
    cy.url().should("include", "/my-account");
  });

  it("Unsuccessful register - Invalid email", () => {
    cy.get("#user").type(user.name);
    cy.get("#email").type(user.invalidEmail);
    cy.get("#password").type(user.password);
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName").should(
      "have.text",
      "O campo e-mail deve ser prenchido corretamente"
    );
  });

  it("Unsuccessful login - Invalid password", () => {
    cy.get("#user").type(user.name);
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.invalidPassword);
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName").should(
      "have.text",
      "O campo senha deve ter pelo menos 6 dígitos"
    );
  });
});
