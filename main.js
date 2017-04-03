var request = require('request');
var five = require("johnny-five");

var board = new five.Board();
var url =
'sua_url';

board.on("ready", 
	function() {
	  
	  // Create an Sensor on pin "A0"
	  var ldr = new five.Sensor({
	  	// The Number or String address of the pin the sensor is attached
	  	pin: "A0",
	  	// Milliseconds. The frequency in ms of data events.
	  	freq: 250,
	  	// The change threshold (+/- value)
	  	threshold: 300
	  });

	  ldr.on("data", function(){
	  	console.log("value: "+ldr.value);
	  });

	  ldr.on("change", function(){
	  	// console.log("id: " + ldr.id);
	  	googleSubmit(ldr.value, 'ldr1');

	});

});

function googleSubmit(val_numero, val_nome){
	request.post(url,
		{
			form:
				{
					numero: val_numero,
					nome: val_nome
				}
		},
		function(error, response, body) 
		{
		    if (!error && response.statusCode == 200) {
		    		console.log(response.statusCode); 
				}
			else console.log(response.statusCode);
		});
}
