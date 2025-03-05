year = int(input())
if year % 4 == 0 and year % 100 != 0: # 연도가 4 또는 100으로 나눈 후 나머지가 0일 때
	print(1)
elif year % 400 == 0: # 400으로 나눈 후 나머지가 0일 때
	print(1)
else:
	print(0)