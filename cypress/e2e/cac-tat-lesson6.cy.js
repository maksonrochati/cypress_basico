/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  // Exercicio 1
  it("seleciona um arquivo da pasta fixtures", () => {
    cy.get('input[type="file"]#file-upload')
      .should("not.have.value")
      .selectFile("./cypress/fixtures/example.json")
      .should(($input) => {
        console.log($input);
        expect($input[0].files[0].name).to.eq("example.json");
      });
  });

  // Exercicio extra 1
  it("seleciona um arquivo simulando um drag-and-drop", () => {
    cy.get('input[type="file"]#file-upload')
      .should("not.have.value")
      .selectFile("./cypress/fixtures/example.json", { action: "drag-drop" })
      .should(($input) => {
        console.log($input);
        expect($input[0].files[0].name).to.eq("example.json");
      });
  });

  // Exercicio extra 2
  it.only("seleciona um arquivo utilizando uma fixture para a qual foi dada um alias", () => {
    cy.fixture("example.json").as("file");

    cy.get('input[type="file"]#file-upload')
      .should("not.have.value")
      .selectFile("@file", { action: "drag-drop" })
      .should(($input) => {
        console.log($input);
        expect($input[0].files[0].name).to.eq("example.json");
      });
  });
});
