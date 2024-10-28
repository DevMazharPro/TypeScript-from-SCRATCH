class User {
    name: string;
    age: number;
    email: string;
    constructor (email: string, name: string, age: number) {
        this.email = email;
        this.name = name;
        this.age = age;
    }
}


const newUser =  new User('h@hgmail.com', 'Mazhar', 13); 

console.log(newUser.name); // Output: Mazhar
console.log(newUser.email); // Output: h@hgmail.com
console.log(newUser.age); // Output: User { email: 'h@hgmail.com', name: 'Mazhar', age: 13 }