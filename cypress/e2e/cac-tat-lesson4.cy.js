/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  // Exercicio 1
  it("marca o tipo de atendimento Feedback", () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should("have.value", "feedback");
  });

  // Exercicio extra 1
  it.only("marca cada tipo de atendimento", () => {
    cy.get('input[type="radio"]')
      .should("have.length", 3)
      .each(($radio) => {
        cy.wrap($radio).check();
        cy.wrap($radio).should("be.checked");
      });
  });
});
