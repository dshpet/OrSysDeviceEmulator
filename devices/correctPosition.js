//Load the request module
var request = require('request');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
		var randomNumber = 0;
		switch (i) {
			case 0 : {
				randomNumber = getRandomInt(10, 30);
				break;
			}
			case 1 : {
				randomNumber = getRandomInt(50, 70);
				break;
			}
			case 2 : {
				randomNumber = getRandomInt(50, 70);
				break;
			}
			case 3 : {
				randomNumber = getRandomInt(10, 30);
				break;
			}
			case 4 : {
				randomNumber = getRandomInt(30, 50);
			}
		}		
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
