describe('Validates redux store vals', () => {
  it('has matching content', () => {
    cy.visit('/');

    const win = cy.window();
    const store = win.its('store');
    const storeState = store.invoke('getState');
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
