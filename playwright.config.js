/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	testMatch: /.*\.e2e\.js/,
	webServer: {
		command: 'npm run build && npm run preview',
		port: 3000
	}
};

export default config;
