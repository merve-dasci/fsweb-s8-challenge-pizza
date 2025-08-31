
describe("Basit Order akışı", () => {
  it("Anasayfa -> Order sayfasına gider", () => {
    cy.visit("http://localhost:5175");
    cy.get('[data-cy="hero-cta"]').should("be.visible").click();
    cy.url().should("include", "/order");
  });

 it("Formu doldurup gönderir (en az 4 malzeme şartı ile)", () => {
   cy.visit("http://localhost:5175/order");
   cy.get('[data-cy="input-name"]').type("Merve");
   cy.get('[data-cy="size-L"]').check({ force: true });
   cy.get('[data-cy="topping-0"]').check({ force: true });
   cy.get('[data-cy="topping-1"]').check({ force: true });
   cy.get('[data-cy="topping-2"]').check({ force: true });
   cy.get('[data-cy="topping-3"]').check({ force: true });
   cy.intercept("POST", "**/api/*").as("postOrder");
   cy.get('[data-cy="submit-order"]').should("not.be.disabled").click();
   cy.wait("@postOrder");
   cy.url().should("include", "/success");
 });
});

