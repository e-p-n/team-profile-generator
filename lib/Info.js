const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');


class Info {

    constructor(){
        this.team = [];
        this.manager;
        this.engineer;
    };

    collectManager(){

        console.log(`
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * *  Team Web Page Builder  * * * * * * * * * * * 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

Fill in the form below with information about the members of your
team. When you are finished, a web page will be generated and saved
in the “dist” folder.

We will start with the team manager:

`)

        inquirer
            .prompt([
                
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please enter the Team Manager’s name.',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Manager name is required');
                            return false;
                        }
                    }
                },
                {
                    type: 'number',
                    name: 'id',
                    message: 'Please enter the Team Manager’s employee ID.',
                    validate: idInput => {
                        if (!idInput || idInput === NaN) {
                            console.log('.  Employee ID number is required. Please enter only numbers');
                            return false;
                        } else {
                            return true;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter Team Manager’s email address',

                    validate: emailInput =>{
                        let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
    
                        if (valid) {
                            return true;
                        } else {
                            console.log(".  Please enter a valid email")
                            return false;
                        }
                    }

                },
                {
                    type: 'number',
                    name: 'officeNumber',
                    message: 'Enter Team Manager’s office number.',
                    validate: idInput => {
                        if (!idInput || idInput === NaN) {
                            console.log('.  Office number number is required. Please enter only numbers');
                            return false;
                        } else {
                            return true;
                        }
                    }
                   
                }
                
            ])
            .then(data => {
                this.manager = new Manager(data.name, data.id, data.email, data.officeNumber);
                this.team.push(this.manager);
                console.log(`
* * * * * * * * * * Enter Employee Information  * * * * * * * * * *
                `);
                this.collectEmployee();
            }); 
    }
    collectEmployee(){
 
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'empType',
                    message: 'Select an employee type:',
                    choices: ['Engineer', 'Intern']
                }
            ])
            .then(({ empType }) => {
                if(empType === 'Engineer'){
                    this.collectEngineer();
                } else {
                    this.collectIntern();
                }
            });
           
    }
    collectEngineer(){
        inquirer 
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter Engineer’s name',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Engineer name is required');
                            return false;
                        }
                    }
                },
                {
                    type: 'number',
                    name: 'id',
                    message: 'Please enter the Engineer’s employee ID.',
                    validate: idInput => {
                        if (!idInput || idInput === NaN) {
                            console.log('.  Employee ID number is required. Please enter only numbers');
                            return false;
                        } else {
                            return true;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter Engineer’s email address',

                    validate: emailInput =>{
                        let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
    
                        if (valid) {
                            return true;
                        } else {
                            console.log(".  Please enter a valid email")
                            return false;
                        }
                    }

                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter Engineer’s GitHub ID',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('GitHub ID is required');
                            return false;
                        }
                    }
                },
                {
                    type: 'confirm',
                    name: 'addMore',
                    message: 'Add another employee?',
                    default: true
                }
            ])
            .then (data => {
                this.engineer = new Engineer(data.name, data.id, data.email, data.github)
                this.team.push(this.engineer);
                if (data.addMore === true) {
                    this.collectEmployee();
                } else {
                    console.log(this.team);
                }
            })
    }

    collectIntern(){
        inquirer 
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter Intern’s name',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Intern name is required');
                            return false;
                        }
                    }
                },
                {
                    type: 'number',
                    name: 'id',
                    message: 'Please enter the Intern’s employee ID.',
                    validate: idInput => {
                        if (!idInput || idInput === NaN) {
                            console.log('.  Employee ID number is required. Please enter only numbers');
                            return false;
                        } else {
                            return true;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter Intern’s email address',

                    validate: emailInput =>{
                        let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
    
                        if (valid) {
                            return true;
                        } else {
                            console.log(".  Please enter a valid email")
                            return false;
                        }
                    }

                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Enter Intern’s school',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('School is required');
                            return false;
                        }
                    }
                },
                {
                    type: 'confirm',
                    name: 'addMore',
                    message: 'Add another employee?',
                    default: true
                }
            ])
            .then (data => {
                this.intern = new Intern(data.name, data.id, data.email, data.school)
                this.team.push(this.intern);
                if (data.addMore === true) {
                    this.collectEmployee();
                } else {
                    return(this.team);
                }
            })
    }

}
module.exports = Info;