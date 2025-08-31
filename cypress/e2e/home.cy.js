describe("Home page basic checks", () => {
  it("shows hero and goes to order page", () => {
    cy.visit("http://localhost:5175");
    cy.get('[data-cy="hero-cta"]').should("be.visible").click();
    cy.url().should("include", "/order");
  });

  it("shows categories and product cards", () => {
    cy.visit("http://localhost:5175");
    cy.get('[data-cy="category-0"]').should("exist");
    cy.get('[data-cy="category-1"]').should("exist");
    cy.get('[data-cy="product-0"]').should("exist");
  });
});
