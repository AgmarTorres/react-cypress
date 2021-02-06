// ***********************************************
Cypress.Commands.add("seeAndVisit", (seedTodos = "fixture:todos") => {
  cy.server();
  cy.route("GET", "/api/todos", seedTodos);
  cy.visit("/");
});
