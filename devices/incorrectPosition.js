//Load the request module
var request = require('request');



console.log('started');
setInterval(function(){
	console.log("sending data...");
	var deviceData = {
	  id: '1337ff',
	  pressureBackbone: [],
	  pressureSeat:[],
	  pressureLeftArmrest:[],
	  pressureRightArmrest:[]
	};

	var backboneMin = 5;
	var seatMin = 4;
	var armrestMin = 1;
	for (var i = 0; i < backboneMin; i++){
		var randomNumber = Math.ceil(Math.random() * 100);
		deviceData.pressureBackbone[i] = {
			"value" : randomNumber
		};
	}
	for (var i = 0; i < seatMin; i++){
		var randomNumber = Math.ceil(Math.random() * 100);
		deviceData.pressureSeat[i] = {
			"value" : randomNumber
		};
	}
	for (var i = 0; i < armrestMin; i++){
		var randomNumber = Math.ceil(Math.random() * 100);
		deviceData.pressureLeftArmrest[i] = {
			"value" : randomNumber
		};
	}
	for (var i = 0; i < armrestMin; i++){
		var randomNumber = Math.ceil(Math.random() * 100);
		deviceData.pressureRightArmrest[i] = {
			"value" : randomNumber
		};
	}

	console.log(deviceData);
	//Lets configure and request
	
	request({
	    url: 'https://orsys.herokuapp.com/api/dataReceivers', //URL to hit
	    method: 'POST',
	    //Lets post the following key/values as form
	    json: deviceData
	}, function(error, response, body){
	    if(error) {
	        console.log(error);
	    } else {
	        console.log(response.statusCode, body);
		}
	});

}, 60 * 60);
