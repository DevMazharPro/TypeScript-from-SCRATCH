const maxValue = (values: number[]): number => {
    let max = values[0];
    for (let i= 1; i < values.length; i++)
        if (values[i]> max) {
            max = values[i];
        };
    return max;
};

console.log(maxValue([5, 10, 1, 1000, 3, 8, 2])); 