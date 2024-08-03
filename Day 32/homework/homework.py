'''Code wars'''
'''https://www.codewars.com/kata/5266fba01283974e720000fa/train/python '''
def calculate_variance(numbers):
    mean = sum(numbers) / len(numbers)
    variance = sum((x - mean) ** 2 for x in numbers) / len(numbers)
    return variance
def variance(numbers):
    return calculate_variance(numbers)

''' https://www.codewars.com/kata/52449b062fb80683ec000024/train/python '''

def generate_hashtag(s):
    if not s:
        return False
    result = "#" + ''.join(word.capitalize() for word in s.split())    
    return result if len(result) <= 140 else False