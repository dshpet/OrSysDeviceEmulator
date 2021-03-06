//Load the request module
var request = require('request');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('started');
setInterval(function(){
	console.log("sending data...");
	//mawa 111452271034795776223
	//me 111453140201070550060
	var deviceData = {
	  googleId: '111452271034795776223',
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

	var seatBottomEqualPressure = 0;
	var seatTopEqualPressure = 0;
	for (var i = 0; i < seatMin; i++){
		var randomNumber = 0;
		switch(i){
			case 0 : {
				randomNumber = getRandomInt(70, 100);
				seatBottomEqualPressure = randomNumber;
				break;
			}
			case 1 : {
				//randomNumber = getRandomInt(70, 100);
				randomNumber = seatBottomEqualPressure;
				break;
			}
			case 2 : {
				randomNumber = getRandomInt(50, 70);
				seatTopEqualPressure = randomNumber;
				break;
			}
			case 3 : {
				//randomNumber = getRandomInt(50, 70);
				randomNumber = seatTopEqualPressure;
				break;
			}
		}
		deviceData.pressureSeat[i] = {
			"value" : randomNumber
		};
	}
	var armrestEqualPressure = getRandomInt(0, 100);
	for (var i = 0; i < armrestMin; i++){
		//var randomNumber = 0;
		deviceData.pressureLeftArmrest[i] = {
			"value" : armrestEqualPressure
		};
	}
	for (var i = 0; i < armrestMin; i++){
		//var randomNumber = Math.ceil(Math.random() * 100);
		deviceData.pressureRightArmrest[i] = {
			"value" : armrestEqualPressure
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
