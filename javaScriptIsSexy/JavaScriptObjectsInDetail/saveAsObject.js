// save-as-reference for object. i.e. multiple labels pointing to the same object

var person = {name: "Kobe"};
var anotherPerson = person;
person.name = "Bryant";

console.log(person.name); // Bryant
console.log(anotherPerson.name); // Bryant​  (not "Kobe" anymore)
