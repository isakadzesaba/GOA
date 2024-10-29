'''
def manual_sum(number_list, starting_value = 0):
    result = starting_value

    for num in number_list:
        result = result + num
    
    return result


print(manual_sum([1,2,3,4,5]))

_________________________________________________________

def manual_sum(number_list):
    result = 0

    for num in number_list:
        result = result + num
    
    return result

_________________________________________________________

def manual_max(number_list):
    max_value = number_list[0]

    for num in number_list:
        if max_value < num:
            max_value = num
    
    return max_value

print(manual_max([1,2,3,4,5]))

_________________________________________________________

def manual_min(number_list):
    min_value = number_list[0]

    for num in number_list:
        if min_value > num:
            min_value = num
    
    return min_value

print(manual_min([1,2,3,4,5]))

_________________________________________________________

def manual_len(collection):
    count = 0

    for _ in collection:
        count = count + 1
    
    return count

print(manual_len([1,2,3,4,5]))
print(manual_len("Luka"))
print(manual_len(range(10)))

_________________________________________________________


'''