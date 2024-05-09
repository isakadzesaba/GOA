'''
# 1
def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]

    
# 2
def friend(x):
    return [name for name in x if len(name) == 4]


# 3

def find_short(s):
    s_list = s.split()
    starting_point = len(s_list[0])
    for word in s_list:
        if len(word) < starting_point:
            starting_point = len(word)
    return starting_point

# 4

def get_middle(s):
    str = len(s)
    if str % 2 == 0:
        return s[int(str / 2-1): int(str / 2+1)]
    return s[int(str / 2)]


# 5

def high_and_low(numbers):
    num_list = list(map(int, numbers.split()))

    max_num = max(num_list)
    min_num = min(num_list)
    
    return "{} {}".format(max_num, min_num)
'''
