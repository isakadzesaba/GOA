"""
Find the smallest integer in the array

# 1:
def find_smallest_int(arr):
    return min(arr)

# 2:
def find_smallest_int(arr):
    smallest = arr[0] 
    for i in arr: 
        if i < smallest:
            smallest = i  
    return smallest 



____________________________________________________

# Remove String Spaces

def no_space(x):
    z = ""
    for i in x:
        if i != " ":
            z += i
    return z


____________________________________________________ 

# Convert a Boolean to a String
def boolean_to_string(b):
    return str(b)

    

____________________________________________________

Sum Arrays

1:
def sum_array(a):
    sum = 0
    int = 0
    while int < len(a):
        sum += a[int]
        int += 1
    return sum

2:
def sum_array(a):
    sum = 0
    int = 0
    while int < len(a):
        sum += a[int]
        int += 1
    return sum


____________________________________________________

Abbreviate a Two Word Name

def abbrev_name(name):
    words = name.split()
    
    abbreviation = ""
    for word in words:
        first_letter = word[0].upper()
        abbreviation += first_letter + "."
    return abbreviation[:-1]

____________________________________________________

Beginner - Lost Without a Map

def maps(a):
    return [i * 2 for i in a]

____________________________________________________


MakeUpperCase

def make_upper_case(s):
    return s.upper()


____________________________________________________


Calculate average

____________________________________________________



Calculate BMI

def bmi(weight, height):
    the_bmi = weight / (height ** 2)
    if the_bmi <= 18.5:
        return "Underweight"
    elif the_bmi <= 25.0:
        return "Normal"
    elif the_bmi <= 30.0:
        return "Overweight"
    else:
        return "Obese"

"""