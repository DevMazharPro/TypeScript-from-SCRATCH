// In typescript objects are being used as key-value pairs

const person: {
    name: string,
    age: number,
    email: string,
    number: number,
    country?: string
} = {
    name: "Mazhar",
    age: 23, 
    email: "mazhar@example.com",
    number: 3183656365,
    country: "Pakistan"
};

console.log('here are you details', person);

// Brand Object

const toyota : {
    name: string,
    brand: string,
    model: number,
    condition: string,
    color: string,
    checked: boolean
} = {
    name: "Corolla",
    brand: "Toyota",
    model: 2020,
    condition: "New",
    color: "White",
    checked: false
};

console.log('toyota details', toyota);