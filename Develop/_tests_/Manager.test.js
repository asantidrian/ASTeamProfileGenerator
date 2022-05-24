const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe("Employee", () => {

    it("should return the office number", () => {
        const officeNumber = 12;
        const managerExample = new Manager("Eddie", 39, "eddie20000@gmail.com", 12);
        expect(managerExample.getOfficeNumber()).toBe(officeNumber);
    })

    it("should return the role", () => {
        const role = "Manager";
        const managerExample = new Manager("Eddie", 39, "eddie20000@gmail.com", 12);
        expect(managerExample.getRole()).toBe(role);
    })

    it("should return the manager Icon", () => {
        const managerIcon = "fas fa-mug-hot";
        const managerExample = new Manager("Eddie", 39, "eddie20000@gmail.com", 12);
        expect(managerExample.getEmployeeIcon()).toBe(managerIcon);
    })

    it("should return the specific data asked for a manager", () => {
        const managerData = "Office Number";
        const managerExample = new Manager("Eddie", 39, "eddie20000@gmail.com", 12);
        expect(managerExample.getEmployeeData()).toBe(managerData);
    })

    it("should return the specific data value asked for a manager", () => {
        const managerDataValue = 12;
        const managerExample = new Manager("Eddie", 39, "eddie20000@gmail.com", 12);
        expect(managerExample.getEmployeeDataValue()).toBe(managerDataValue);
    })

})

