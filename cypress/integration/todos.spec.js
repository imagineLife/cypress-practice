describe('APP loads', () => {
	it('loads the app @ root url', () => {
		cy.visit('/')
	})

	it('gets first to-do item', () => {
		cy.visit('/')
		
		const firstItem = cy.get('.todo-list li:nth-child(1)')


		firstItem.should('have.text', 'juice the box')
		firstItem.should('not.have.class', 'completed')
	})

	it('first check-box is NOT checked', () => {
		cy.visit('/')
		
		const firstCheckBox = cy.get('.todo-list li:nth-child(1) .toggle')
		firstCheckBox.should('not.be.checked')
	})

	it('second check-box IS checked', () => {
		cy.visit('/')
		
		const firstCheckBox = cy.get('.todo-list li:nth-child(2) .toggle')
		firstCheckBox.should('be.checked')
	})
})