describe(`Home`, () => {
  it(`Should display the main headline.`, () => {
    cy.visit(`/`);
    cy.get(`[data-qa="main headline"]`).should(`be.visible`);
    cy.get(`[data-qa="main headline"]`).contains(`Home`);
  });

  it(`Should display the name of the curent user in the header.`, () => {
    // Enable response stubbing.
    cy.server();
    // Route the API request to a stubbed response.
    cy.route({
      method: `GET`,
      url: `/users/*`,
      response: { username: `JohnDoe` },
    });
    cy.visit(`/`);

    cy.get(`[data-qa="header"] [data-qa="username"]`).should(`contain`, `JohnDoe`);
  });

  it(`Should display a logout warning after 270 seconds of inactivity.`, () => {
    const waitSeconds = 270;
    const waitMilliseconds = waitSeconds * 1000;
    const buffer = 1000;

    cy.clock();
    cy.visit(`/`);
    cy.tick(waitMilliseconds + buffer);
    cy.get(`[data-qa="logout warning"]`).should(`be.visible`);
  });
});
