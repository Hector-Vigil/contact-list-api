# Contacts List

> A simple application to manage a contact list

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Prerequisites](#prerequisites)


The **Contacts List** application is a simple Node.js application that allows you to manage and manipulate a contact list. It provides functionalities to add, update, delete, and display contacts.

## Getting Started

To get started with the application, follow the steps below:

1. Clone the repository: `git clone https://github.com/Hector-Vigil/contacts-list.git`
2. Navigate to the project directory: `cd contacts-list`
3. Install the dependencies: `npm install`
4. Build the application: `npm run build`
5. Start the application: `npm start`

## Scripts

The following scripts are available for different tasks:

- `npm run build`: Transpiles TypeScript code to JavaScript using the **TypeScript Compiler (tsc)**.
- `npm start`: Runs the application by starting the **index.js** file using the **Node.js** runtime.
- `npm run dev`: Runs both the TypeScript compiler and the Node.js server in watch mode using **concurrently** and **nodemon**.
- `npm test`: Runs tests using **Jest** with the configuration provided in the **jest.config.ts** file.
- `npm run migrate:run:postgres`: Deploys database migrations using **Prisma** for PostgreSQL.
- `npm run migrate:postgres:run:docker`: Deploys database migrations using **Prisma** for PostgreSQL and starts the application.

## Prerequisites

Make sure you have the following prerequisites installed to run the application:

- Node.js: [Installation Guide](https://nodejs.org/)
- TypeScript: Run `npm install -g typescript` to install TypeScript globally.
- Prisma: Run `npm install -g prisma` to install Prisma globally.

## Automatic Build
> - Ensure you have installed docker on your machine([link](https://docs.docker.com/engine/install/))
> - Ensure you do not have any service running on ports 3000 and 8000.
> - Clone the Angular app [repository](https://github.com/Hector-Vigil/contact-list-app) and store it in the same project's folder.
> - Run automatic build “docker-compose up --build -d”
> - Run “npm run migrate:up” to add initial data.
> - Check services are running correctly in http://localhost:3000,