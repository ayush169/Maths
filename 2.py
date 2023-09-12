import math

def gcd(a, b):
    # Calculate the greatest common divisor using Euclidean algorithm
    while b != 0:
        a, b = b, a % b
    return a

def lcm(a, b):
    # Calculate the least common multiple using the formula: LCM(a, b) = (a * b) / GCD(a, b)
    return (a * b) // gcd(a, b)

def number_of_meetings(A, B, C):
    lcm_AB = lcm(A, B)  # Calculate the least common multiple of A and B
    meetings = C // lcm_AB  # Calculate the number of meetings
    return meetings

# Example usage:
A = 1  # Geek's lap time in seconds
B = 3  # Geekina's lap time in seconds
C = 4  # Total time in seconds

meetings = number_of_meetings(A, B, C)
print(f"Geek and Geekina can meet {meetings} times on the starting point.")