function sumWithSpreadAndDestructuring(...args) {
    return sum(args);
}

function sum(numberList) {
    let result = 0;
    for (const value of numberList) {
        result += value;
    }
    return result;
}

console.log(sumWithSpreadAndDestructuring(10, 5, -13, Math.PI)); // prints 5.141592653589793

console.log(sumWithSpreadAndDestructuring(...[10, 5, -13, Math.PI])); // prints 5.141592653589793

console.log(sum([10, 5, -13, Math.PI])); // prints 5.141592653589793