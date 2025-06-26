a =2
print(a)

for _ in range(10):
    print('Bonjour')

for i in range(10,20,2):
    print(i)

# for i in range(-10,-20,-2):
#     print(i)

for i in range(20,0,-2):
    print(i)

b = [1,2,3,4,5,6,7,8,9,10]
print(b)

def f1(name):
    print("hello", name)
    global a
    a=5

f1("wil")
print (a)

if a<5:
    print ("petit")
elif a==5:
    print("moyen")
else:
    print("null")

print ("salut", "bonjour",sep="-", end=".\n")
print("aaaaaaa")

print ("salut", "bonjour",sep="-", end=".\n")

import colorama
colorama.just_fix_windows_console()
print('\x1b[0;31;42mAAA\x1b[0m')

def f(a, b, c=2, *args, **kwargs):
    print(f'a vaut {a}, b vaut {b} et {c=}')
    print(args)
    print(kwargs)

f(10, 20, 30)
f(c=10, b=20, a=30)
f(10, c=200, b=0)
f(10, 20, 1, 7, 8, 9, 6, 5, 4)
f(10, 20)
f(10, 20, azerty=147)


d = {1: 3, 'azerty': 14}
print(d)

for key in d:
    print(key, d[key])

print(d.items())

for key, value in d.items():
    print(key, value)

print((1,2,3))
print([1,2,3])

for a,b,c in [(1,2,3), (4,8,12)]:
    print(a,b,c)

list1 = [11,12,13,14,15]
list2 = [100,99,98]

for a, b in zip(list1, list2):
    print(a, b)

print(len(list1))


class Voiture:
    def __init__(self, color):
        self.color = color
    
    def __len__(self):
        return 42
    
    def __add__(self, n):
        return f'Ma somme spéciale {n}'
    
v = Voiture('rouge')
print(v)
print(len(v))
print(v + 12)