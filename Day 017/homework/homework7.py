def sum_more_than_10(numbers):
    total = 0
    for num in numbers:
        if num > 10:
            total += num
    return total

user_input = input("Please enter a list of numbers: ")
numbers = [int(i) for i in user_input.split()]

result = sum_more_than_10(numbers)

print("The sum of numbers greater than 10 is: ", result)
