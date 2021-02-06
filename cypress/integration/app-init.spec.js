describe("App initialize", () => {
  it("Loads todos on page load", () => {
    cy.seeAndVisit();
    cy.get(".todo-list li").should("have.length", 4);
  });

  it("Displays and error on failre", () => {
    cy.server();
    cy.route({
      url: "/api/todos",
      method: "GET",
      status: 500,
      response: {},
    });

    cy.visit("/");

    cy.get(".todo-list li").should("not.exist");

    cy.get(".error").should("be.visible");
  });
});
