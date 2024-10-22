// In optional parameters we have parameter with ? symbol, which declares that this is optional either you can give or not no issue 
var hii = function (name, id) {
    console.log("Hello, ".concat(name, "! Your ID is ").concat(id || 'No ID provided'));
};
hii('John'); // Hello, John! Your ID is No ID provided
hii('John', 123); // Hello, John! Your ID is 123
