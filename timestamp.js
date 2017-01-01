var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/:date', function (req, res) {
	var date = req.params.date;

	// Check if given input is just a unix timestamp in seconds
	if (!isNaN(Number(date))) {
		date = Number(date) * 1000;
	}

	var parsedDate = new Date(date);
	var timestamp = {unix: null, natural: null};

	if (parsedDate && !isNaN(parsedDate.getYear())) {
		var locale = 'en-us';
		var natural = parsedDate.toLocaleString(locale, { month: "long", day: 'numeric', year: 'numeric'});
		timestamp.unix = Math.floor(Number(parsedDate) / 1000);
		timestamp.natural = natural;
	}
	res.send(timestamp);
});

app.listen(port);
