/**
 * @jest-environment node
 */
import loginValidator from "@validators/login";

// The aim of the test is to ensure that when everything is successful, the 'next' fn should be called
// 'next' acts as a middleware, if it fails, the func that follows won't work
// Mock out the original express response wt status code to be able to test it
class Response {
	status(status) {
		this.status = status;

		return this;
	}

	json(data) {
		return data;
	}
}

describe("The login validator", () => {
	it("should call the next function when validation succeeds", async () => {
		const req = {
			body: {
				email: "abe@gmail.com",
				password: "pass123"
			}
		};
		//  We focus on the try block in 'validators/login.js'
		// We assign the 'try block' to an empty obj called 'res'
		const res = {};

		// We spy on the 'next' fn to ensure that the 'next' func is called
		// This (spy) will create a mock function using 'jest.fn()'
		const next = jest.fn();

		await loginValidator(req, res, next);
		// Assertions
		expect(next).toHaveBeenCalled();
	});

	it("should return a 422 if validation fails", async () => {
		const req = {
			body: {
				password: "password"
			}
		};
		const next = jest.fn();
		const res = new Response();
		//  spy on the response('res') obj and 'status' method
		const statusSpy = jest.spyOn(res, "status");
		const jsonSpy = jest.spyOn(res, "json");

		await loginValidator(req, res, next);

		expect(statusSpy).toHaveBeenCalled();
		expect(statusSpy).toHaveBeenCalledWith(422);
		expect(jsonSpy).toHaveBeenCalledWith({
			message: "Validation failed.",
			data: {
				errors: {
					email: "email is a required field"
				}
			}
		});
	});
});
