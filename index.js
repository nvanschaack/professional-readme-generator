// TODO: Include packages needed for this application
//need inquirer package and fs, as well as requiring the generateMarkDown.js to use certain functions listed in its module.exports.
const inquirer = require('inquirer')
const fs = require('fs')
const logo = require('asciiart-logo')
const colors = require('colors')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// title of my project and sections entitled Description,  Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: colors.magenta('What would you like the title of your application to be?'),
    },
    {
        type: 'input',
        name: 'description',
        message: colors.magenta('Write the description of your application.'),
    },
    {
        type: 'input',
        name: 'installation',
        message: colors.magenta('What are the steps required to install your application? Provide a step-by-step description of how to get the development environment running.'),
    },
    {
        type: 'input',
        name: 'usage',
        message: colors.magenta('Provide instructions and examples for usage of your application.'),
    },
    {
        type: 'list',
        name: 'license',
        message: colors.magenta('Choose which license you would like to use.'),
        choices: ['MIT', 'GPLv3', 'Perl', 'IBM', 'ISC', 'None of these']
    },
    {
        type: 'input',
        name: 'contributing',
        message: colors.magenta('List steps to inform the user of your application of how to contribute to your applications repository.'),
    },
    {
        type: 'input',
        name: 'credits',
        message: colors.magenta('List collaborators, any third-party assets, and any other assets used to help create your application.'),
    },
    {
        type: 'input',
        name: 'tests',
        message: colors.magenta('Write tests for your application here.')
    },
    {
        type: 'input',
        name: 'github',
        message: colors.magenta('Please enter your GitHub username here.')
    },
    {
        type: 'input',
        name: 'email',
        message: colors.magenta('Please enter your email here.')
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        (error) ?
        console.log('Try Again')
        :
        console.log('File Created');
    })
}

// TODO: Create a function to initialize app
function init() {
    const logoText =  logo({name: 'Readme Generator'}).render()
    console.log(logoText);

    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile('README.md', generateMarkdown(response))
        })
}

// Function call to initialize app
init();
