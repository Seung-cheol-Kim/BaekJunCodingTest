H, M = map(int, input().split())

if M >= 45: # 45분보다 크거나 같으면
    print(H, M-45)
elif M < 45: # 45분보다 작으면
    if H == 0: # 시간이 0일 경우
        print(23, 60-(45-M))
    else:
        print(H-1, 60-(45-M))