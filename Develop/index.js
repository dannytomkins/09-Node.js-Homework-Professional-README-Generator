const inquirer = require('inquirer');
const generateREADME = require('./utils/generateMarkdown')
const fs = require("fs")
const axios = require("axios")
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter your installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your usage information',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter your contribution guidelines',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter your license information',
        choices: ['MIT','IBM','Apache']
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter your test instructions',
    },
    {
        type: 'input',
        name: 'githubusername',
        message: 'Enter your test Github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
    },
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateREADME(data), function(error){
        if(error) throw error
        console.log("Success!")
    })
}

// function to initialize program
function init() {
   


    inquirer.prompt(questions)
    .then((answers) => {
        axios.get("https://api.github.com/users/"+answers.githubusername).then(function(results){
            answers.githubprofile = results.data.html_url
            writeToFile('README.md',answers)
        })



       
    })
     
}

// function call to initialize program
init();


