var product = {
    name: "Widget",
    price: 19.99,
    quantity: 50,
};
// Function to calculate the total cost of a product
var calculateCost = function (product) {
    return product.name, "total cost: ", product.price * product.quantity;
};
console.log(calculateCost(product));
