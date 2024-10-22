// Convert all names to upper case through map function
var smallCase = ["Mazhar, Bukhari, Halepoto, Fahad"];
console.log("This array is in small case: ", smallCase); // ['mazhar, bukhari, halepoto, fahad']
var bigCase = smallCase.map(function (newNames) { return newNames.toUpperCase(); });
console.log("This array is in big case: ", bigCase);
// Double the array using map function
var numbs = [1, 2, 3, 4, 5];
console.log("This array is single/real: ", numbs);
var doubledArray = numbs.map(function (newNum) { return newNum * 2; });
console.log("This array is doubled: ", doubledArray);
// First create a new array containing names, then make a new array containing
// the only names that has length more than 10 using the filter function
var names = [
    "Mazhar",
    "Bukhari",
    "Halepoto",
    "Fahad",
    "Rafiq",
    "Mehmmood Ali",
    "Nasir",
    "Umar",
    "Zainab",
    "Ashfaq",
];
console.log("The normal array is: ", names);
var lNames = names.filter(function (newNames) { return newNames.length > 10; });
console.log("The array with names more than 10 characters is: ", lNames);
// Filter names starting with A letter
var filterA = names.filter(function (filtered) { return filtered.startsWith('A'); });
console.log("The array with names starting with 'A' is: ", filterA);
