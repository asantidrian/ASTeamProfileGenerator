const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe("Employee", () => {

    it("should return the School of the intern", () => {
        const school = "Sydney University";
        const internExample = new Intern("Eddie", 39, "eddie20000@gmail.com", "Sydney University");
        expect(internExample.getSchool()).toBe(school);
    })

    it("should return the role", () => {
        const role = "Intern";
        const internExample = new Intern("Eddie", 39, "eddie20000@gmail.com", "Sydney University");
        expect(internExample.getRole()).toBe(role);
    })

    it("should return the intern Icon", () => {
        const internIcon = "fas fa-user-graduate";
        const internExample = new Intern("Eddie", 39, "eddie20000@gmail.com", "Sydney University");
        expect(internExample.getEmployeeIcon()).toBe(internIcon);
    })

    it("should return the specific data asked for an intern", () => {
        const internData = "School";
        const internExample = new Intern("Eddie", 39, "eddie20000@gmail.com", "Sydney University");
        expect(internExample.getEmployeeData()).toBe(internData);
    })

    it("should return the specific data value asked for an intern", () => {
        const internDataValue = "Sydney University";
        const internExample = new Intern("Eddie", 39, "eddie20000@gmail.com", "Sydney University");
        expect(internExample.getEmployeeDataValue()).toBe(internDataValue);
    })

})