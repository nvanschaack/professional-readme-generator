// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//this function is providing a license badge corresponding to the licednse the user selects from the prompt on the index file, or if they aren't using a license it will return an empty string in the readme file.
function renderLicenseBadge(license) { 
  if (license === 'None of these') {
    return ' '
  } else {
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//this function is adding a license list item to the table of contents so the user can click on the license link and be brought to the license section of the readme. if the user isn't using a license it returns an empty string.
function renderLicenseLink(license) { 
  if (license === 'None of these') {
    return ' '
  } else {
  return `- [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//this function is adding a license section to the readme file. if the user isn't using a license then there will be no license section.
function renderLicenseSection(license) { 
  if (license === 'None of these') {
    return ' '
  } else {
  return `## License
  
  This application is covered under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

My GitHub username is: ${data.github}. The link to this Repo is https://github.com/${data.github}/${data.title}.
You can reach me with additional questions at ${data.email}.

`;
}
//export the function above to be used in the index file.
module.exports = generateMarkdown;
