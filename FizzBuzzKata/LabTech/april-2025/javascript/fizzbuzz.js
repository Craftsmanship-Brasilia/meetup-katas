class FizzBuzz {
    static run() {
        for (let numberToFind = 1; numberToFind <= 100; numberToFind++) {
            console.log(FizzBuzz.findStringToPrint(numberToFind));
        }
    }

    static findStringToPrint(number) {
        if (number % 5 === 0 && number % 3 === 0) {
            return "FizzBuzz";
        }
        if (number % 5 === 0) {
            return "Buzz";
        }
        if (number % 3 === 0) {
            return "Fizz";
        }
        return `${number}`;
    }
}

module.exports = FizzBuzz;

