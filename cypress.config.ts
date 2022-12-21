import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: 'http://localhost:3000',
	},
	projectId: 'bbpfdg',
	port: 4222,
	viewportHeight: 1080,
	viewportWidth: 1920,
});
