package com.mycompany.fizzbuzz;

/**
 *
 * @author DANRLEYPEREIRA
 */

public class Main {
    public static void main(String[] args) {
        // Chama o método run para imprimir os resultados de 1 a 100
        for (int i = 1; i <= 100; i++) {
            System.out.println(FizzBuzz.run(i)); // Imprime o resultado de cada número
        }
    }
}
