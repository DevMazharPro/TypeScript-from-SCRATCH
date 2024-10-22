// Even numbers through filter

let num1: number[] = [23, 1, 2, 3, 4, 6, 7, 10, 12];

const n1: number[] = num1.filter((evenn) => evenn % 2 === 0)

console.log(`This ${num1} is whole version of array, and these ${n1} are even in this`);

// Filter the numbers which are greater than 3
const biggerNumbers: number[] = num1.filter((bigs:number) => bigs >= 3)
console.log("These are equal to or greater than 3.",biggerNumbers);

export{}