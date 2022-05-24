
const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("Can create an new employee.", () => {
        const employeeExample = new Employee();
        expect(typeof (employeeExample)).toBe("object");
    })

    it("should return the name", () => {
        const name = "Eddie";
        const employeeExample = new Employee(name);
        expect(employeeExample.name).toBe(name);
    })

    it("should return the Id", () => {
        const id = 39;
        const employeeExample = new Employee("Eddie", id);
        expect(employeeExample.id).toBe(id);
    })

    it("should return the email", () => {
        const email = "eddie20005@gmail.com";
        const employeeExample = new Employee("Eddie", 39, email);
        expect(employeeExample.email).toBe(email);
    })

    it("should return the Role", () => {
        const role = "Employee";
        const employeeExample = new Employee("Eddie", 39, "eddie20005@gmail.com");
        expect(employeeExample.getRole()).toBe(role);
    })
    it("should return the name when using getName method", () => {
        const name = "Eddie";
        const employeeExample = new Employee(name);
        expect(employeeExample.getName()).toBe(name);
    })

    it("should return the id when using getId method", () => {
        const id = 39;
        const employeeExample = new Employee("Eddie", id);
        expect(employeeExample.getId()).toBe(id);
    })

    it("should return the email when using getEmail method", () => {
        const email = "eddie20005@gmail.com";
        const employeeExample = new Employee("Eddie", 39, email);
        expect(employeeExample.getEmail()).toBe(email);
    })


})