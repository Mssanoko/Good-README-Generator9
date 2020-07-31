const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

inquirer.prompt (
      {
          type: "input",
          message: "Enter Your Github username:",
          name: "username"
      }
  )
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(res) {
        console.log(res.data);
        const username = res.data.login;
      const email = res.data.email;
      const avatarUrl = res.data.avatar_url;
      const avatar = `![Avatar](`+ avatarUrl +`)`;
        const doc = `username:` + res.data.login + `\n` + `email:` + res.data.email + `\n` + `![Avatar](`+ res.data.avatar_url +`)` + `\n`;
        fs.writeFile("readMe.md", doc, function(err) {
            if (err) {
              throw err;
            } 
        });
    })
  })
  .then(function(){
      inquirer.prompt([
            {
              type:"input",
              message:"What is your username?",
              name:"username"
            },
            {
            type:"password",
            message:"Type your password",
            name:"password"
            },
            {
                type:"password",
                message:"Confirm your password",
                name:"Confirm"
            },
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
                        "None"]
            },
      ])
      .then(function(answers) {
          var file = 
          `## Table of Contents 

          - [Description] (#description)`
        
          `## Description

          ${answers.description}`
        
          `## Licenses`
          

          var doc = file 
          fs.appendFile("readMe.md", doc, function(err){
              if (err) {
                  throw err;
              }
          })
      })
      });

