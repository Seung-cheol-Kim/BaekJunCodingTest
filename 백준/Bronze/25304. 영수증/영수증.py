A = int(input())
B = int(input())
E = int()

for i in range(B):
    C,D = map(int, input().split())
    E += (C * D)
if A == E:
    print('Yes')
else:
    print('No')


