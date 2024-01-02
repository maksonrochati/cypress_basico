// Import commands.js using ES2015 syntax:
import "./commands";
import "@shelex/cypress-allure-plugin";
import "cypress-plugin-api";

// Alternatively you can use CommonJS syntax:
// require('./commands')
require("@shelex/cypress-allure-plugin");

export { Scenario, Given, When, And, Then, Cenario, Dado, Quando, E, Entao, describes, its } from "cypress-action/src/gherkin/bdd.js";
import "cypress-plugin-steps";
require("cypress-action");
import "cypress-file-upload";
require('cypress-xpath');
export const faker = require("generate-datafaker");
import 'cypress-wait-until';
