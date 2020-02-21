// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


/*
	save the redux-store from window.store
	TO
	cypressStore variable

	this is a parent arguement
	the 'cypressStore' is the NAME of the store
	that is attached to the window

*/
Cypress.Commands.add('cypressStore', (str = '') => {
  /*
		Logs JUST the store content in the cypres runner
  */
  const log = Cypress.log({ name: 'cypressStore' });

  // log:false supresses logs of the window
  return cy
  	.window({ log: false })
  	.its('store').invoke('getState');
});
