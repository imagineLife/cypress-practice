describe('Validates redux store vals', () => {
  it('has matching content', () => {
    /*
      See src/index.js for new code
      re: cypress
      if (window.Cypress) {
        window.store = store;
      }
    */
    cy.visit('/');

    const win = cy.window();

    // access properties on window using its
    // https://docs.cypress.io/api/commands/its.html#Syntax
    const store = win.its('store');

    // get state of the store
    const storeState = store.invoke('getState');

    // show the store in the cypress test window
    cy.cypressStore;

    // this assures that the to-dos have loaded into the store
    storeState.should('deep.equal', {
      todos: [
        {
          text: 'juice the box',
          completed: false,
          id: 8,
        },
        {
          id: 9,
          completed: true,
          text: 'talk to deenzy',
        },
        {
          text: 'sink the ship',
          completed: false,
          id: 10,
        },
      ],
      visibilityFilter: 'show_all',
    });
  });
});
