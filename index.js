const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

inquirer

  .prompt (
      {
          type: "input",
          message: "Enter Your Github username:",
          name: "username"
      }
  )
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(res) {

    })
  })
  .then(function(){
      inquirer.prompt([
          {
              type:"input",
              message:"What is your project title?",
              name:"title"
          },
          {
              type:"input",
              message:"Describe your project",
              name:"describe"
          },
          {
            type: "list",
            name: "project_license",
            message: "What kind of license applies to your project?",
            choices: [  "MIT", 
                        "LGPL",
                        "GPL", 
                        "BSD 3", 
                        "BSD 2", 
                        "APACHE 2.0", 
                        "None"
                    ]
        },

      ])
  })
