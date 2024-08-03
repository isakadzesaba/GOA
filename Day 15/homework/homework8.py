user_number = int(input("Enter a number: "))
even_numbers = []

for i in range(user_number + 1):
    if i % 2 == 0:
        even_numbers.append(i)


print("Even numbers from 0 to", user_number, "are:", even_numbers)