describe("TODO App > ", () => {
	beforeEach(() => {
		cy.visit("/"); //visit our base url in cypress.json
	});

	it("OK, there are no TODOs >", () => {
		cy.get("#todo-body")
			.children()
			.should("have.length", 0);
		cy.get("#done-body")
			.children()
			.should("have.length", 0);
	});

	it("OK, create a TODO >", () => {
		cy.createTodo("Mop the floor");
		cy.get("#todo-body")
			.children()
			.should("have.length", 1);
		cy.get("#done-body")
			.children()
			.should("have.length", 0);
	});

	it("OK, create a TODO & mark it done >", () => {
		cy.createTodo("Hoover the floor");
		cy.get('button[cy-data="todo-0"]').click();
		cy.get("#todo-body")
			.children()
			.should("have.length", 0);
		cy.get("#done-body")
			.children()
			.should("have.length", 1);
	});

	// it("OK, create 5 TODOs & mark 2 done >", () => {
	// 	cy.createTodo("Mop the floor");
	// 	cy.createTodo("Mop the floor");
	// 	cy.createTodo("Mop the floor");
	// 	cy.createTodo("Mop the floor");
	// 	cy.createTodo("Mop the floor");
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
