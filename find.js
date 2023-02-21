const numbers = [12, 56,87,5, 44,56,78,15];

const fives = numbers.find(num => num % 5 === 0);
console.log(fives);

const products = [
    {id: 1, name: 'laptop', price: 65000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 30000},
    {id: 4, name: 'tablet', price: 23000}
]

const cheap = products.find(product => product.price < 40000);
console.log(cheap);
