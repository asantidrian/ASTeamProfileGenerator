
const inquirer = require('inquirer');
const fs = require('fs');

//Constructor to create the different employees data
const Employee = require('./lib/Employee');
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
//Contructor to create the html card for each employee, and to create the Html Page
const teamCards = require('./src/generateHTMLCards')
const generateHTML = require('./src/generateHTMLPage')

teamCardsArray = []
managerCardsArray = []
engineerCardsArray = []
internCardsArray = []
let teamCardsJoin = ""
let htmlFile = ""

const typeEmployeeQuestion = [
    {
        type: "list",
        message: "What type of employee should be added?",
        name: "typeEmployee",
        choices: ["Manager", "Engineer", "Intern", "No more team members"],
    }

]
//Common questions to ask to each employee
const commonQuestions = [

    {
        type: "input",
        name: "name",
        message: "what is the employee's name?",
    },
    {
        type: "input",
        name: "Id",
        message: "What is the employee's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "what is the employee's email?",
    },
]

const managerQuestion = [
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"

    }

]
const engineerQuestion = [
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?"
    }

]
const internQuestion = [
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?"
    }

]
//prompt to determine what type of empoyee is. Each employee will call their own function
function promptUser() {
    return inquirer.prompt(typeEmployeeQuestion)
        .then(({ typeEmployee }) => {
            switch (typeEmployee) {
                case "Manager":
                    employeeManager(typeEmployee);
                    break;

                case "Engineer":
                    employeeEngineer(typeEmployee);
                    break;

                case "Intern":
                    employeeIntern(typeEmployee);
                    break;

                default:
                    teamCardsArray = managerCardsArray.concat(engineerCardsArray, internCardsArray)
                    teamCardsJoin = teamCardsArray.join('')
                    htmlFile = generateHTML(teamCardsJoin)
                    writeToFile("index.Html)", teamCardsJoin)
                    break;

            }
        })
}

function employeeManager() {
    return inquirer.prompt(commonQuestions)
        .then(({ name, Id, email }) => {
            return inquirer.prompt(managerQuestion)
                .then(({ officeNumber }) => {
                    const manager = new Manager(name, Id, email, officeNumber);
                    teamCards(manager);
                    managerCardsArray.push(teamCards(manager))
                    promptUser();
                })
        })
}

function employeeEngineer(typeEmployee) {
    return inquirer.prompt(commonQuestions)
        .then(({ name, Id, email }) => {
            return inquirer.prompt(engineerQuestion)
                .then(({ github }) => {
                    const engineer = new Engineer(name, Id, email, github);
                    teamCards(engineer)
                    engineerCardsArray.push(teamCards(engineer))

                    promptUser();
                })
        })
}
function employeeIntern(typeEmployee) {
    return inquirer.prompt(commonQuestions)
        .then(({ name, Id, email }) => {
            return inquirer.prompt(internQuestion)
                .then(({ school }) => {
                    const intern = new Intern(name, Id, email, school);
                    teamCards(intern);
                    internCardsArray.push(teamCards(intern))
                    promptUser();
                })
        })
}
function writeToFile() {
    fs.writeFile('index.html', htmlFile, (err) => err ? console.log(err) : console.log('Successfully created index.Html file!')
    );
}

promptUser()
