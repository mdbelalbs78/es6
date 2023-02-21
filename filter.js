const numbers = [13, 5, 23,14, 45, 11, 18, 9, 55, 61, 1]
const bigNums = numbers.filter(number => number>20);
const tiny = numbers.filter(number => number <20);
const even = numbers.filter(num => num % 2 === 0);
// console.log(even);
// console.log(tiny);
// console.log(bigNums);


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 45000},
    {id: 4, name: 'tablet', price: 23000}
]

const productPrice = products.filter(product => product.price > 40000);
console.log(productPrice);