// prompt the user
const inquirer = require('inquirer');
// build markdown
const md = require('./generateMarkdown.js');
// file system
const fs = require('fs');

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
    message: 'What version is this?',
    name: 'version'
    },
    {
      type: 'editor',
      message: 'Tell me about your project.',
      name: 'description'
    },
    {
      type: 'editor',
      message: 'How would someone install your project (git clone, npm install, etc.)?',
      name: 'installation'
    },
    {
      type: 'editor',
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
      type: 'editor',
      message: 'What tests were run?',
      name: 'tests'
    },
    {
      type: 'editor',
      message: 'What are some common questions you could answer now?',
      name: 'questions'
    }
  ];
