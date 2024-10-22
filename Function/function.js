"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(number) {
    return number + 2;
}
var result = addTwo(Math.floor(Math.random() * (100 - 1) + 1));
console.log(result);
// function TO UPPER CASE
function toUpper(name) {
    return name.toUpperCase();
}
var result2 = toUpper("Zulaikhail");
console.log(result2);
// Strick
function loginUser(name, email, isPaid) {
    return "hello, " + name;
}
;
var user = loginUser("mazhar", "mazhar@gmail.com", true);
console.log(user);
// How to provide 2 values
function getFullName(firstName, lastName, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return firstName + " " + lastName;
}
var fullName = getFullName("John", "Doe");
console.log(fullName);
//  Better way to write 
function greetings(firstName, lastName) {
    return "Hello, ".concat(firstName, " ").concat(lastName, "!, How are you?");
    // return 2; this won't work here because the function is defined as string
}
var person = greetings("Anwaar", "Hussain");
console.log(person);
