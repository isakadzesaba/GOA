def add_name_to_list():
    name_list = []

    first_name = input("Please enter your first name: ")

    last_name = input("Please enter your last name: ")

    name_list.append(first_name)
    name_list.append(last_name)

    return name_list

if __name__ == "__main__":
    names = add_name_to_list()
    print("Names list:", names)