const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }
    
    getGithub() {
        return `<strong>GitHub:</strong> <a href="https://github.com/${this.github}" target="_blank">${this.github}</a>`;
    }
}


module.exports = Engineer;
