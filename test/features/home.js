describe(`Home`, () => {
  beforeEach(() => {
    // Because we're only testing the homepage
    // in this test file, we can run this command
    // before each individual test instead of
    // repeating it in every test.
    cy.visit(`/`);
  });

  it(`Should display the main headline.`, () => {
    cy.get(`[data-qa="main headline"]`).should(`be.visible`);
    cy.get(`[data-qa="main headline"]`).contains(`Home`);
  });
});
