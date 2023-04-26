# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer: A conditional statement is a statement that will execute a command if a specific type of conidtion is the boolean value of true. You can run through a list of conditions, as long as they are true, by using else if.  Once the condition becomes false, we use else to return a speicific output as a catch all.  

Researched answer:
URL - https://www.google.com/search?q=explain+conditional+statements+in+javascript&ei=ar1EZIH7Jpq0qtsPi7yLsAw&oq=explain+conditional+statements+in&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoICAAQigUQkQI6EQguEIAEELEDEIMBEMcBENEDOgsILhCKBRCxAxCDAToLCAAQigUQsQMQgwE6CwgAEIAEELEDEIMBOg4ILhCABBCxAxDHARDRAzoICAAQgAQQsQM6CwguEIAEEMcBENEDOgcIABCKBRBDOgsILhCABBDHARCvAToKCAAQigUQsQMQQzoICC4QsQMQgARKBAhBGABQAFiLW2CfamgEcAF4AIABkAGIAfcWkgEEMjcuNpgBAKABAcABAQ&sclient=gws-wiz-serp

Conditional statements control behavior in JavaScript find if the conditions are true or false.  Depending on which condition is met is what will determine the output.  If a statement is true, a behavior will be performed.  You can also continue to perform behaviors as long as its true by using else if then writing a block of code.  Once the condition becomes false, else is to be used to run a type of code as well.


1. What is git? What is the difference between git and Github?

Your answer: Git is the software that runs GitHub, and GitHub is a website that allows programmers to store code through repositories that hold branches.  Code can be pulled and modified from GitHub remotely then sent back to the branch stored on the repository for other programmers to access, review, or modify themselves.  Once completed it can be submitted for review to be published by a pull request.  It is a very useful tool in the scope of remote development.  

Researched answer:

URL - https://www.simplilearn.com/tutorials/git-tutorial/git-vs-github#:~:text=While%20Git%20is%20a%20tool,copies%20of%20a%20Git%20repository.

When using Git developers can perform commands in the console log to execute commands like commit and merge within the Git tool on their own local devices. GitHub provides its cloud-based website to store data and code. The website GitHub allows developers to access, collaborate, and modify blocks of code stored on GitHubs cloud.


2. Which JavaScript operators will return a Boolean value?

Your answer: Logical AND && Logical OR ||.  These two operators work on the basis the if one statement is true or false, the other statement is true or false.  There are a combination of possibilties depending on which is used. You can also set the conditions to strictly equal to, greater than, less than ect... 

Researched answer:

URL - https://www.educba.com/boolean-operators-in-javascript/

Logical OR as well as AND are used to evaluate multiple possibilities of true or false.  As long as one statement is true or both ar false in Logical AND then both statements are true.  However, if one statement is false or both are false, the statment is false in Logical OR.  The only way to return a true statement is both statements must be true in Logical OR.

1. What is the difference between an array's index and its value?

Your answer: everything stored in an array called values are "indexed" at a numerical location starting from left to right and beginning with 0 as the starting index. for example if you had an array myArray = ["Javascript", "CSS", "HTML"] and wanted to know what the value of the index 0 was, console.log (myArray[0]) would return "Javascript" because the value of Javascript lives at the 0 index in that array.

Researched answer:

URL - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
Arrays can store multiple values of different data types which are indexed according to their numerical location, from left to right, beginning at 0.


4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: An array and a string are similar in the fact that they both are objects that can contain data and are both indexed.  They both have a length property.  Where they are different is a string only holds on specific type of data at a time where an array can store multiple similar types of data at once that you can access and modify.  You would have to create another string to modify a string.

Researched answer:

URL - https://pediaa.com/what-is-the-difference-between-array-and-string/

Arrays store multiple similar datatypes and strings are limitied to just one.  String charecters can be accessed via their index, much similiar to an array accessing its values through indexes.  Arrays and strings both have length properties, however, the indexed charecters of a string can not be modified by mutators or accessors like an array can.


5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Proper pair programming includes atleast two programmers working on one project at a time.  This includes one driver, and one navigator.  It is the job of the driver to screen share and take direction on what to code and how to code it.  Essentially what it boils down to is the navigator is coding via the driver. Communication is KEY between the two.  It is also important that the navigator does not try to "work out the problem himself" <---I am referencing what I have been guilty of, because errors and mishaps can happen.  Teamwork will make the dream work and as long as one person is doing the coding errors should be at a minimum

Researched answer:

URL - https://www.techtarget.com/searchsoftwarequality/definition/Pair-programming

Pair programming is a Agile technique defined by a driver and a navigator in which both programmers work together to create, style, modify and test blocks of code.  This can be done in person or remotely 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: Just like a function has paramiters, higher order functions can use other functions as parameters making them more complex
URL - https://www.codecademy.com/learn/game-dev-learn-javascript-higher-order-functions-and-iterators/modules/game-dev-learn-javascript-iterators/cheatsheet

2. Jest: testing javascript code for correctness before publishing
URL - https://jestjs.io/#:~:text=Jest%20is%20a%20JavaScript%20testing,extended%20to%20match%20your%20requirements.

3. Objects: A element by itself that has its own set of properties
URL- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects

4. Method: actions that can be performed on objects
URL - https://www.w3schools.com/js/js_object_methods.asp#:~:text=JavaScript%20methods%20are%20actions%20that,property%20containing%20a%20function%20definition.

5. Classes: A template for creating objects
URL - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
