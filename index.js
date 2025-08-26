// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Possible cases for req.params.date:
// - Empty → return the current date
// - Numeric (e.g. "1450137600") → interpret as a timestamp
// - String (e.g. "2020-01-01") → interpret as a date string
// - Invalid → return { error: "Invalid Date" }
app.get("/api/:date?", function (req, res) {
  const dateParam = req.params.date;
  let date;

  if (!dateParam) {
    // No date parameter, use current date
    date = new Date();
  } else if (!isNaN(dateParam)) {
    // Numeric date parameter, interpret as timestamp
    date = new Date(parseInt(dateParam));
  } else {
    // String date parameter, interpret as date string
    date = new Date(dateParam);
  }

  // Check if the date is valid
  if (date.toString() === "Invalid Date") {
    res.json({ error: "Invalid Date" });
  }
  // Return the date in both unix and utc formats
  else {
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  }
});



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
