const student : { 
    name: string,
    age: number,
    address: {
        street: string,
        city: string,
        state: string,
        zip: string
    }
} = {
    name: "John Doe",
    age: 18,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    }
};
// ACCESSING THE DATA FROM THE OBJECT
console.log(`Name: ${student.name}`); // Output Only Name

student.name = "Jane Doe"; // TO Change Name

console.log(`Name: ${student.name}`); // Output Updated Name

console.log(`Age: ${student.age}`); // Output Only Age

console.log(student.address.city); // Output is city from nested object
