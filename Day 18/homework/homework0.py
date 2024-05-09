def filter_multiples_of_4(numbers):
    return [i for i in numbers if i % 4 == 0]

numbers_list = list(range(1, 21))
filtered_list = filter_multiples_of_4(numbers_list)
print(filtered_list)