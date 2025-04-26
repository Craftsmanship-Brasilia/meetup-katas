from pytest import fixture
import pytest

from .fizz_buzz import FizzBuzz

@pytest.mark.parametrize("input_number, expected_output", [
    (1, '1'),
    (2, '2'),
    (7, '7'),
    (11, '11')
])
def test_print_number(input_number: int, expected_output: str):
    assert FizzBuzz.find_string_to_print(input_number) == expected_output

@pytest.mark.parametrize("input_number", [
    (3),
    (6),
    (12),
    (18)
])
def test_print_Fizz(input_number: int):
    assert FizzBuzz.find_string_to_print(input_number) == "Fizz"

@pytest.mark.parametrize("input_number", [
    (5),
    (10),
    (20),
    (25)
])
def test_print_Buzz(input_number):
    assert FizzBuzz.find_string_to_print(input_number) == "Buzz"

@pytest.mark.parametrize("input_number", [
    (15),
    (30),
    (45),
    (60)
])
def test_print_FizzBuzz(input_number):
    assert FizzBuzz.find_string_to_print(input_number) == "FizzBuzz"