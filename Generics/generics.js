// Generics allows you to create the resuable components or functions that can work with multiple data types.
function anyType(value) {
    return value;
}
;
// No here we can use this at anywhere 
console.log(anyType(5)); // Output: 5
console.log(anyType("Hello World")); // Output: Hello World
console.log(anyType(true)); // Output: true
