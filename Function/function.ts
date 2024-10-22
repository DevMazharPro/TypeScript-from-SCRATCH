function addTwo(number: number) { 
    return number + 2;
}

const result = addTwo(Math.floor(Math.random()* (100 - 1) + 1));

console.log(result);

// function TO UPPER CASE

function toUpper(name: string) {
    return name.toUpperCase();
}

let result2 = toUpper("Zulaikhail");

console.log(result2);

// Strick

function loginUser(name: string, email: string, isPaid: boolean) {
    return "hello, " + name;
};

let user = loginUser("mazhar", "mazhar@gmail.com", true);
console.log(user);

// How to provide 2 values

function getFullName(firstName: string, lastName: string, isPaid: boolean = false) {
    return firstName + " " + lastName;
}

let fullName = getFullName("John", "Doe");

console.log(fullName);

//  Better way to write 
function greetings(firstName: string, lastName: string): string {
    return `Hello, ${firstName} ${lastName}!, How are you?`;
    // return 2; this won't work here because the function is defined as string
}

let person = greetings("Anwaar", "Hussain");

console.log(person);

export{}