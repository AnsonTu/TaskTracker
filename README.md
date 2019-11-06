# TaskTracker

A web application built using React, Redux, Node.js, Express, and MongoDB for tracking a user's tasks and their personal progress.

## Setting up the local environment

- Add a `config.js` file under the server folder. This file will contain and export a secret for encrypting passwords added by a user.
- Install all dependencies by running `yarn install` under the client and server folders.
- Install MongoDB on your device from the official website.

## Running the application locally

- Run an instance of Mongo using `mongod` under the project root directory, or any directory under it.
- To start the server, enter the server directory and run `yarn dev`.
- To start the client, enter the client directory and run `yarn start`.
