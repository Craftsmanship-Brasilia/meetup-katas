const FizzBuzz = require('./fizzbuzz'); // Importa a classe FizzBuzz

// Verifica se o script foi chamado diretamente
if (require.main === module) {
    FizzBuzz.run();  // Chama o método run da classe FizzBuzz
}
