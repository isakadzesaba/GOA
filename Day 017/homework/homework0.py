def sum_of_list(numbers):
    sum = 0
    for i in numbers:
        sum += i
    return sum

user_input = input("Please enter a list of numbers separated by spaces: ")

numbers = [int(i) for i in user_input.split()]

result = sum_of_list(numbers)

print("The sum of the numbers is:", result)