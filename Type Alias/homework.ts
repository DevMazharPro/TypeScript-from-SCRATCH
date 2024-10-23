type Product = {
    name: string;
    price: number;
    quantity: number;
};

const product : Product = {
    name: "Widget",
    price: 19.99,
    quantity: 50,
};

// Function to calculate the total cost of a product
let calculateCost = (product: Product) => {
    return product.name, "total cost: ", product.price * product.quantity
}

console.log(calculateCost(product));