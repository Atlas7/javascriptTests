
// Create a new school object with a property name schoolName​
var school = {schoolName:"MIT"};

// Prints true because schoolName is an own property on the school object
console.log(school.hasOwnProperty ("schoolName"));  // true​

// Prints false because the school object inherited the toString method from Object.prototype, therefore toString is not an own property of the school object.​
console.log(school.hasOwnProperty ("toString"));  // false 