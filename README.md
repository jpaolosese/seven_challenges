# Seven Challenges

This lab is designed to review topics we've learned in the past weeks, including: jQuery, HTML Forms, AJAX, and Routing in Express Applications.

Each challenge is located at its own endpoint and has instructions in its own `challenge.js` file. Take care that you're looking at the correct file!

## Setup
* Clone this repo
* Open it in your editor
* Install node packages: `npm install`
* Run the server: `nodemon server.js`

> Note: this application does not have a database.

## Challenges
Once your server is running, visit: `http://localhost:3000/challenges/` for the list of challenges.
* See `/challenges/1/challenge.js` for challenge #1's instructions (there are 7 numbered folders).
* Each challenge builds off of the last. Read the commented instructions carefully.
* We expect you to be resourceful! So make sure to [hit the Express docs](expressjs.com/4x/api.html)!

> All quotes are by [Alan Perlis](https://en.wikipedia.org/wiki/Alan_Perlis).


### Responding to POST: Native Form Submission vs. AJAX
In challenges 5, 6, and 7 you will deal with the problem of responding appropriately to different types of POST requests -- is it a form or an xhr request? Is it authorized or unauthorized? Keep in mind the following:

#### HTML Forms are for Humans.

When an HTML Form is submitted, the desired behavior is:
* to have the form submit only once
* to redirect the client to a new (human readable) HTML page

This pattern is called [Post/Redirect/Get](https://en.wikipedia.org/wiki/Post/Redirect/Get) and takes 2 full request response cycles:
* [**POST**] first the user submits the HTML Form
    * [**REDIRECT**] and the server responds with redirection instructions in the HTTP Header:
        * a status code [3xx](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection)
        * the location of the new endpoint
* [**GET**] next the client requests (*GET*s) the new endpoint
    * and the server responds with the (human readable) HTML page.

#### AJAX is for Robots.

When we use AJAX (aka [XMLHTTPRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) or XHR) to submit a form, the desired behavior is:
* to "prevent default" on the form, so that it does *not* submit
* to avoid reloading the page
* and to respond directly with (machine readable) JSON

> YOU DO NOT NEED jQuery or AJAX to submit a native HTML Form to the server.YOU DO NOT NEED jQuery or AJAX to submit a native HTML Form to the server. 

## Bonuses
Once you've completed the challenges, try one of these stretch goals:

1. How quickly can you integrated Mongoose into this application? Adapt your routes to use MongoDB
    + Require the mongoose library
    + Create a "Tweet" schema
    + Seed your database
    + Integrate database calls into your routes
2. Adapt your solutions to use underscore templating
    + Add a new "author" field to each message
