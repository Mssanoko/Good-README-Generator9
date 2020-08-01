// prompt the user
const inquirer = require('inquirer');
// build markdown
const md = require('./generateMarkdown.js');
// file system
const fs = require('fs');
// api
const api = require('./api.js');


const questions = [
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'username'
    },
    {
      type: 'input',
      message: 'What is the title of the project?',
      name: 'title'
    },
    {
      type: 'input',
      message: 'Tell me about your project.',
      name: 'description'
    },
    {
      type: 'input',
      message: 'How would someone install your project (git clone, npm install, etc.)?',
      name: 'installation'
    },
    {
      type: 'input',
      message: 'How would someone use your project?',
      name: 'usage'
    },
    {
      type: 'input',
      message: 'If applicable, tell me about your project\'s licensing.',
      name: 'license'
    },
    {
      type: 'input',
      message: 'How could someone contribute?',
      name: 'contributing'
    },
    {
      type: 'input',
      message: 'What tests were run?',
      name: 'tests'
    },
    {
      type: 'input',
      message: 'What are some common questions you could answer now?',
      name: 'questions'
    }
  ];
  // "main" method
function init() {
    inquirer
      .prompt(questions)
      .then(answers => {
        api.request(answers.username).then(response => {
          // if response was fine, set the email and avatar from the request
          if(response !== null) {
            answers.email = response[0];
            answers.avatar = response[1];
          }
          else {
            console.log('Could not communicate with Github server');
            return;
          }
          // generate the file content based on the data variable
          const content = md.generateMarkdown(answers);
          // write the data to a file
          writeToFile('README.md', content);
        });
      });
  }
  function writeToFile(fileName, data) {
  
    fs.writeFile(fileName, data, function(error) {
      if(error) console.log(error);
      else console.log('Success!');
    });
  
  }
  // run program
  init();
