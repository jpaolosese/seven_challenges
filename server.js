// require express and other modules
var express = require("express"),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// parse incoming cookies in the HTTP Header
// and populate the req.cookies object
var cookieParser = require("cookie-parser");
app.use(cookieParser());

/************
 * DATABASE *
 ************/

// Nothing to see here.

/**********
 * ROUTES *
 **********/

/*
 * API ENDPOINTS
 */

app.get("/api/tweets", function indexTweet(req, res){
  res.send({
    data: [
      { message: "In software systems, it is often the early bird that makes the worm." },
      { message: "Everything should be built top-down, except the first time." },
      { message: "If you have a procedure with ten parameters, you probably missed some." }
    ]
  });
})

app.get("/api/tweets/:id", function showTweet(req, res){
  var tweets = [
    { message: "Once you understand how to write a program get someone else to write it." },
    { message: "The string is a stark data structure and everywhere it is passed there is much duplication of process. It is a perfect vehicle for hiding information." },
    { message: "There are two ways to write error-free programs; only the third one works." },
    { message: "Every program is a part of some other program and rarely fits." }
  ];

  // var tweet = ...

  res.send({
    // data: [ tweet ] // note we're sending back an array of one.
  });
})

app.post("/api/tweets", function createTweet(req, res){
  console.log("req.cookies", req.cookies);

  if (req.xhr ) {
    // it was an AJAX Request, so we need to respond with
    // a JSON object containing the newly created tweet
    // or HTTP Status Code 401, "not authorized"
  } else {
    // it was an HTML Form Request, so we need to redirect
    res.redirect("/nice-work");
  }

})

/*
 * Challenge Endpoints - DO NOT MODIFY
 */

app.get("/", function(req, res){
  res.redirect("/challenges");
});
app.use("/challenges", express.static("challenges"));
app.get("/nice-work", function(req, res){
  res.send("<h2>Nice Work!</h2> You submitted an HTML form! (But did you want to use AJAX?)");
});


/**********
 * SERVER *
 **********/

app.listen(3000, function(){
  console.log("Server running on localhost:3000");
})
