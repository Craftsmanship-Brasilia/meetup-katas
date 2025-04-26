class FizzBuzz:

    @staticmethod
    def run() -> None:
        for number_to_find in range(1, 101):
            print(FizzBuzz.find_string_to_print(number_to_find))


    @staticmethod
    def find_string_to_print(number: int) -> str:
        if number % 5 == 0 and number % 3 == 0:
            return "FizzBuzz"
        if number % 5 == 0:
            return "Buzz"
        if number % 3 == 0:
            return "Fizz"
        return f"{number}"
        