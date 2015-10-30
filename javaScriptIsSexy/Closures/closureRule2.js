
function celebrityID () {
	var celebrityID = 999;
	// We are returning an object with some inner functions​
	// All the inner functions have access to the outer function's variables​
	return {
		getID: function ()  {
			// This inner function will return the UPDATED celebrityID variable​
			// It will return the current value of celebrityID, 
			// even after the changeTheID function changes it​
			return celebrityID;
		},

		setID: function (theNewID)  {
			// This inner function will change the outer function's variable anytime​
			celebrityID = theNewID;
		}
	}
}

var mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned.​
console.log(mjID.getID()); // 999​
console.log(mjID.setID(567)); // Changes the outer function's variable​
console.log(mjID.getID()); // 567: It returns the updated celebrityId variable


var mjID2 = celebrityID();
console.log(mjID2.getID());