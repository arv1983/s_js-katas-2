# Assessment: JavaScript Katas 2 #

# Overview 

A [kata](https://en.wikipedia.org/wiki/Kata_(programming)) is an individual exercise where you practice a programming skill through repetition. Today you will practice using JavaScript loops and functions. The functions start out trivial and ramp up in difficulty. The main goals of these katas are:

     * get you used to writing and calling functions that take arguments and return results
     * get you used to breaking down a problem into the various parts of a for loop

You will use the [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) keyword for the output of your function. Unlike other katas we've done up until now, most of these build on each other, which means that **you'll need to complete them in order.**

When giving constraints for the implementation, note that anything I say about functions also applies to methods (we'll talk about the difference soon).

# Testing #

For this assessment, you will have access to testing tools as you work.  To test your work as you go, follow these instructions:

1. Your solutions file should be named `katas2.js` and it should live in a directory/folder called `katas2`.  When writing your function for each kata, name each one according to the instructions.  **It is important to follow these naming instructions, or the testing tools will not work, and you will not receive points.**
2. If you already have node/npm installed, skip this step.  From your terminal, run the command `brew install node`. Verify the install completed by running `node --version` (You should see something like `v8.12.0` or similar), then `npm --version` (You should see something like `6.4.1` or similar)
3. If you already have the kenzie testing npm package installed, skip this step.  Again from your terminal, run the command `sudo npm install --global git+https://github.com/jragard/kenzie-testing`
4. You can test the functions in your katas2.js file by navigating to the katas2 directory that holds your file.  When you are in the same directory as your `katas2.js` file, run the terminal command `kenzie-test katas2`.  You will receive instant feedback in your terminal.  You can run these tests repeatedly as you complete katas to verify that your solutions are correct.

## Katas

# Add (1 point)

Write a function named "add" that takes two arguments and returns their sum.

You may use built-in operators to finish the definition.

For example, calling *add*(2, 4) should return a result of 6.


# Multiply (2 points)

Write a function named "multiply" that takes two arguments and returns their product.

You **may not** use built-in arithmetic operators or functions (like the `*` built-in operator for multiplication). Instead, you'll need a for loop which calls the "add" function you wrote earlier.

For example, calling *multiply*(6, 8) should return a result of 48.


# Power (2 points)

Write a function named "power" that takes two arguments (x and n) and returns the the result of raising x to the nth power.

You **may not** use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function (like the `*` built-in operator for multiplication, or the `**` operator for power/exponentiation).

Another word for this is "exponentiation". For example, if we called *power*(2, 8), we return 256 by multiplying 2 by itself 8 times:

    2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256

If we had called *power*(3, 4), we'd want to multiply 3 by itself 4 times:

    3 * 3 * 3 * 3 = 81

See [this](https://simple.wikipedia.org/wiki/Exponentiation) Wikipedia article for more details on exponentiation.

# Factorial (2 points)

Write a function named "factorial" that takes a single argument and returns the factorial of that argument .

You **may not** use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function (like the `*` built-in operator for multiplication).

For example, calling *factorial*(4) should return a result of 24.

# Fibonacci (3 points)

Write a function named "fibonacci" that takes an argument n and returns the nth [Fibonacci number](https://simple.wikipedia.org/wiki/Fibonacci_number). 

You **may not** use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function (like the `*` built-in operator for multiplication).

For example, calling *fibonacci*(8) should return a result of 13.

0  1  1  2  3  5  8  [13]  21

The number in brackets is the 8th fibonacci number.

# Hints

1. The answer to most of these will look similar. They will typically involve:
    * declaring a variable to keep track of a final result
    * writing a for loop to consistently modify the result
    * returning the result
    
2.  If you struggle for more than 5 minutes, **ask for help!** This is an exercise in critical thinking, not torture.

## Submission ##

Push your code into your GitLab repository and use the GitLab Pages feature to allow your site to be viewed directly. Please submit your Gitlab Pages url in Canvas, **along with your Project ID # as a comment on your submission, located right below your project name. (See Below)** You can copy/paste it.  As always, your Gitlab project must be shared with the KA_SE5 account with "Reporter" as role permission.


![](project_id.png)