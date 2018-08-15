# Assessment: Javascript Katas 2 #

## Overview ##

A [kata](https://en.wikipedia.org/wiki/Kata_(programming)) is an individual exercise where you practice a programming skill through repetition. Today you will practice using JavaScript loops and functions. The functions start out trivial and ramp up in difficulty. The main goals of these katas are:
*   get you used to writing and calling functions that take arguments and return results
*   get you used to breaking down a problem into the various parts of a for loop

You will create a single web page for all these exercises, and use `console.log()` for all output. Unlike other katas we've done up until now, most of these build on each other, which means that **you'll have to complete them in order**.

When giving constraints for the implementation, note that anything I say about functions also applies to methods (we'll talk about the difference some day). 

### Add (1 point) ###

Write an _`add`_ function that takes two arguments and returns their sum.

You may use built-in operators to finish the definition.

Display the result of calling _`add(2, 4)`_, which should be 6.

### Multiply (2 points) ###

Write a _`multiply`_ function that takes two arguments and returns their product.

You **may not** use built-in arithmetic operators or functions. Instead, you'll need a for loop which calls the "add" function you wrote earlier.

Display the result of calling _`multiply(6, 8)`_, which should be 48.

### Power (2 points) ###

Write a _`power`_ function that takes two arguments (`x` and `n`) and returns the the result of raising x to the nth power.

You **may not** use built-in arithmetic operators or functions. Instead, use the previous functions you wrote to write this function.

Display the result of calling _`power(2, 8)`_, which should be 256.

**Hint**: _Another word for this is "exponentiation". In the above example, we arrive at 256 by multiplying 2 by itself 8 times:_

_2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256_

If we had called _`power(3, 4)`_, we'd want to multiply 3 by itself 4 times:

_3 * 3 * 3 * 3 = 81_

See [this Wikipedia article](https://simple.wikipedia.org/wiki/Exponentiation) for more details on exponentiation.

### Factorial (2 points) ###

Write a _`factorial`_ function that takes a single argument and returns the factorial of that argument.

You **may not** use built-in arithmetic operators or functions. Instead, use the previous functions you wrote to write this function.

Display the result of calling _`factorial(4)`_, which should be 24:

_4 * 3 * 2 * 1 = 24_

### Fibonacci (3 points) ###

Write a _`fibonacci`_ function that takes an argument `n` and returns the nth, [Fibonacci number](https://simple.wikipedia.org/wiki/Fibonacci_number).

You **may not** use built-in arithmetic operators or functions. Instead, use the previous functions you wrote to write this function.

Display the result of calling _`fibonacci(8)`_, which should be 13:

_0 1 1 2 3 5 8 [13] 21_

The number in brackets is the 8th fibonacci number.

## Hints ##

1.  The answer to most of these will look similar. They will typically involve:
    *   declaring a variable to keep track of a final result
    *   writing a _for_ loop to consistently modify the result
    *   returning the result
2.  If you struggle for more than 5 minutes, **ask for help!** This is an exercise in critical thinking, not torture.