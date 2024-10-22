// Convert all names to upper case through map function

const smallCase: string[] = ["Mazhar, Bukhari, Halepoto, Fahad"];

console.log("This array is in small case: ", smallCase); // ['mazhar, bukhari, halepoto, fahad']

const bigCase = smallCase.map((newNames: string) => newNames.toUpperCase());
console.log("This array is in big case: ", bigCase);

// Double the array using map function

const numbs: number[] = [1, 2, 3, 4, 5];

console.log("This array is single/real: ", numbs);

const doubledArray = numbs.map((newNum: number) => newNum * 2);
console.log("This array is doubled: ", doubledArray);

// First create a new array containing names, then make a new array containing
// the only names that has length more than 10 using the filter function

const names: string[] = [
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

const lNames: string[] = names.filter(
  (newNames: string) => newNames.length > 10
);

console.log("The array with names more than 10 characters is: ", lNames);

// Filter names starting with A letter
const filterA : string[] = names.filter((filtered: string) => filtered.startsWith('A'))

console.log("The array with names starting with 'A' is: ", filterA);