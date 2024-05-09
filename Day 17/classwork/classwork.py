'''

def func():
    for i in range(10):
        print("luka")

func()

func()

func()

func()



def welcome(name, lastname):
    print("Welcome " + name + " " + lastname)

welcome("Saba", "isakadze")

welcome("Saba", "isakadze")

welcome("Saba", "isakadze")

welcome("Saba", "isakadze")





def func(interaction):
    print("loop with interaction")
    for i in range(interaction):
        print("Loop iteration")

func(5)
func(3)
func(7)








def add(num1, num2):
    return num1 + num2

def subtract(num1, num2):
    return num1 - num2

def multiply(num1, num2):
    return num1 * num2

def divide(num1, num2):
    if num2 != 0:
        return num1 / num2
    else:
        return "Error: Can not divide by zero!"


result_add = add(5, 3)
result_subtract = subtract(10, 4)
result_multiply = multiply(7, 2)
result_divide = divide(8, 2)

print("Result of addition:", result_add)
print("Result of subtraction:", result_subtract)
print("Result of multiplication:", result_multiply)
print("Result of division:", result_divide)

'''