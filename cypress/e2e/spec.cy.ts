describe('First test', () => {
	it('Visit home', () => {
		cy.visit('http://localhost:3000/');
	});
	it('Visit budget', () => {
		cy.visit('http://localhost:3000/budzet');
	});
	it('Visit parties', () => {
		cy.visit('http://localhost:3000/imprezy');
	});
	it('Visit logs', () => {
		cy.visit('http://localhost:3000/logi');
	});
});
