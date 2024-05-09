def expanded_form(num):
    num_str = str(num)
    result = [digit + '0' * (len(num_str) - i - 1) for i, digit in enumerate(num_str) if digit != '0']
    return ' + '.join(result)