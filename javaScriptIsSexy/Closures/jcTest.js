
// Example 1
var i = 1;
console.log( function (j) {return j+100} (i) ) ;
// return 101

// Example 2
function testIt(j) {return j + 100};
var i = 1;
console.log( testIt(i) );
// also return 101

