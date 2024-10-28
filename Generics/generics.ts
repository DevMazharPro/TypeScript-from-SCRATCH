// Generics allows you to create the resuable components or functions that can work with multiple data types.

function anyType<B> (value: B):B { 
    // Here at the place of B you can rite anything, because this just work like placeholder
    return value;
};
// No here we can use this at anywhere 

console.log(anyType<number>(5)); // Output: 5
console.log(anyType<string>("Hello World")); // Output: Hello World
console.log(anyType<boolean>(true)); // Output: true


export{}