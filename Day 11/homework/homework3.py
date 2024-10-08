authorized = False 
password = "saba123"

withdrawal = 200
deposit = 500
balance = 1500

login_attempts = 0  

while authorized != True:
    if login_attempts >= 3:
        print("Maximum login attempts. Try again later.")
        break
    
    user_input = input("Please enter your password: ")
    if user_input == password:
        print("Access Granted")
        print("Withdrawal:", withdrawal)
        print("Deposit:", deposit)
        print("Balance:", balance)
        authorized = True
    else:
        print("Incorrect password. Please try again.")
        login_attempts += 1
