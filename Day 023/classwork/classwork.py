'''
word = "Saba isakadze"

print(word.replace(" ", "-",))


def my_replace(word, replace_char, input_char):
    changed_word = ''
    
    for char in word:
        if char == replace_char:
            changed_word = changed_word + input_char
        else:
            changed_word = changed_word + char
    
    return changed_word

print(my_replace("lukaak", "a", "d"))



# "luuuka".count("u") --> result: 3

def my_count(collection, count_element):
    count = 0
    
    for element in collection:
        if element == count_element:
            count = count + 1
    
    return count

print(my_count("luuuka", "u"))






def my_find(collection, value):
    for index in range(len(collection)):
        if collection[index] == value:
            return index
    return -1

print(my_find([1,2,3,4,5], 8))

'''

'''
                                          # 1

def count_evens(numbers_list):
    count = 0
    
    for number in numbers_list:
        if number % 2 == 0:
            count = count + 1
    
    return count

print(count_evens([1,2,3,4,5,6]))

'''


                                            # 2

'''
def replace_even_indexes(word,replace_char):
    changed_word = ''
    
    for index in range(len(word)):
        if index % 2 == 0:
            changed_word = changed_word + replace_char
        else:
            changed_word = changed_word + word[index]
            
    return changed_word


print(replace_even_indexes("lukaa", "k"))

'''



                                            # 3
'''
def my_join(join_str, strings_list):
    joined_elemnts = ''
    
    for word in strings_list:
        joined_elemnts += join_str + word
    
    return joined_elemnts[1:]

print(my_join("+", ["1","2","3"])) 

'''
                                               
                                                # 4
 

'''
def my_func(arr):
    join_str = "+"
    new_str = ""
    new_list = []
    for i in arr:
        if i % 2 == 0:
            new_str += join_str + str(i)
    return new_str[1:]
print(my_func)

'''