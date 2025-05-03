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
      message: "Choose your Programming Language",
      choices: [
        { title: "TypeScript", value: "Typescript", description: "Type-safe JavaScript with better tooling and error prevention. Recommended for larger projects." },
        { title: "JavaScript", value: "Javascript", description: "Familiar JavaScript syntax without type annotations. Simpler to start with for smaller projects." }
      ]
    },
    {
      type: "select",
      name: "template",
      message: "Choose your starter template",
      choices: [
        { title: "React + Redux Toolkit + React Query", value: "react-query", description: "Full-featured setup with global state management (Redux) and efficient data fetching (React Query). Best for complex applications." },
        { title: "React + React Query (no Redux)", value: "react-query-only", description: "Lightweight setup focused on efficient data fetching. Best for simpler apps that don't need complex global state." },
        { title: "React + Zustand + React Query", value: "zustand-query", description: "Modern alternative with simpler state management (Zustand) and efficient data fetching. Great balance of simplicity and power." },
        { title: "React + Redux Toolkit + Redux Saga", value: "redux-saga", description: "Advanced setup for complex async workflows using Redux Saga. Ideal for apps with complex state and side effects." }
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
