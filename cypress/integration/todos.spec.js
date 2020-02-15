describe('APP', () => {
	it('loads the app @ root url', () => {
		cy.visit('/')
	})

	it('gets first to-do item', () => {
		cy.visit('/')
		
		const firstItem = cy.get('.todo-list li:nth-child(1)')

		firstItem.should('have.text', 'Goodnight moon')
	})
})