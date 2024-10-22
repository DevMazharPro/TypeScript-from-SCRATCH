// Here we have given default parameters in the function below which values should be given not ignored. if this are ignored then we will get error

const greet = (name: string, id: number) => {
    console.log(`Hello, ${name}! Your ID is ${id}.`);
};

greet("John Doe", 123);

const greet2 = (name: string, id: number) => {
    console.log(`Hello, ${name}! Your ID is ${id}.`);
};

greet2("John Doe");
// This gives an Error