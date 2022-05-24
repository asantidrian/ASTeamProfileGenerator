// importing Employee constructor 
const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //calling the Employee constructor
        super(name, id, email);

        this.github = github;
    }
    // returning github from input 
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
    getEmployeeIcon() {
        return "fas fa-glasses"
    }
    getEmployeeData() {
        return "GitHub"
    }
    getEmployeeDataValue() {
        return "<a href=https://github.com/" + this.github + ">" + this.github + "</a>"
    }

}

module.exports = Engineer; 