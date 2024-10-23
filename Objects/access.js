var student = {
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
console.log("Name: ".concat(student.name)); // Output Only Name
student.name = "Jane Doe"; // TO Change Name
console.log("Name: ".concat(student.name)); // Output Updated Name
console.log("Age: ".concat(student.age)); // Output Only Age
console.log(student.address.city); // Output is city from nested object
