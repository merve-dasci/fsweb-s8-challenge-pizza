describe("Pizza Order Form (data-cy)", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5175/order");
  });

  it("İsim inputuna metin girilebiliyor", () => {
    cy.get('[data-cy="input-name"]')
      .clear()
      .type("Merve Test")
      .should("have.value", "Merve Test");
  });

  it("Birden fazla malzeme seçilebiliyor (en az 4, en fazla 10)", () => {
    cy.get('[data-cy^="topping-"]').should("have.length.gte", 4);

    cy.get('[data-cy="topping-0"]').check({ force: true });
    cy.get('[data-cy="topping-1"]').check({ force: true });
    cy.get('[data-cy="topping-2"]').check({ force: true });
    cy.get('[data-cy="topping-3"]').check({ force: true });

    cy.get('[data-cy^="topping-"]:checked').its("length").should("be.gte", 4);

    cy.get('[data-cy="topping-4"]').check({ force: true });
    cy.get('[data-cy="topping-5"]').check({ force: true });
    cy.get('[data-cy="topping-6"]').check({ force: true });
    cy.get('[data-cy="topping-7"]').check({ force: true });
    cy.get('[data-cy="topping-8"]').check({ force: true });
    cy.get('[data-cy="topping-9"]').check({ force: true });

    cy.get('[data-cy^="topping-"]:checked').its("length").should("be.lte", 10);
  });

  it("Form gönderiliyor (en az 4 malzeme ile)", () => {
    cy.intercept("POST", "**/api/users").as("sendPizza");
    cy.get('[data-cy="input-name"]').clear().type("Merve");
    cy.get('[data-cy="size-S"]').check({ force: true });
    cy.get('[data-cy="topping-0"]').check({ force: true });
    cy.get('[data-cy="topping-1"]').check({ force: true });
    cy.get('[data-cy="topping-2"]').check({ force: true });
    cy.get('[data-cy="topping-3"]').check({ force: true });
    cy.get('[data-cy="input-note"]').type("Test notu");
    cy.get('[data-cy="submit-order"]').click({ force: true });
    cy.wait("@sendPizza");
    cy.url().should("include", "/success");
  });
});
