num1 = int(input("Enter number: "))
operator = input("Enter operator: ")
num2 = int(input("Enter number: "))

if operator == "+":
    print(num1 + num2)
elif operator == "-":
    print(num1 - num2)
elif operator == "*":
    print(num1 * num2)
elif operator == '/':
        if num2 != 0:
            print(num1 / num2)
        else:
            print("Error: Can not divide by zero!")
elif operator == "**":
    print(num1 ** num2)