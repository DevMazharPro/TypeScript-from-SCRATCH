var newF = function (name) {
    return "Hi " + name;
};
var result = newF("Naeem");
console.log(result);
var avg = function (nums) {
    var sum = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        sum += num;
    }
    return sum / nums.length;
};
console.log(avg([4, 2, 3, 4, 5]));
