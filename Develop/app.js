const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const teamArr = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Manager Questions
function promptManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter first and last name of Manager.",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Manager's ID number.",
            name: "id"
        },
        {
            type: "input",
            message: "Enter valid email address for Manager.",
            name: "email"
        },
        {
            type: "input",
            message: "Enter office number for Manager.",
            name: "officeNumber"
        },
    ]).then(answer => { 
        buildTeam()
        .then(answer => {
            console.log(answer)
    })
});
promptManager()

};

// Engineer/Intern Questions
function buildTeam() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter first and last name of employee.",
            name: "name"
        },
        {
            type: "input",
            message: "Enter employee's ID number.",
            name: "id"
        },
        {
            type: "input",
            message: "Enter valid email address for employee.",
            name: "email"
        },
        {
            type: "list",
            message: "Name this employee's position.",
            name: "role",
            choices: [
                "Engineer",
                "Intern"
            ]
        }
    ]).then(answer => {
        switch (answer.role) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
        }
    });
};

// buildTeam()
// .then(answer => {
//     console.log(answer)

    
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's github username?",
            name: "github"
        }
    ])
};

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What school does/did the Intern attend?",
            name: "school"
        }
    ])
};

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// render(teamArr);

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

function writeHTML() {
    inquirer.prompt(questions).then((answers) => {
        return fs.writeFile(outputPath + htmlRenderer(answers));
    })
};

// Write answers onto template 
// function writeFile (filename, data) {
//     fs.writeFilesSync(filename, data)
// };


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
