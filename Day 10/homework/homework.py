authorized = False 
password = "saba123"

while  authorized != True:
    user_input = input("please enter your password: ")
    if user_input == password:
        print("Accses Granted")
        authorized = True

# or
        

guess = int(input("enter your password: "))
password = '12345'
while guess != password:
    guess = int(input("enter your password: "))
print("password is correct")