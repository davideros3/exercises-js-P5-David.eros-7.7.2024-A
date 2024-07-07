function printNumbers(n) {
    const numbers = [];
    console.log(numbers);
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }
    console.log(numbers);
    console.log(numbers.join(' '));
    return numbers.join(' ');
}



export default printNumbers
