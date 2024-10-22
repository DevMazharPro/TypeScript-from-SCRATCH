// Square the array through map 
var nums = [3, 4, 5, 6, 7, 8, 9];
var squareData = nums.map(function (curValue) {
    return curValue * curValue;
});
console.log("first array is ".concat(nums));
console.log("doubled array is ".concat(squareData));
// Number to string
var numToString = nums.map(function (curEle) { return curEle.toString(); });
console.log("first array is ".concat(nums));
console.log(numToString);

export{}
