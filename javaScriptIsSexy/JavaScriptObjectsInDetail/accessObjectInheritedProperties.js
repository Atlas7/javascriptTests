
// Create a new HigherLearning function that the school object will inherit from.​
// SIDE NOTE: As Wilson (an astute reader) correctly pointed out in the comments below, the educationLevel property is not actually inherited by objects that use the HigherLearning constructor; instead, the educationLevel property is created as a new property on each object that uses the HigherLearning constructor. The reason the property is not inherited is because we use of the "this" keyword to define the property.


function HigherLearning () {
	this.educationLevel = "University";
}

// Implement inheritance with the HigherLearning constructor​
var school = new HigherLearning ();
school.schoolName = "MIT";
school.schoolAccredited = true;
school.schoolLocation = "Massachusetts";

//Use of the for/in loop to access the properties in the school object​
for (var eachItem in school) {
	console.log(eachItem); 
	// Prints educationLevel, schoolName, schoolAccredited, and schoolLocation​
}