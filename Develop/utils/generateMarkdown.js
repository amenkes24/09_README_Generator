// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![MIT](https://img.shields.io/badge/License-MIT-brightgreen)`
  } else if (license === "Apache") {
    return `![Apache](https://img.shields.io/badge/License-Apache%202.0-brightgreen)`
  } else if (license === "GNU")  {
    return `![GNU](https://img.shields.io/badge/License-GNU-brightgreen`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description 

${data.description}

## Table of Contents

${data.tableOfContents}

## Installation

${data.installation}

## Usage 

${data.usage}

## License
${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.questions}

## Link

${data.link}
`;
}

module.exports = generateMarkdown;
