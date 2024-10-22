const array1: number[] = [1, 4, 5, 2, 5, 3];
for (let i = 0; i < array1.length; i++) {
  console.log(i);
}
// show the values of arrays individually
for (const arr of array1) {
  console.log(arr);
}

// iterate over array using forEach method

array1.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});

