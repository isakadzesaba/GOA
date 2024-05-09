'''
def solution(string, ending):
    return string.endswith(ending)


def is_triangle(a, b, c):
    return a + b > c and a + c > b and b + c > a


def number(bus_stops):
    result = 0
    for i in bus_stops:
        result += i[0] - i[1]
    return result


def reverse_words(text):
    text = text.split(' ')
    result = ''
    for i in text:
        result += ' ' + i[::-1]
    return result[1:]


def arithmetic(a, b, operator):
    if operator == "add":
        return a + b
    elif operator == "subtract":
        return a - b
    elif operator == "multiply":
        return a * b
    elif operator == "divide":
        return a / b
    

def solution(s):
    result = ''
    for i in s:
        if i != i.upper():
            result += i
        if i == i.upper():
            result += ' ' + i
    return result


import math

def is_prime(num):
    if num <= 1:
        return False
    if num == 2:
        return True
    if num % 2 == 0:
        return False
    for i in range(3, int(math.sqrt(num)) + 1, 2):
        if num % i == 0:
            return False
    return True


def pyramid(n):
    result = []
    for i in range(1, n + 1):
        result.append([1] * i)
    return result

'''