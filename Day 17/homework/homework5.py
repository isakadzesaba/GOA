def square_number(num_list):
    return [num ** 2 for num in num_list]

num_list = [int(i) for i in input("Please enter numbers: ").split()]
square = square_number(num_list)
print(square)