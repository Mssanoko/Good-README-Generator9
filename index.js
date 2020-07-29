const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const path = require("path");
const { type } = require("os");
const writeFileAsync = util.promisify(fs.writeFile);

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
              message:"Descripte your project",
              name:"describe"
          },

      ])
  })
