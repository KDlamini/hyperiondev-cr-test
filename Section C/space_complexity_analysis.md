# Space Complexity Analysis

> The space complexity of an algorithm measures how much memory it uses as a function of the input size. The worst-case space complexity is the maximum amount of memory used by the algorithm for any input of a given size.

To analyze the space complexity of my solution, I will consider the following factors:
- The input size: This is the length of the Hamming block, denoted by n.
- The auxiliary space: This is the extra space used by the algorithm apart from the input and output. This includes variables, arrays, objects, etc.
- The output size: This is the length of the fixed Hamming block, which is also n.

<br>

The auxiliary space used by my solution consists of:
- The bits array: This is an array that stores the bits of the Hamming block after splitting it. It has a length of n and each element takes constant space. Therefore, its space complexity is O(n).
- The parityBits array: This is an array that stores the parity bits of the Hamming block. It has a length equal to log2(n) rounded up to the nearest integer and each element takes constant space. Therefore, its space complexity is O(log n).
- The index variable: This is a variable that stores the index of each parity bit. It takes constant space.
- The ones variable: This is a variable that counts the number of ones in each region. It takes constant space.
- The fixedBlock variable: This is a variable that stores the fixed Hamming block after joining it. It has a length of n and takes linear space.

<br>

Therefore, adding up all these factors, we get:

```
Auxiliary Space = O(n) + O(log n) + O(1) + O(1) + O(n)
```

Using asymptotic notation rules, we can simplify this expression to:

```
Auxiliary Space = O(n)
```

Since we are only interested in measuring how much extra memory our algorithm uses apart from the input and output, we do not include them in our calculation.  
Hence,

```
Space Complexity = Auxiliary Space
Space Complexity = O(n)
```

This means that our algorithm uses linear extra memory in relation to the input size.

We can justify this result by observing that our algorithm does not use any recursive calls or nested loops that would increase memory usage exponentially or quadratically. Instead, it only uses one loop that iterates over log2(n) times and another loop that iterates over n times at most. Therefore, our algorithm uses linear extra memory in relation to the input size.


