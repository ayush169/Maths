num = 123

s = str(num)

arr = [i for i in s]
arr.reverse()

k = ""

for i in arr:
    k += i

c = int(k) + 9
