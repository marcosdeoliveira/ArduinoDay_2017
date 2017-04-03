var request = require('request');

var url =
'sua_url';

request.post(
		url, 
		{
			form:
				{
					numero:1234,
					nome: 'um nome'
				}
		},
		function(error, response, body) 
		{
		    if (!error && response.statusCode == 200) {
		    		console.log(response.statusCode); 
				}
			else console.log(response.statusCode);
		});

