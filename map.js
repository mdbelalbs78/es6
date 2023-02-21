const numbers = [2, 8, 4, 6, 3];

function getDouble() {
    const output = [];
    for (const number of numbers) {
        double = doubleId(number);
        output.push(double)
    }
    return output;
}

function doubleOld(num) {
    return num * 2;
}

const doubleId = num => num * 2;

const makeDouble = numbers.map(doubleId);
const makeDoubleDirect = numbers.map(num => num * 2)
const makeDouble2 = numbers.map(x => x * 2)
console.log(makeDoubleDirect);
console.log(makeDouble);

const result = getDouble(numbers);
console.log(result);