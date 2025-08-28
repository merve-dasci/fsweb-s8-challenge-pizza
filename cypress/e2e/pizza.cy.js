

describe("Pizza Order Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5175");
  })
  it("İsim inputuna metin girilebiliyor", () => {
    cy.get("#isim").clear().type("Merve Test").should("have.value", "Merve Test");
  });
  it("Birden fazla malzeme seçilebiliyor (en az 4, en fazla 10)", () => {
cy.get('input[name="toppings"]').its("length").should("be.gte", 4)

    cy.get('input[name="toppings"]').should("have.length.gte", 4)
    cy.get('input[name="toppings"]').eq(0).check()
    cy.get('input[name="toppings"]').eq(1).check();
    cy.get('input[name="toppings"]').eq(2).check();
    cy.get('input[name="toppings"]').eq(3).check();

    cy.get('input[name="toppings"]:checked').its("length").should("be.gte", 4);

    cy.get('input[name="toppings"]').eq(4).check();
    cy.get('input[name="toppings"]').eq(5).check();
    cy.get('input[name="toppings"]').eq(6).check();
    cy.get('input[name="toppings"]').eq(7).check();
    cy.get('input[name="toppings"]').eq(8).check();
    cy.get('input[name="toppings"]').eq(9).check();

    cy.get('input[name="toppings"]:checked').its("length").should("be.lte", 10)

  })
it("Form gönderiliyor", function () {
  cy.intercept("POST", "https://reqres.in/api/pizza").as("sendPizza")
  cy.get("#isim").clear().type("Merve")
  cy.get('input[name="size"]').first().check()
  cy.get('input[name="toppings"]').eq(0).check()
  cy.get('input[name="toppings"]').eq(1).check()
  cy.get('input[name="toppings"]').eq(2).check()
  cy.get('input[name="toppings"]').eq(3).check()
  cy.get("#ozel").type("Test notu")

  cy.get('button[type="submit"]').click()
  cy.wait("@sendPizza")
})

})