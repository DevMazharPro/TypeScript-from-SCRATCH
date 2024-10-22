const random = () => {
  return Math.floor(Math.random() * (100000 - 9999) + 9000);
};

let fixed = random();

console.log(`Your pin number is: ${fixed}`);
export {};
