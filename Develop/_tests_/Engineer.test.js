const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe("Employee", () => {

    it("should return the github user namer", () => {
        const github = "asantidrian";
        const engineerExample = new Engineer("Eddie", 39, "eddie20000@gmail.com", "asantidrian");
        expect(engineerExample.getGithub()).toBe(github);
    })

    it("should return the role", () => {
        const role = "Engineer";
        const engineerExample = new Engineer("Eddie", 39, "eddie20000@gmail.com", "asantidrian");
        expect(engineerExample.getRole()).toBe(role);
    })

    it("should return the engineer Icon", () => {
        const engineerIcon = "fas fa-glasses";
        const engineerExample = new Engineer("Eddie", 39, "eddie20000@gmail.com", "asantidrian");
        expect(engineerExample.getEmployeeIcon()).toBe(engineerIcon);
    })

    it("should return the specific data asked for an engineer", () => {
        const engineerData = "GitHub";
        const engineerExample = new Engineer("Eddie", 39, "eddie20000@gmail.com", "asantidrian");
        expect(engineerExample.getEmployeeData()).toBe(engineerData);
    })

    it("should return the specific data value asked for an engineer", () => {
        const engineerDataValue = "<a href=https://github.com/asantidrian>asantidrian</a>";
        const engineerExample = new Engineer("Eddie", 39, "eddie20000@gmail.com", "asantidrian");
        expect(engineerExample.getEmployeeDataValue()).toBe(engineerDataValue);
    })

})