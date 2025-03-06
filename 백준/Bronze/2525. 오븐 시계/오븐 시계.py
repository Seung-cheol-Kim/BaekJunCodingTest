A, B = map(int, input().split()) 
C = int(input()) 

if B+C < 60:
	print(A, B+C)
elif B+C // 60 > 0:
	A += ((B+C) // 60)
	B = ((B+C) % 60)
	if A == 24:
	    A = 0
	elif A > 24:
		A = A-24
	print(A, B)