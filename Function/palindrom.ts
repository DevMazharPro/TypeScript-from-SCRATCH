const isPalindrome = (pln):boolean => {
    let palin = pln.split("").reverse().join("");
    return palin === pln
};

let result = isPalindrome("madam");

console.log(result);