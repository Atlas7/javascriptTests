
// Define callback functions here, like this...
// function myFunction(randomName, randomGender)

// callback
function genericPoemMaker(name, gender) {
	console.log(name + " is finer than fine wine.");
	console.log("Altruistic and noble for the modern time.");
	console.log("Always admirably adorned with the latest style.");
	console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile");
}

// callback
function greetUser(customerName, sex)  {
   var salutation  = sex && sex === "Man" ? "Mr." : "Ms.";
  console.log("Hello, " + salutation + " " + customerName);
}

// Main function that call a callback function...
//The callback, which is the last item in the parameter, will be our genericPoemMaker function we defined above.​
function getUserInput(firstName, lastName, gender, callback) {
	var fullName = firstName + " " + lastName;
	// Make sure the callback is a function
	typeof callback === "function" &&
		// Execute the callback function and pass the parameters to it​
		callback(fullName, gender);
}

// Let's do some tests!

// Pass the greetUser function as a callback to getUserInput​
console.log("***greetUser***");
getUserInput("Bill", "Gates", "Man", greetUser);
console.log("***genericPoemMaker***");
getUserInput("Bill", "Gates", "Man", genericPoemMaker);

// Output:
// Hello, Mr. Bill Gates
// Bill Gates is finer than fine wine.
// Altruistic and noble for the modern time.
// Always admirably adorned with the latest style.
// A Man of unfortunate tragedies who still manages a perpetual smile