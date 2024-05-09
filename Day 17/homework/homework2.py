def user_input():
    user_input = input("Please enter numbers: ")
    return [int(i) for i in user_input.split()]

def get_even_numbers(numbers):
    even_numbers = [i for i in numbers if i % 2 == 0]
    return even_numbers

numbers = user_input()
even_numbers = get_even_numbers(numbers)
print("Even numbers: ", even_numbers)