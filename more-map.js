const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n / 2);
const third = numbers.map(x => x / 3);

// console.log(half);
// console.log(third);


const friends = ['Tom Hanks', 'Tom Cruise','Tom Brady', 'Tom Solaiman'];
const firstLetters = friends.map(firend => firend[0]);
// console.log(firstLetters);

const nameLength = friends.map(firend => firend.length);
// console.log(nameLength);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 45000},
    {id: 4, name: 'tablet', price: 23000}
]

// const productName = products.map(product => console.log(product.name))
const items = products.map(product => product.name);
const prices = products.map(p => p.price);
console.log(prices);
console.log(items);
