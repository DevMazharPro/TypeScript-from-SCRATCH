// Adding value to array using push

const add1: number[] = [1, 2, 3, 4];
let newadd = add1.push(5);
console.log(newadd); // this adds value to array the end point

// Adding values to array from starting point using unshift

const add2: number[] = [];
let newadd2 = add2.unshift(5, 4, 3, 2, 1);
console.log(newadd2); // this adds value to array the start point


// Removing value from end point in array using pop

const remove1: number[] = [1, 2, 3, 4, 5];
let newrmv = remove1.pop();
console.log(newrmv); // this removes value from array the end point

// Removing value from array from start point in array using shift

const remove2: number[] = [1, 2, 3, 4, 5];
let newrmv2 = remove2.shift();
console.log(newrmv2); // this removes value from array the start point
