// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('fs').promises;
 

// TODO: Create an array of questions for user input
// update - changing const to .prompt

const userPrompt = () =>{ 
return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your repo?',
    },
    
    {
        type: 'input',
        name: 'title',
        message: 'What will your Project title be?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe what your project aims to do',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Please provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'List of collaborators',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license for your project.',
        choices: [
            {value: 'MIT'},
            {value: 'ISC'},
            {value: 'Apache'},
            {value: 'None'},
        ]
        },
        {
        type: 'input',
        name: 'test',
        message: 'How did you test this Project?',
        },
        {
            type: 'input',
        name: 'deployed',
        message: 'Please input location of your deployed site:',
        },
]);
};

//NOTES originally built input array within this const, after more research and review chose to change to above structure
// const questions = [
   
// ];

//Updates on TODO lines 83, 86, 110
const init = () => {
    userPrompt()
    //writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((data) => writeFile(`${data.name}.md`, generateMarkdown(data)))
    .then(() => console.log('Thank you very much! Your Readme is now ready'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// .then((data)=> {
//     fs.writeFile(`${data.name}.md`, generateMarkdown(data), (err)=>
//     err ? console.error(err) : console.log('Thank you very much! Your Readme is now ready'))
// })
// function init() {
//     return inquirer.prompt(questions)
//     .then((data)=>{
//         const mark =Markdown.generateMarkdown(data)
//         console.log(data)
//         fs.writeFile('README.md', mark, function(err){
//             if(err){
//                 console.log('unable to save file', err)
//             } else {
//                 console.log('Your file has been created')
//             }
//         })
//         return data
//     })
//     .catch((err)=>{
// console.log(err)
//     })
// }


