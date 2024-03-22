//const prompt = require('prompt-sync')();
var url = require('url');

const calculateFuelCost = (miles) => {
	const mpg = 30;
	const costPerLitre = 142;
	const gallonInLitres = 4.54609;


	const milesPerLitre = mpg / gallonInLitres;
	const litreConsumption = miles / milesPerLitre;
	const cost = litreConsumption * costPerLitre / 100;
	return cost.toFixed(2);
}


var http = require('http');

//create a server object:
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	
	res.write(`Total cost: &pound;${calculateFuelCost(q.miles)}`);
	res.end(); //end the response
}).listen(80); //the server object listens on port 8080