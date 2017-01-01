var express = require('express');
var app = express();

app.get('/:date', function (req, res) {
	var date = new Date(req.params.date);
	var timestamp = {unix: null, natural: null};
	if (date && !isNaN(date.getYear())) {
		var locale = 'en-us';
		var natural = date.toLocaleString(locale, { month: "long", day: 'numeric', year: 'numeric'});
		timestamp.unix = Math.floor(Number(date) / 1000);
		timestamp.natural = natural;
	}
	res.send(timestamp);
});

app.listen(8080);
