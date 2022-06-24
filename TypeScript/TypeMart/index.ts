//must use tsc in bash to compile, and use node index.js to run the actual JS file

import products from './products';

let productName: string = `fanny pack`
const product = products.filter(p => p.name === productName)[0];
let boolValue = (product.preOrder == "true");
let shipping: number
let taxPercent: number
let taxTotal: number
let total: number
let shippingAddress: string = "jake"

if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
} else {
    taxPercent = 0.05
}

if (Number(product.price) < 25) {
    shipping = 5;
} else {
    shipping = 0;
    console.log(`The ${product.name} has free shipping`)
}

if (boolValue == true) {
    console.log(`We will let you know when ${product.name} is on it's way`)
}

taxTotal = Number(product.price) * taxPercent;
total = taxTotal + shipping + Number(product.price);

console.log(`Name: ${product.name}, Address: ${shippingAddress}, Price: ${product.price}, Tax: ${taxTotal}, Shipping: ${shipping}, Total: ${total}`)