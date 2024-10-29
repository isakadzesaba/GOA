number = int(input("Pleace enter whole number a number: "))

if number >= 0:
    factorial = 1
for i in range(1, number, 1):
        factorial *= i
print(factorial * number)