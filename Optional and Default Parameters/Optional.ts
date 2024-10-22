// In optional parameters we have parameter with ? symbol, which declares that this is optional either you can give or not no issue 
const hii = (name: string, id?:number) => {
    console.log(`Hello, ${name}! Your ID is ${id || 'Not provided'}`);
};

hii('John'); // Hello, John! Your ID is No ID provided

hii('John', 123); // Hello, John! Your ID is 123