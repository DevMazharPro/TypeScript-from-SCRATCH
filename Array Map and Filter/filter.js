"use strict";
// Even numbers through filter
Object.defineProperty(exports, "__esModule", { value: true });
var num1 = [23, 1, 2, 3, 4, 6, 7, 10, 12];
var n1 = num1.filter(function (evenn) { return evenn % 2 === 0; });
console.log("This ".concat(num1, " is whole version of array, and these ").concat(n1, " are even in this"));
// Filter the numbers which are greater than 3
var biggerNumbers = num1.filter(function (bigs) { return bigs >= 3; });
console.log("These are equal to or greater than 3.", biggerNumbers);
