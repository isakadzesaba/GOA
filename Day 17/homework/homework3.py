def largest_number(numbers):
    largest_number = max(numbers)
    return largest_number

numbers = [int(i) for i in input("Please enter numbers: ").split()]
print("The largest number is:", largest_number(numbers))