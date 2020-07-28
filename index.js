const inquirer = require("inquirer");
const fs = require("fs");


// array of questions for user
inquirer 
    .prompt([
        {
        type: "input",
        message: "What is your github?",
        name: "github"
        },
        {
        type: "input",
        message: "What's your project title?",
        name: "title"
        }, 
        {
        type: "input",
        message: "Please enter a description of your project.",
        name: "description"
        },

]);

// function to write README file
fs.writeToFile("README", document, function(err) {
    
});

// function to initialize program
function init() {

}

// function call to initialize program
init();
