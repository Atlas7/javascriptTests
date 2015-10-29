
// Create a new school object with a property name schoolName​
var school = {schoolName:"MIT"};

// Prints true because schoolName is an own property on the school object
console.log("schoolName" in school);  // true​

// Prints false because we did not define a schoolType property on the school object, and neither did the object inherit a schoolType property from its prototype object Object.prototype.​
console.log("schoolType" in school);  // false​

// Prints true because the school object inherited the toString method from Object.prototype. ​
console.log("toString" in school);  // true