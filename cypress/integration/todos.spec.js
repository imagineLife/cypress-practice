describe('APP loads', () => {
	it('loads the app @ root url', () => {
		cy.visit('/')
	})

	it('gets first to-do item', () => {
		// cy.visit('/')
		
		//WITHOUT using data-cy attr
		// const firstItem = cy.get('.todo-list li:nth-child(1)')

		//USING data-cy attr
		const firstItem = cy.get('[data-cy=todo-item-8]')

		let myVar = 'stringVal'
		let numVar = 9;
		firstItem
			//DEBUGGING
			// .then(e => {debugger;})

			.should('have.text', 'juice the box')
		firstItem.should('not.have.class', 'completed')
	})

	it('first check-box is NOT checked', () => {
		// cy.visit('/')
		
		// const firstCheckBox = cy.get('.todo-list li:nth-child(1) .toggle')
		const firstCheckBox = cy.get('[data-cy=todo-item-8] .toggle')
		firstCheckBox.should('not.be.checked')
	})

	it('second check-box IS checked', () => {
		// cy.visit('/')
		
		// const secondCheckBox = cy.get('.todo-list li:nth-child(2) .toggle')
		const secondCheckBox = cy.get('[data-cy=todo-item-9] .toggle')
		secondCheckBox.should('be.checked')
	})
})

/*
	CYPRESS PROCESS OVERVIEW
	cypres doesnt visit on vist,
	instead it sort of PUSHES events into an array
	[visit, get, should....]

	DEBUGGING
		introduce the .then() && a js debug instance will be present
*/