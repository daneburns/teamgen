const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require('util')
const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const appendFile = util.promisify(fs.appendFile)
const employees = []

main()
async function main(){
    
const firstSet = await inquirer.prompt([
    {
        name: "role",
        type: "list",
        message: "What is the employee's role?",
        choices: ["Engineer", "Intern", "Manager", "I'm all finished."],
    }])

switch (firstSet.role) {
    case "Engineer":
       await 
       inquirer.prompt([
            {
                name: "name",
                message: "What is the employee's name?"
            },
            {
                name: "email",
                message: "What is the employee's email?"
            },
            {
                name: "id",
                message: "What is the employee's id?"
            },
            {
                name: "github",
                message: "What is the engineer's github username?"
            },

        ]).then(answers => {
            const eng = new Engineer(answers.name, answers.email, answers.id, firstSet.role, answers.github)
            employees.push(eng)
        })
        main()
        
    break;
    case "Manager":
        inquirer.prompt([
            {
                name: "name",
                message: "What is the employee's name?"

            },
            {
                name: "email",
                message: "What is the employee's email?"
            },
            {
                name: "id",
                message: "What is the employee's id?"
            },{
                name: "officeNumber",
                message: "What is the manager's office number"
            }

        ]).then(answers => {
        const man = new Manager(answers.name, answers.email, answers.id, firstSet.role, answers.officeNumber)
        employees.push(man)
        main()
        })
        
            break;
    case "Intern":
        inquirer.prompt([
            {
                name: "name",
                message: "What is the employee's name?"

            },
            {
                name: "email",
                message: "What is the employee's email?"
            },
            {
                name: "id",
                message: "What is the employee's id?"
            },
            {
                name: "school",
                message: "What school does the employee go to?"
            }

        ]).then(answers => {
        const intern = new Intern(answers.name, answers.email, answers.id, firstSet.role, answers.school)
        employees.push(intern)
        main()
        })
                break;

    default:
        appendFile("new.html", render(employees))
        break;
    }
}
