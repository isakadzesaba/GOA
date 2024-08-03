'''
def manual_sum(list):
    total = 0
    for num in list:
        total += num
    return total

_________________________________________________________

def manual_max(list):
    max_value = list[0]
    for num in list:
        if num > max_value:
            max_value = num
    return max_value

_________________________________________________________    

def manual_min(list):
    min_value = list[0]
    for num in list:
        if num < min_value:
            min_value = num
    return min_value

_________________________________________________________    

def manual_len(list):
    count = 0
    for _ in list:
        count += 1
    return count

_________________________________________________________    

def manual_reduce(list):
    copied_list = []
    for item in list:
        copied_list.append(item)
    return copied_list

'''