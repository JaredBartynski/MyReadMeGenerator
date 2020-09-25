const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "Description",
    message: "What is the description of the project?",
  },
  {
    type: "input",
    name: "Installation",
    message: "What is the installation process for the project?",
  },
  {
    type: "input",
    name: "Usage",
    message: "What is the usage?",
  },
  {
    type: "checkbox",
    name: "License",
    message: "What is the license for the project?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "Contributing",
    message: "Who contributed to the project?",
  },
  {
    type: "input",
    name: "Tests",
    message: "What are the tests for the project?",
  },
  {
    type: "input",
    name: "Email",
    message: "What is your e-mail?",
  },
  {
    type: "input",
    name: "Github",
    message: "What is your Github username?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (answers) {
    writeToFile("GeneratedMarkdown.md", generateMarkdown(answers));
  });
}

// function call to initialize program
init();
