// importing Employee constructor 
const Employee = require('./Employee');

// intern constructor extends employee constructor 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // returning school from input 
    getSchool() {
        return this.school;
    }
    // override employee role to intern
    getRole() {
        return "Intern";
    }
    getEmployeeIcon() {
        return "fas fa-user-graduate"
    }

    getEmployeeData() {
        return this.school
    }
    getEmployeeInfo() {
        return "School"
    }

}
module.exports = Intern; 