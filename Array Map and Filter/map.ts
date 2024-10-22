// Square the array through map 

let nums: number[] = [3, 4 , 5, 6, 7, 8, 9];

const squareData: number[] = nums.map((curValue: number) => {
    return curValue *  curValue;
});

console.log(`first array is ${nums}`);

console.log(`doubled array is ${squareData}`);

// Number to string

const numToString: string[] = nums.map((curEle) => curEle.toString());

console.log(`first array is ${nums}`);
console.log(numToString);