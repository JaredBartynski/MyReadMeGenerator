// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![License](https://img.shields.io/static/v1?label=${
    data.License
  }&message=license&color=red)

  ## Table of Contents

  *[Description](#Description)
  *[Installation](#Installation)
  *[Usage](#Usage)
  *[License](#License)
  *[Contributing](#Contributing)
  *[Tests](#Tests)
  *[Questions](#Questions)
  

  ## Description: 
    ${data.Description}
  ## Installation:
    ${data.Installation}
  ## Usage:
    ${data.Usage}
  ## License:
    ${data.License}
  ## Contributing:
    ${data.Contributing}
  ## Tests:
    ${data.Tests}
  ## Questions:
    If you have any questions about the repo, open an issue or contact me at ${
      data.E - mail
    }. You can find more of my work at [GitHub](http://github.com)${
    data.Github
  }. 
`;
}

module.exports = generateMarkdown;
