import math
def leastPrimeFactor (n):
            isPrime = [True] * (n + 1)
            isPrime[0] = False
            isPrime[1] = False
            for i in range(2, int(math.sqrt(n)) + 1):
                if isPrime[i]:
                    for j in range(i * i, n + 1, i):
                        if isPrime[j]:
                            isPrime[j] = False
            leastPrimes = [0]
            for i in range(2, n + 1):
                if isPrime[i]:
                    leastPrimes.append(i)
                else:
                    for j in range(2, int(math.sqrt(i)) + 1):
                        if isPrime[j] and i % j == 0:
                            leastPrimes.append(j)
                            break
            return leastPrimes


print(leastPrimeFactor(6))