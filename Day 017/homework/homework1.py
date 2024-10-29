def filter_strings(user_input):
    return [string for string in user_input if len(string) >= 5]

def user_input():
    input_string = input("Please enter a list of strings: ")
    input_list = input_string.split()
    return input_list

user_input_list = user_input()
filtered_list = filter_strings(user_input_list)
print("Strings with length greater than 5: ", filtered_list)