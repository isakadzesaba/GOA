username = input("Enter your username: ")
password = input("Enter your password: ")


if username == "admin" and password == "password123":
    print("Login successful")
else:
    print("Login failed. Invalid password or username, Please check your username and password.")
    