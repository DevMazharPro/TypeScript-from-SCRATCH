var random = function () {
    return Math.floor(Math.random() * (100000 - 9999) + 9000);
};
var fixed = random();
console.log("Your pin number is: ".concat(fixed));
