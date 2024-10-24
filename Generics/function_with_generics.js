function add(a, b) {
    return a + b;
}
console.log(add(10, 20)); // Output: 30
console.log(add("Hello", " World")); // Output: Hello World
// but what if we have two different values?
console.log(add("10", 20)); // This gives error
// so to handle this error we give mutliple values to generics
function add2(a, b) {
    return a + b;
}
;
console.log(add2(10, "20")); // Now this run 
