describe("TODO App > ", () => {
	beforeEach(() => {
		cy.visit("/"); //visit our base url(5000) in cypress.json
	});

	// The createTodo must be called b4 have some todos
	it("OK, there are no TODOs >", () => {
		cy.get("#todo-body")
			.children()
			.should("have.length", 0); //we should no todo since createTodo is not called yet
		cy.get("#done-body")
			.children()
			.should("have.length", 0);
	});

	it("OK, create a TODO >", () => {
		cy.createTodo("Write end to end tests");
		cy.get("#todo-body")
			.children()
			.should("have.length", 1);
		cy.get("#done-body")
			.children()
			.should("have.length", 0);
	});

	it("OK, create a TODO & mark it done >", () => {
		cy.createTodo("We take a shot at Dependency Injection ");
		cy.get('button[cy-data="todo-0"]').click();
		cy.get("#todo-body")
			.children()
			.should("have.length", 0);
		cy.get("#done-body")
			.children()
			.should("have.length", 1);
	});

	// it("OK, create 5 TODOs & mark 2 done >", () => {
	// 	cy.createTodo("Write mock test in Jest");
	// 	cy.createTodo("Write mock test in Jest");
	// 	cy.createTodo("Write mock test in Jest");
	// 	cy.createTodo("Write mock test in Jest");
	// 	cy.createTodo("Write mock test in Jest");
	// 	cy.get('button[cy-data="todo-0"]').click();
	// 	cy.get('button[cy-data="todo-3"]').click();
	// 	cy.get("#todo-body")
	// 		.children()
	// 		.should("have.length", 3);
	// 	cy.get("#done-body")
	// 		.children()
	// 		.should("have.length", 2);
	// });
});
