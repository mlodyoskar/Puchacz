describe('Home page', () => {
	it('Successfully load home page', () => {
		cy.visit('/');
		cy.contains('Strona główna');
	});
});

export {};
