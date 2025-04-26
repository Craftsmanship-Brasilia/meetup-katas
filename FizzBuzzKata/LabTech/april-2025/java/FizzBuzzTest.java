import com.mycompany.fizzbuzz.FizzBuzz;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

public class FizzBuzzTest {

    // Teste parametrizado para diferentes entradas de números simples
    @ParameterizedTest
    @CsvSource({
        "1, 1",
        "2, 2",
        "7, 7",
        "11, 11"
    })
    public void testPrintNumber(int input, String expected) {
        assertEquals(expected, FizzBuzz.run(input));
    }

    // Teste parametrizado para múltiplos de 3 (Fizz)
    @ParameterizedTest
    @CsvSource({
        "3, Fizz",
        "6, Fizz",
        "9, Fizz",
        "12, Fizz",
        "18, Fizz"
    })
    public void testPrintFizz(int input, String expected) {
        assertEquals(expected, FizzBuzz.run(input));
    }

    // Teste parametrizado para múltiplos de 5 (Buzz)
    @ParameterizedTest
    @CsvSource({
        "5, Buzz",
        "10, Buzz",
        "20, Buzz",
        "25, Buzz",
        "50, Buzz"
    })
    public void testPrintBuzz(int input, String expected) {
        assertEquals(expected, FizzBuzz.run(input));
    }

    // Teste parametrizado para múltiplos de 3 e 5 (FizzBuzz)
    @ParameterizedTest
    @CsvSource({
        "15, FizzBuzz",
        "30, FizzBuzz",
        "45, FizzBuzz",
        "60, FizzBuzz",
        "75, FizzBuzz"
    })
    public void testPrintFizzBuzz(int input, String expected) {
        assertEquals(expected, FizzBuzz.run(input));
    }
}
