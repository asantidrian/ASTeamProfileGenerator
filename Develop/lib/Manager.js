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
        return "Office Number"
    }
    getEmployeeDataValue() {
        return this.officeNumber
    }

}

module.exports = Manager;

