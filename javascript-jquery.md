# Javascript and jQuery

## Javascript
 * Javascript is the third layer of a web page that enhances the usability and experience by interacting with the site
 * It is important to keep this layer seperate from HTML and CSS so the site will continue to have content if the Javascript does not work.

## Javascript Examples
 * Access the content of the page
 * Modify the content of the page
 * Program rules are instructions the browser can follow
 * React to events triggered by the user or browser

## Statements
 * A script is a series of instructions that a computer can follow
 * Each individual instruction or step is known as a statement
 * Statements should end with a semicolon.

## Comments
 * You should write comments to explain what your code does.
 * /* is how you start a comment that will have multiple lines
 * // is how you start a comment that will have only one line.
 * Comments how in the creation and sustainment of sites

## Variables
 * A script will temporarily store information in variables.
 * var is the keyword followed by the variable name

## Data Types
 * Numerical Data = 1.5 or any other number, not inside ' ' 
 * String Data Type = 'text' or any number written inside ' '
 * Boolean will have either a true or false value

 ## Script
 * a series of instructions that a computer can follow to achieve a goal, similar to a recipe, training document, manuals
 * Scripts can run different sections of the code
 * The first part of a script is to state the goal and then list the tasks that need to be completed in order to achieve it
 * Each individual task may be broken down into a sequence of steps.


## Other Stuff
    * = is assigning characters to be the same
        * a = b
    * == is comparing the data type
        * 5 == '5'
    * === evaluates the data type. This will be the prefered
    " 5 does not equal '5'
    * prompt will ask the user for input  

## Expressions - 2 Types
    1. Expressions that just assign a value to a variable
        * example: var color = 'beige';, the value of the color is beige
    2. Expressions that use two or more values to return a single value
        * example: var area = 3 * 2;, the value of area is 6.

## Operators
    * Expressions rely on operators, they allow programmers to create a single value from one or more values
    * String operators
        * Example: greeting = 'Hi' + 'Molly'; the value of greeting is Hi Molly
    * Comparison Operators
        * Example: buy = 3 > 5; the value of buy is false
    * ++ will add 1 to the current number, -- will minus 1
        * Example: i = 10; i++; the result will be 11
    * % will divide the two numbers, but only returns the remainder 

## Function
    * Functions let you group a series of statements together.
    * create functions to be referenced other areas, prevents duplicating code and improves efficiency of the web browser
    * "Declaring" a function is creating the function. Example: function sayHello() {document.write('Hello!');}
    * "calling" a function is when you ask to perform its task. Example sayHello();
    * steps of the function are found in the code block which is in between the {}, with no ;
    * "parameters" are pieces of information passed to the function
    * "Return value" is the the response you get from a function
    
    * Functions are invoked by using curly braces
    
    * a reusable set of step-by-step instructions, potentially based on input, to potentially provide some output
    * 

## Pre-defined functions
    * draw = function(){}; will draw the items defined in the function
        * use x to define you items and then use x = x + 3 to animate, adjust the number as needed
    * mouseX, mouseY
    * mouseIsPressed

## Random
    * number = random (#1, #2). Will create a number randomly between #1 and #2

## Local and Global variables
    * local variables are defined inside a function and will only be read inside that code block
    * global variables must be defined outside of a function

## Arguments
    * Arguments as Values
        * getArea(3,5)
    * Arguments as variables
        * boxWidth = 3; boxHeight = 5; getArea(boxWidth, boxHeight);  

## Text
    * A String is text in ""
    * Concatenating multiple strings together
        * var myGreeting = "Hello"
        * var myName = "Corey"
        * var sayHello = myGreeting + "," + myName + "!"; 
        * Hello, Corey!
    * text ("Hello", 100,100) will place the word Hello at the x,y coordinates starting from the very bottom left of the word Hello
    * "" and '' can both be used, but not simultaneosuly. 

## Mouse
    * mouseX, mouseY
    * draw = function(){
    * ellipse(mouseX, mouseY, 12, 12); 
    * var label = mouseX+","+mouseY;
    * text(label,mouseX, mouseY);};

