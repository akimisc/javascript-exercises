function fibonacci(targetPosition) {
    let firstishNumber = 0;
    let lastishNumber = 1;

    if (targetPosition < 0) {
        return "OOPS";
    }

    for (let position = 1; position < targetPosition; position++) {
        let nextNumber = firstishNumber + lastishNumber;
        firstishNumber = lastishNumber;
        lastishNumber = nextNumber;
    }
    return lastishNumber;

}

module.exports = fibonacci
