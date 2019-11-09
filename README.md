# TaskTracker

A web application built using React, Redux, Node.js, Express, and MongoDB for tracking a user's tasks and their personal progress.

## Setting up the local environment

- Add a `config.js` file under the server folder. This file will contain and export a secret for encrypting passwords added by a user.
- Install all dependencies by running `yarn install` under the client and server folders.
- Install MongoDB on your device from the official website. If you are using Windows, remember to also create a data directory where Mongo can store data.

## Running the application locally

- Start up an instance of MongoDB.
- For Mac, run `mongod` from the terminal under any directory.
- For Windows, run `mongod.exe` from the terminal under any directory, and specify the path to your databsae directory.
- To start the server, enter the server directory and run `yarn dev`. By default, the server will use port `3090`.
- To start the client, enter the client directory and run `yarn start`. By default, the client will use port `3000`.

## Testing endpoints

- To test endpoints that are hidden behind authentication, a JWT token is needed.
- To create a JWT, open the network tab, create an account from the sign up page, and copy the token.
- The token needs to be placed under the authentication header before requests can be sent.
