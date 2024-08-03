def filter_strings_starting_with_a(strings):
    return [i for i in strings if i.startswith('a')]

strings = [int(i) for i in input("Please enter words: "). split()]
filtered_strings = filter_strings_starting_with_a(strings)
print(filtered_strings)