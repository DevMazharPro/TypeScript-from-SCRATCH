var maxValue = function (values) {
    var max = values[0];
    for (var i = 1; i < values.length; i++)
        if (values[i] > max) {
            max = values[i];
        }
    ;
    return max;
};
console.log(maxValue([5, 10, 1, 1000, 3, 8, 2]));
