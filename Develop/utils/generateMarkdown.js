// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  
  ${data.description}
  
  ## Table of Contents (Optional)
  
  If your README is very long, add a table of contents to make it easy for users to find what they need.
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}  
  
  ## Usage 
  
  ${data.usage}  
  
  ## License
  
  ${data.license === "MIT" ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)": data.license ==="IBM" ? "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"}  

  ## Questions
  
  Github Profile: ${data.githubprofile}

  Email: ${data.email}
  ---
  
  🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  
  ## Contributing
  
  ${data.contribution}  
  
  ## Tests
  
  ${data.test}  
  
  
  
`;
}

module.exports = generateMarkdown;
