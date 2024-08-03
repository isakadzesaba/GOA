''' 
 ____________________________________________________
 def sum_of_numbers(numbers):
     result = 0
     for i in numbers:
         result = result + i
     return result


 numbers = [1,2,3,4,5]
 print(sum_of_numbers(numbers))


____________________________________________________
 def filter(strings_list):
     filtered_list = []
     for word in strings_list:
         if len(word) > 5:
             filtered_list.append(word)

     return filtered_list

 Names = ["Nika", "Luka", "Gabrieli", "Dato", "Giorgi"]

 print(filter(Names))


____________________________________________________
 def even_numbers(numbers):
     even_numbers_list = []
    
     for num in numbers:
         if num % 2 == 0:
             even_numbers_list.append(num)

     return even_numbers_list
    
 print(even_numbers([1,2,3,4,5,6,7,8,9,10]))

____________________________________________________
 def largest_number(numbers):
     max_number = numbers[0]

     for num in numbers:
         if max_number < num:
             max_number = num

     return max_number

 print(largest_number([1,2,3,4,5,6,7,8,9,10]))

____________________________________________________
 def filter_list(strings_list):
     filtered_list = []

     for word in strings_list:
         if word[0] == 'a':
             filtered_list.append(word)
    
     return filtered_list

 words = ["apple", "anaconda", "anakomi", "python", "java", "javascript"]

 print(filter_list(words))





____________________________________________________
 def squared_numbers(numbers):
     squared_numbers_list = []

     for num in numbers:
         squared_numbers_list.append(num * num)
    
     return squared_numbers_list

 print(squared_numbers([1,2,3,4,5]))


____________________________________________________

 def strings_length(strings_list):
     length_list = []

     for word in strings_list:
         length_list.append(len(word))
    
     return length_list

 print(strings_length(["luka","nia","giorgi","lile"]))






____________________________________________________

 def sum_of_numbers(numbers):
     result = 0

     for num in numbers:
         if num > 10:
             result = result + num
    
     return result

 print(sum_of_numbers([1,2,3,11,15,5]))


____________________________________________________
# დავალება: დავალება: შექმენით პროგრამა, სადაც მომხმარებელს შემოატანინებთ თუ რამდენ რიცხვს შეიტანენ სიაში.
# შემდეგ შექმენით სია, for ციკლში input-ით შეეკითხეთ რიცხვი და შეიტანეთ ამ სიაში ეს რიცხვები. 
# ბოლოს სიის ჯამი დააბრუნეთ
#  დავალების შემდეგი ნაწილი: გაფილტრეთ სია ისე, რომ დაბრუნდეს 10-ზე მეტი ლუწი რიცხვები

____________________________________________________
 def main():
     num_elements = int(input("Enter the number of elements in the list: "))

     numbers = []

     for i in range(num_elements):
         num = int(input("Enter number: "))
         numbers.append(num)

     list_sum = sum(numbers)

     filtered_list = [i for i in numbers if i % 2 == 0 and i > 10]

     print("Sum of the list:", list_sum)

     print("Even numbers greater than 10 in the list: ", filtered_list)

 if __name__ == "__main__":
     main()



____________________________________________________
 def sort_numbers(numbers):
     return sorted(numbers)

 numbers = [5, 2, 9, 1, 7]
 sorted_numbers = sort_numbers(numbers)
 print("Original list:", numbers)
 print("Sorted list:", sorted_numbers)

____________________________________________________
 def sort_numbers(numbers):
     for i in range(len(numbers)):
         for o in range(i + 1, len(numbers)):
             if numbers[i] > numbers[o]:
                 numbers[i], numbers[o] = numbers[o], numbers[i]
     return numbers

 numbers = [5, 2, 9, 1, 7]
 sorted_numbers = sort_numbers(numbers)
 print("Original list:", numbers)
 print("Sorted list:", sorted_numbers)



____________________________________________________

 def calculate_rectangle_area(length, height):

     area = length * height
     return area

 length = 5
 height = 10
 area = calculate_rectangle_area(length, height)
 print("The area of the rectangle is: ", area) 


____________________________________________________
def calculate_rectangle_area(length, height):
    area = length * height
    return area

length = 5
height = 10

if length == height:
    print("This is a square.")
else:
    area = calculate_rectangle_area(length, height)
    print("The area of the rectangle is:", area)

____________________________________________________
  
def calculate_rectangle_area(length, height):
    area = length * height
    if length == height:
        return "This is a square."
    else:
        return "The area of the rectangle is: " + str(area)

print(calculate_rectangle_area(5, 10))


  ____________________________________________________
  
  
  
  
  
  '''