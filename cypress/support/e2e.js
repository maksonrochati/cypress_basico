// Import commands.js using ES2015 syntax:
import "./commands";
import "@shelex/cypress-allure-plugin";

// Alternatively you can use CommonJS syntax:
// require('./commands')
require("@shelex/cypress-allure-plugin");
const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
  const style = app.document.createElement("style");
  style.innerHTML =
    ".command-name-request, .command-name-xhr { display: none };";
  style.setAttribute("data-hide-command-log-request", "");
  app.document.head.appendChild(style);
}
export {
  Scenario,
  Given,
  When,
  And,
  Then,
  Cenario,
  Dado,
  Quando,
  E,
  Entao,
} from "cypress-action/src/gherkin/bdd.js";
import "cypress-plugin-steps";
require("cypress-action");
import "cypress-file-upload";
require("cypress-xpath");
export const faker = require("generate-datafaker");
import "cypress-wait-until";

require("cypress-dark/src/halloween");
require("cypress-dark/src/utils");
