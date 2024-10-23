enum Roles {
    admin = "admin",
    user = 'user',
};

type Data = {
    name: string;
    age: number;
    role: Roles;
};

const user1 : Data = {
    name: "John Doe",
    age: 30,
    role: Roles.admin,
};

const user2 : Data = {
    name: "Jane Doe",
    age: 25,
    role: Roles.user,
};

const admin = (user: Data) => {
    const {name, role} = user;
    if (user.role === Roles.admin) {
        console.log(`Hello, ${name}! You are an admin. You can edit this website.`);
    } else {
        console.log(`Hello, ${name}! You are a regular user.`);
    } 
};

console.log(admin(user1));
