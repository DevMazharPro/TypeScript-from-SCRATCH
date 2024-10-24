function add<T>(a: T ,b : T): T {
    return a + b;
}

console.log(add<number>(10, 20)); // Output: 30

console.log(add<string>("Hello", " World")); // Output: Hello World

// but what if we have two different values?

console.log(add<number>("10", 20)); // This gives error

// so to handle this error we give mutliple values to generics

function add2<T, U>(a: T, b: U): T | U {
    return a + b;
};

console.log(add2<number, string>(10, "20")); // Now this run 
