# readme_readthis

## Description
The purpose of this challenge was to create a solution to create a README file, quick and easily with every project with just a few steps. This was achieved with
implementing Node.js. With this script a user would be able to create a README file for their projects straight from the command line input (CLI).

## User Stories
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

## Table of contents
Project Title, Description, User Story, Acceptance Criteria, Installation, Use, Tests, Screenshots, Deployment

## Installation
The user will need to install <code class>inquirer</code>, from there please use <code class>npm i inquirer@8.2.4</code> in the CLI.
From there the application will be invoked by having the user input node index.js from the CLI

## Use
After <code class>inquirer</code> is installed, the user will be prompted with 11 questions and will be asked to select from 4 distinct licenses to include
in the readme. Once the questions are answered the readme will be generated within the project files on VS code.

## Screenshots
![Screenshot](./Images/Screenshot%20CLI.png)
## Deployment
Repo: (https://github.com/Pietroxero/readme_readthis)

Video Link: https://drive.google.com/file/d/1Xy_uQjP9RrblfmcOxZomvZNmhgBHGI_h/view


