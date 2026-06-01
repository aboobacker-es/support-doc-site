---
title: "Validating a Project for Front End, Back End, and Full Stack Questions"
slug: /library/creating-custom-questions/projects/validating-a-project-for-front-end-back-end-and-full-stack-questions
pylon_id: b6cb4d8f-5834-4421-9584-19ad324ed8ca
published_url: https://support.hackerrank.com/articles/1053996435-Validating-a-Project-for-Front-End,-Back-End,-and-Full-Stack-Questions
last_edited: "2025-06-17"
is_published: true
---

Before you import a project in a 'HackerRank Projects' question (front-end developer, back-end developer or both), you should ensure it is valid. A valid project should have the following:

  1. The project must be less than **5 MB** in size.

  2. A **hackerrank.yml** configuration file in the root directory.

  3. The configuration should have all the required parameters. Follow [📄 Configurations for Front-end, Back-end and Full stack Developer Questions](</articles/9443018671>)to learn about writing a valid hackerrank.yml file.

  4. If the project has a server that needs to be exposed outside of the machine (eg: a web server), it should be running at one of the open ports: **(3000, 3030, 5000, 6000, 6001, 8000, 8080)** only. No other port is exposed outside the machine.

  5. The scoring command should run successfully and produce a valid output.

Follow[📄 Scoring Front-end, Back-end and Full Stack Questions](</articles/4110011178>)to learn about valid scoring methods for a project-based question's project. 

## How validation works

To ensure the imported project is valid, a validation step is run automatically when a project is imported. Here is how the validation step works:

  1. Ensure the project zip is less than 5 MB in size.

  2. Verify that hackerrank.yml is present in the root directory of the project.

  3. Validate hackerrank.yml for correct format and required values

  4. Start a server with the project zip and run the scoring command. This step can take some time.

  5. Once the scoring command has run successfully, the output is checked for a valid output.

  6. If the scoring output is valid, it is checked for a valid score. If test case weights are provided in the configuration file, they are also verified in this step.

A project must clear all steps to be considered valid.

:::note
The scoring command once ran, should finish within 5 minutes. If the scoring command takes longer than 5 minutes, a timeout error will happen.
:::
