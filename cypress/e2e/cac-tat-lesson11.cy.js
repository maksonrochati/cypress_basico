/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  // Exercicio 1
  it("preenche os campos obrigatórios e envia o formulário", () => {
    const longText = "test, test, test, test";
    const timer = 3000;
    cy.clock();
    cy.get("#firstName").type("Makson");
    cy.get("#lastName").type("Rocha");
    cy.get("#email").type("test@test.com");
    cy.get("#open-text-area").type(longText, { delay: 0 });
    // cy.get('button[type="submit"]').click()
    cy.contains("button", "Enviar").click();

    cy.get(".success").should("be.visible");
    cy.tick(timer);
    cy.get(".success").should("not.be.visible");
  });

  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    const timer = 3000;
    cy.clock(); // Para o relógio do navegador
    cy.get("#firstName").type("Makson");
    cy.get("#lastName").type("Rocha");
    cy.get("#email").type("test@test,com");
    cy.get("#open-text-area").type("test");
    // cy.get('button[type="submit"]').click()
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
    cy.tick(timer); // Avança o tempo do navegador
    cy.get(".success").should("not.be.visible");
  });

  it("exibe e esconde as mensagens de sucesso e erro usando o .invoke()", () => {
    cy.get(".success")
      .should("not.be.visible")
      .invoke("show")
      .should("be.visible")
      .and("contain", "Mensagem enviada com sucesso.")
      .invoke("hide")
      .should("not.be.visible");
    cy.get(".error")
      .should("not.be.visible")
      .invoke("show")
      .should("be.visible")
      .and("contain", "Valide os campos obrigatórios!")
      .invoke("hide")
      .should("not.be.visible");
  });

  it("preenche a area de texto usando o comando invoke", () => {
    const longText = Cypress._.repeat("0123456789", 20);
    cy.get("#open-text-area")
      .invoke("val", longText)
      .should("have.value", longText);
  });

  it("faz uma requisição HTTP", () => {
    cy.request({
      method: "Get",
      url: "https://cac-tat.s3.eu-central-1.amazonaws.com/index.html",
    }).should((response) => {
      const { status, statusText, body } = response;
      expect(status).to.eq(200);
      expect(statusText).to.eq("OK");
      expect(body).to.include("CAC TAT");
    });
  });

  it.only("Desafio encontre o  gato", () => {
    cy.get("#cat").should("not.be.visible").invoke("show").should("be.visible");
    cy.get("#title").invoke("text", "Ct");
  });
});
