// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Markdown = require('./utils');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project use?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'contribution info?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions(email)?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions(github)?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['MIT', 'ISC', 'GNUP:v3'],
        filter (val){
            return val.toLowerCase();
        }
    }
];



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data)=>{
        const mark =Markdown.generateMarkdown(data)
        console.log(data)
        fs.writeFile('README.md', mark, function(err){
            if(err){
                console.log('unable to save file', err)
            } else {
                console.log('Your file has been created')
            }
        })
        return data
    })
    .catch((err)=>{
console.log(err)
    })
}

// Function call to initialize app
init();
