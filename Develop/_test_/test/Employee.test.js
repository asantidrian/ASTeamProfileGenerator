
const Employee = require("./lib/Employee");

describe('Employee', () => {
    it("Can create an new employee.", () => {
        const employeeInstance = new Employee();
        expect(typeof (employeeInstance)).toBe("object");
    })

    it("Testing name.", () => {
        const name = "James";
        const employeeInstance = new Employee(name);
        expect(employeeInstance.name).toBe(name);
    })

    it("Testing ID.", () => {
        const id = 2;
        const employeeInstance = new Employee("James", id);
        expect(employeeInstance.id).toBe(id);
    })

    it("Testing email.", () => {
        const email = "jamesljenks@gmail.com";
        const employeeInstance = new Employee("James", 2, email);
        expect(employeeInstance.email).toBe(email);
    })



    it("Gets name through getName method.", () => {
        const testName = "James";
        const employeeInstance = new Employee(testName);
        expect(employeeInstance.getName()).toBe(testName);
    })

    it("Can test ID through getID method.", () => {
        const testID = 2;
        const employeeInstance = new Employee("James", testID);
        expect(employeeInstance.getId()).toBe(testID);
    })

    it("Can test email through getEmail method.", () => {
        const testEmail = "jamesljenks@gmail.com";
        const employeeInstance = new Employee("James", 2, testEmail);
        expect(employeeInstance.getEmail()).toBe(testEmail);
    })

    it("Testing role.", () => {
        const returnValue = "Employee";
        const employeeInstance = new Employee("James", 2, "jamesljenks@gmail.com");
        expect(employeeInstance.getRole()).toBe(returnValue);
    })
})