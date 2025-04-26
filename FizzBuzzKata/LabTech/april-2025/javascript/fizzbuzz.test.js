const FizzBuzz = require('./fizzbuzz'); // Importa a classe FizzBuzz

describe('FizzBuzz Tests', () => {

    // Testes parametrizados para diferentes entradas (números simples)
    test.each([
        [1, '1'],
        [2, '2'],
        [7, '7'],
        [11, '11']
    ])('FizzBuzz.findStringToPrint(%i) returns %s', (input, expected) => {
        expect(FizzBuzz.findStringToPrint(input)).toBe(expected);
    });

    // Teste parametrizado para múltiplos de 3 (Fizz)
    test.each([
        [3, 'Fizz'],
        [6, 'Fizz'],
        [9, 'Fizz'],
        [12, 'Fizz'],
        [18, 'Fizz']
    ])('FizzBuzz.findStringToPrint(%i) returns "Fizz"', (input, expected) => {
        expect(FizzBuzz.findStringToPrint(input)).toBe(expected);
    });

    // Teste parametrizado para múltiplos de 5 (Buzz)
    test.each([
        [5, 'Buzz'],
        [10, 'Buzz'],
        [20, 'Buzz'],
        [25, 'Buzz'],
        [50, 'Buzz']
    ])('FizzBuzz.findStringToPrint(%i) returns "Buzz"', (input, expected) => {
        expect(FizzBuzz.findStringToPrint(input)).toBe(expected);
    });

    // Teste parametrizado para múltiplos de 3 e 5 (FizzBuzz)
    test.each([
        [15, 'FizzBuzz'],
        [30, 'FizzBuzz'],
        [45, 'FizzBuzz'],
        [60, 'FizzBuzz'],
        [75, 'FizzBuzz']
    ])('FizzBuzz.findStringToPrint(%i) returns "FizzBuzz"', (input, expected) => {
        expect(FizzBuzz.findStringToPrint(input)).toBe(expected);
    });
});

