# An Example of TypeScript UI5 App

## Description

This app is basically the translate of [Walkthrough sample](https://sapui5.hana.ondemand.com/#/topic/3da5f4be63264db99f2e5b04c5e853db) (Step 27 at moment) from SAPUI5 to TypeScript UI5. 

This is done by [TypeScript package](https://www.npmjs.com/package/typescript) combined with `tsconfig.json` file, which are responsible of compile the `*.ts` files in `*.js`(ES2015/ES6), and with [Babel](https://babeljs.io/) transpiler which transform ES modules and classes in UI5 syntax. 

All packages installed and descriptors' contents have been taking from this [guide](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/main/step-by-step.md). It's suggested to take a look for more details.

## Requirements

[npm](https://www.npmjs.com/) for dependency management.

## Download and Installation

1. Clone the project:

```sh
git clone https://github.com/Izio91/Walkthrough-TypeScript.git
cd walkthrough-typescript
```
    
(or download from https://github.com/Izio91/Walkthrough-TypeScript/archive/main.zip)

2. Use npm to install the dependencies:

```sh
npm i
```

## Build the App

Execute the following command to build the project and get an app that can be deployed:

```sh
npm run build
```

The result is placed into the `dist` folder. To start the generated package, just run.
The command also create the `webapp` folder.

## Run the App

Execute the following command to run the app locally for development in watch mode (the browser reloads the app automatically when there are changes in the source code):

```sh
npm run start
```

As shown in the terminal after executing this command, the app is then running on http://localhost:8080/index.html. A browser window with this URL should automatically open.
