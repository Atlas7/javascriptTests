
// Create a new school object with 3 own properties: schoolName, schoolAccredited, and schoolLocation.​
var school = {
	schoolName:"MIT",
	schoolAccredited: true,
	schoolLocation:"Massachusetts",
	sayHello: function() {
		console.log("Hi I am " + this.schoolName + " :)")
	}
};

//Use of the for/in loop to access the properties in the school object​

for (var eachItem in school) {
	console.log(eachItem); // Prints schoolName, schoolAccredited, schoolLocation​
}
/*
for (var eachItem in school) {
	console.log(eachItem + " (" + typeof eachItem + ")"); // Prints schoolName, schoolAccredited, schoolLocation​
}
*/