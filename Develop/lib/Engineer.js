// importing Employee constructor 
const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // calling employee constructor 
        super(name, id, email);

        this.github = github;
    }
    // returning github from input 
    getGithub() {
        return this.github;
    }
    // override employee role to engineer
    getRole() {
        return "Engineer";
    }
    getEmployeeIcon() {
        return "fas fa-glasses"
    }
    getEmployeeData() {
        return " <a href=https://github.com/" + " <a href=https://github.com/" + this.github + ">" + this.github + "</a>"
    }
    getEmployeeInfo() {
        return "GitHub"
    }

}

module.exports = Engineer; 