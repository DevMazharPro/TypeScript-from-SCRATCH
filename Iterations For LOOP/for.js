var array1 = [1, 4, 5, 2, 5, 3];
for (var i = 0; i < array1.length; i++) {
    console.log(i);
}
;
// show the values of arrays individually
for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
    var arr = array1_1[_i];
    console.log(arr);
}
// iterate over array using forEach method
array1.forEach(function (value, index) {
    console.log("Index: ".concat(index, ", Value: ").concat(value));
});
// iterate over array using map method
