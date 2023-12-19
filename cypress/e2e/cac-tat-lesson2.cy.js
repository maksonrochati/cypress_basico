/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  // Exercicio 1
  it("verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  // Exercicio 2
  it("preenche os campos obrigatórios e envia o formulário", () => {
    const longText =
      "test, test, test, test, test, test, test,test, test, test, test, test, test, test, test, test,test, test";

    cy.get("#firstName").type("Makson");
    cy.get("#lastName").type("Rocha");
    cy.get("#email").type("test@test.com");
    cy.get("#open-text-area").type(longText, { delay: 0 });
    // cy.get('button[type="submit"]').click()
    cy.contains("button", "Enviar").click();

    cy.get(".success").should("be.visible");
  });

  // Exercicio 3
  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    cy.get("#firstName").type("Makson");
    cy.get("#lastName").type("Rocha");
    cy.get("#email").type("test@test,com");
    cy.get("#open-text-area").type("test");
    // cy.get('button[type="submit"]').click()
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
  });

  // Exercicio 4
  it("campo telefone continua vazio quando preenchido com valor não numérico", () => {
    cy.step("Teste de step").get("#phone").type("abc").should("have.value", "");

    cy.action({ attr: "id=phone", text: "action por atributo CSS" })
      .type("abc")
      .should("have.value", "");
  });

  // Exercicio 5
  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", () => {
    cy.get("#firstName").type("Makson");
    cy.get("#lastName").type("Rocha");
    cy.get("#email").type("test@test,com");
    cy.get("#phone-checkbox").check();
    cy.get("#open-text-area").type("test");
    // cy.get('button[type="submit"]').click()
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
  });

  // Exercicio 6
  it("preenche e limpa os campos nome, sobrenome, email e telefone", () => {
    cy.get("#firstName")
      .type("Makson")
      .should("have.value", "Makson")
      .clear()
      .should("have.value", "");

    cy.get("#lastName")
      .type("Rocha")
      .should("have.value", "Rocha")
      .clear()
      .should("have.value", "");

    cy.get("#email")
      .type("test@test,com")
      .should("have.value", "test@test,com")
      .clear()
      .should("have.value", "");

    cy.get("#phone")
      .type("123456789")
      .should("have.value", "123456789")
      .clear()
      .should("have.value", "");
  });

  // Exercicio 7
  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", () => {
    // cy.get('button[type="submit"]').click()
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
  });

  // Exercicio 8
  it("envia o formuário com sucesso usando um comando customizado", () => {
    cy.fillMandatoryFieldsAndSubmit();
    cy.get(".success").should("be.visible");
  });
});
