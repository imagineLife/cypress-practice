describe('stubs /api/todos', () => {
	it('has stubbed txt', () => {
		
		/*
		https://docs.cypress.io/api/commands/server.html
		"...start a server to begin routing responses to 
			cy.route && to change the behavior of network requests"
		*/
		cy.server()

		/*
			https://docs.cypress.io/api/commands/route.html
			use this to manage behavior of network reqs
		*/
		cy.route('/api/todos', [
    {
      "text": "stubbed text",
      "completed": false,
      "id": 8
    },
    {
      "id": 9,
      "completed": true,
      "text": "talk to deenzy"
    },
    {
      "text": "sink the ship",
      "completed": false,
      "id": 10
    }
  ])
			/*
				https://docs.cypress.io/api/commands/as.html
				assign an alias for later use
				can use this alias later 
					using cy.get('mock-todos') 
					or 
					cy.wait('mock-todos')
			*/

		.as('mock-todos')


		cy.visit('/')

		cy.wait('@mock-todos')

		const firstItem = cy.get('[data-cy=todo-item-8]')
		firstItem.should('have.text', 'stubbed text')
		firstItem.should('not.have.class', 'completed')
	})
})

/*
	Interactive network request viewing
	- open the runner
	- select the test line-item for GET 200 /api/todos
	- open the console
	...see details RE: request && response :) 
*/