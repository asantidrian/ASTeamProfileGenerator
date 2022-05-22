// importing Employee constructor 
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }

    getEmployeeIcon() {
        return "fas fa-mug-hot"
    }

    getEmployeeData() {
        return this.officeNumber
    }
    getEmployeeInfo() {
        return "Office Number"
    }

}

module.exports = Manager;

