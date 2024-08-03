def even(surname):
    word_list = []
    even_index_list = []
    for i in surname:
        word_list.append(i)
    for x in range(len(word_list)):
        if x % 2 == 0:
            even_index_list.append(word_list[x])
    return even_index_list
print(even("iskadze"))