function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (a) {
	let total = 0;
	for (let number of a) {
		total += number;
	}
	return total;
}

function multiply (a) {
	let total = 1;
	for (let number of a) {
		total *= number;
	}
	return total;
}

function power(number, exponent) {
	let total = 1;
	for (let i = exponent; i > 0; i--) {
		total *= number;
	}
	return total;
}

function factorial(number) {
	let total = 1;
	for (let i = 1; i <= number; i++) {
		total *= i;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}