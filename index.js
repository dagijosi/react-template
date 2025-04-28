#!/usr/bin/env node

import prompts from "prompts";
import { copy } from "fs-extra";
import { exec } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const response = await prompts([
    {
      type:"select",
      name: "language",
      message: "Choose your Programing Langauge",
      choices: [
        { title: "TypeScript", value: "Typescript"},
        { title: "JavaScript", value: "Javascript"}
      ]
    },
    {
      type: "select",
      name: "template",
      message: "Choose your starter template",
      choices: [
        { title: "React + Redux Toolkit + React Query", value: "react-query" },
        { title: "React + Redux Toolkit + Redux Saga", value: "redux-saga" }
      ]
    },
    {
      type: "text",
      name: "projectName",
      message: "What's your project name?",
      initial: "my-app"
    }
  ]);

  const templatePath = path.join(__dirname, "templates", response.language, response.template);
  const destinationPath = path.join(process.cwd(), response.projectName);

  await copy(templatePath, destinationPath);

  console.log("\nInstalling dependencies...");
  exec(`cd ${response.projectName} && npm install`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error installing dependencies: ${error}`);
      return;
    }
    console.log(stdout);
    console.error(stderr);
    console.log("\n🚀 Project setup complete!");
    console.log(`\ncd ${response.projectName}`);
    console.log("npm run dev");
  });
}

main();
