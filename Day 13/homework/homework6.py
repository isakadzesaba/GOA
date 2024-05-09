user_input = int(input("Pleace enter a number: "))

if user_input % 3 == 0 and user_input % 5 == 0:
    print("FizzBuzz")
elif user_input % 5 == 0:
    print("Buzz")
elif user_input % 3 == 0:
    print("Fizz")
else:
    print(user_input)