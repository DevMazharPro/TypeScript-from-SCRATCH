// this is same like array but the only difference is fixed declaration 

// define a tuple type
    type User = readonly [string, number, boolean];

// create a user object using tuple type
    const user: User = ['Mazhar', 30, true];

// we cannot change the values as they are fixed
const user2 : User = [true, 31, 'Naheeem'];

// but here we can change the tupple values
user.push("Halepoto");

console.log(user);
// to prevent this we use readonly property