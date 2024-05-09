'''
def my_range(start, end, step):
    numbers = []

    while start < end:
        numbers.append(start)
        start = start + step
    
    return numbers

print(my_range(0,10 + 1,2))



def extract_multiples(numbers):
    multiples = []
    for num in numbers:
        if num % 1 == 0 and num % 2 == 0 and num % 3 == 0 and num % 4 == 0:
            multiples.append(num)
    return multiples

numbers_list = list(range(10, 51))

result = extract_multiples(numbers_list)

print("Multiples of the first four numbers from the list:")
print(result)

'''


def custom_range(start, stop,):
    result = []
    current = start
    while current < stop:
        result.append(current) 
    return result

start_val = int(input("Enter the start value: "))
end_val = int(input("Enter the end value: "))
sequence = custom_range(start_val, end_val)
print("Generated sequence:", sequence)