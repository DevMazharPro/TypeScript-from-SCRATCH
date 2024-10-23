var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["user"] = "user";
})(Roles || (Roles = {}));
;
var user1 = {
    name: "John Doe",
    age: 30,
    role: Roles.admin,
};
var user2 = {
    name: "Jane Doe",
    age: 25,
    role: Roles.user,
};
var admin = function (user) {
    var name = user.name, role = user.role;
    if (user.role === Roles.admin) {
        console.log("Hello, ".concat(name, "! You are an admin. You can edit this website."));
    }
    else {
        console.log("Hello, ".concat(name, "! You are a regular user."));
    }
};
console.log(admin(user2));
