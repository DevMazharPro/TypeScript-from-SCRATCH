var User = /** @class */ (function () {
    function User(email, name, age) {
        this.email = email;
        this.name = name;
        this.age = age;
    }
    return User;
}());
var newUser = new User('h@hgmail.com', 'Mazhar', 13);
console.log(newUser.name); // Output: Mazhar
console.log(newUser.email); // Output: h@hgmail.com
console.log(newUser.age); // Output: User { email: 'h@hgmail.com', name: 'Mazhar', age: 13 }
