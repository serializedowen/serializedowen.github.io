// import setupGraphQLServer from './graphql';

const functions = require('firebase-functions');

// const GraphQLServer = setupGraphQLServer();

// https://us-central1-<project-name>.cloudfunctions.net/api
// exports.api = functions.https.onRequest(GraphQLServer);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});
