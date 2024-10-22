var isPalindrome = function (pln) {
    var palin = pln.split("").reverse().join("");
    return palin === pln;
};
var result = isPalindrome("madam");
console.log(result);
