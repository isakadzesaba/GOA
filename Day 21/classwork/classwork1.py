'''
1

def grow(arr):
    num = 1
    for i in arr:
        num = num * i
    return num

2

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


3

def get_count(sentence):
    num_of_vowels = 0
    vowels = 'aeiou'
    for i in sentence:
        if i in vowels:
            num_of_vowels += 1
        
    return num_of_vowels


4

def square_digits(num):
    num1 = [int(i) for i in str(num)]
    string = ""
    for i in num1:
        string += str(i * i)
    return int(string)


5

def descending_order(num):
    num1 = []
    reverse = ""
    for i in str(num):
        num1.append(int(i))
    num1.sort(reverse = True)
    for i in num1:
        reverse += str(i)
    return int(reverse)

6
def likes(names):
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return f"{names[0]} likes this"
    elif len(names) == 2:
        return f"{names[0]} and {names[1]} like this"
    elif len(names) == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        return f"{names[0]}, {names[1]} and {len(names)-2} others like this"

'''