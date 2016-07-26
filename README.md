# Seven Challenges

This lab is designed to review topics we've learned in the past weeks, including: jQuery, HTML Forms, AJAX, and Routing in Express Applications.

Each challenge is located at its own endpoint and has instructions in its own `challenge.js` file. Take care that you're looking at the correct file!

## Setup
* clone this repo
* open it in your editor
* install node packages: `npm install`
* run the server: `nodemon server.js`

> Note: this application does not have a database.

## Challenges
Once your server is running, visit: `http://localhost:3000/challenges/` for the list of challenges.
* See `/challenges/1/challenge.js` for challenge #1's instructions (there are 7 numbered folders).
* Each challenge builds off of the last. Read the commented instructions carefully.

> All quotes are by [Alan Perlis](https://en.wikipedia.org/wiki/Alan_Perlis).

#### Bonuses
Once you've completed the challenges, try one of these stretch goals:
+ How quickly can you integrated Mongoose into this application? Adapt your routes to use MongoDB
        + Require the mongoose library
        + Create a "Tweet" schema
        + Seed your database
        + Integrate database calls into your routes
+ Adapt your solutions to use underscore templating
    + Add a new "author" field to each message
