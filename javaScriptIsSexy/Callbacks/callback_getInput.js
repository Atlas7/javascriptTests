// global variable​
var allUserData = [];

// generic logStuff function that prints to console​
function logStuff (userData) {
	if (typeof userData === "string") {
		console.log("***String***");
		console.log(userData);
	} else if (typeof userData === "object") {
		console.log("***Object***");
		for (var item in userData) {
			console.log(item + ": " + userData[item]);
		}
	}
}

// A function that takes two parameters, the last one a callback function​
function getInput (options, callback) {
	allUserData.push (options);
	callback (options);
}

// When we call the getInput function, we pass logStuff as a parameter.​
// So logStuff will be the function that will called back (or executed) inside the getInput function​
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
getInput ("Hello World", logStuff);
getInput (42, logStuff);
//  name: Rich​
// speciality: JavaScript
