let newF = (name: string): string => {
  return "Hi " + name;
};

let result = newF("Naeem");
console.log(result);
// Function to calculate average
const avg = (nums: number[]): number => {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum / nums.length;
};

console.log(avg([4, 2, 3, 4, 5]));

export {};
