// Basically this works like this or this. Denoted by | symbol
// This allows you to specify multiple types in a variable 

let value: string | number;

value = "Hello";
value = 10;

// Here's a more complex example

type UnionType = string | number | boolean;

let unionTypeValue: UnionType;

unionTypeValue = "Hello";

unionTypeValue = 10;

unionTypeValue = true;

// Here's an example of a union type with a function
// This function returns 2 possible values if vlaue is string then it converts string first letter as capital letter, and if value is number then it doubles it.
const unionType = (data: string | number) => {
    if (typeof data === "number") {
        return data * 2;
    } else if (typeof data === "string") { 
        return data.charAt(0).toUpperCase() + data.slice(1);
     } else {
        throw new Error("Invalid data type");
     }
};
console.log(unionType('hello world'));

console.log(unionType(10));  // This will return 20

