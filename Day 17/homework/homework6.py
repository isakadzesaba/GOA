def string_lengths(strings):
    return [len(i) for i in strings]

input_strings = input("Please enter words: ").split()
str_lengths = string_lengths(input_strings)
print(str_lengths)