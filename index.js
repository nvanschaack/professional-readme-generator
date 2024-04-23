// TODO: Include packages needed for this application
//need inquirer package and fs, as well as requiring the generateMarkDown.js to use certain functions listed in its module.exports.
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// title of my project and sections entitled Description,  Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like the title of your application to be?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write the description of your application.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your application? Provide a step-bystep description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for usage of your application.' 
    },
    {
        type: 'input',
        name: 'license',
        message: 'Paste your license here.'
    },
    {
        type: 'input',
        name: 'contributing',
        //contributing the same thing as credits?
        message: 'List your collaborators, if any, with links to their GitHub profiles as well as any other assets you may have used.' 
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application here.' 
    },
    {
        type: 'input',
        name: 'question',
        message: 'Any questions you have.'   
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err, result) => {
        if (err) throw err;
        console.log('file created');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>{
        writeToFile('README.md', generateMarkdown(response))
    })
 }

// Function call to initialize app
init();
