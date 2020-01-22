# Javascript and jQuery
## Arguments
    * Arguments as Values
        * getArea(3,5)
    * Arguments as variables
        * boxWidth = 3; boxHeight = 5; getArea(boxWidth, boxHeight);  

## Arrays
 * contents of the array can be anything
 * index are the items inside the array
 * length of the items is the total number of index items
 * the first index item starts at 0
 * .push will automatically at that value into the array
 * best practice to keep similar types of data within an array, it can have differnt types, but makes code more complex to differentiate between the 

 ## Array Methods
  * .push adds an index to the end of the array
  * .pop adds an index to the beginning of the array
  * .shift
  * .unshift
  * .includes will check if an item is in the array
    - example: ``.includes('bananas')`` will check to see if bananas are in the array
  * .forEach()
  * .join() will take all the items within the array and display all together, only used for strings

## Comments
 * You should write comments to explain what your code does.
 * /* is how you start a comment that will have multiple lines
 * // is how you start a comment that will have only one line.
 * Comments how in the creation and sustainment of sites

## Concatentation
## Template Liters ${} instead of + answer += `${cats[i]} is ${catAges[i]} years old ||`;} // the ` is not an apostophe, is next to the number 1. Template literals is the ${}


## Conditions
 * If
 * Swtich

## Data Types
 * Numerical Data = 1.5 or any other number, not inside ' ' 
 * String Data Type = 'text' or any number written inside ' '
 * Boolean will have either a true or false value

## DOM Document Object Model
 - it is the combination of HTML, CSS and JS merged together. By creating code in JS, it will create and change how the HTML tags are layed out.


## Debugging
    *println("clicked"); in the function you want to test, will show clicked if that function is working

## Do loops
    * will always run at least once

## Equals
    * = is assigning characters to be the same
        * a = b
    * == is comparing the data type
        * 5 == '5'
    * === evaluates the data type. This will be the prefered
    " 5 does not equal '5'
    * prompt will ask the user for input
    Equal
        = assigns value 
        == is equal to or != is not equal to 
        === strict equal to or !== is strict not equal to  

## Expressions - 2 Types
    1. Expressions that just assign a value to a variable
        * example: var color = 'beige';, the value of the color is beige
    2. Expressions that use two or more values to return a single value
        * example: var area = 3 * 2;, the value of area is 6.


    * Expressions rely on operators, they allow programmers to create a single value from one or more values
    * String operators
        * Example: greeting = 'Hi' + 'Molly'; the value of greeting is Hi Molly
    * Comparison Operators
        * Example: buy = 3 > 5; the value of buy is false
    * ++ will add 1 to the current number, -- will minus 1
        * Example: i = 10; i++; the result will be 11
    * % will divide the two numbers, but only returns the remainder 

## Function
 - Functions, methods and objects are used to help organize code.
 - __Functions__ is a group of statements that perform a specific task.
 -__Callling / Invoke__ a function is when you are asking that function to perform its code.
   - Example: ``sayHello();``
 -__Parameters__ is information that is needed within a function that is passed to it from outside the function. these parameters only exist within this function and the function is expecting these parametets within the function. Don't use these parameters outside the function or javascript may have an error. Arguments should be in the same sequence as they relate to their corresponding parameters, there are ways to not do this, but not in 201...
   - Example: ``function getArea(width, height){return width * height;}``
      - the parameters of width and height are within the () 
 -__Return Value__ is the response you get from the function when it has run its code. Once a function is invoked, the function is now equal to that value
    - __Return Multiple Values__ use an array
        - Example: ``return [num1 + num2, num1, num2];`` will return 3 numbers
 -__Declaring__ a function is used by started with the word __function__ and then adding a custom __function name__
   - Example: ``function sayHello() { document.write('Hello!');}``
 -__Argument__ is information from outside the function you are asking your function to calculate
    - Example: ``function getArea(3,5);``. 3 and 5 are the arguments and the function will result in 3x5=15
 - __Anonymous Functions__ create a function that is assigned a var name to store that information for other functions
    - Example: ``var ageFunction = function (parameter 1, parameter 2) {}``
 - __Variables (Global vs Local)__ local variables are only inside the function within the {}

 - Functions can return more than one value using an array
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

## For loop
 * ``for(var x = 0; x<myArray.length; x++>){}`` needs an array called myArray

## Javascript
 * Javascript is the third layer of a web page that enhances the usability and experience by interacting with the site
 * It is important to keep this layer seperate from HTML and CSS so the site will continue to have content if the Javascript does not work.

## Javascript Examples
 * Access the content of the page
 * Modify the content of the page
 * Program rules are instructions the browser can follow
 * React to events triggered by the user or browser

## Linter
 * program that helps find issues in your code
 * create file named eslint.json in the same folder with your HTMLAllCollection, css and json


## Local and Global variables
    * local variables are defined inside a function and will only be read inside that code block
    * global variables must be defined outside of a function

## Loops
 - loops check a condition. if it return true, a code block will run. The condition will be checked again and repeated until the condition returns false

## Mouse
    * mouseX, mouseY
    * draw = function(){
    * ellipse(mouseX, mouseY, 12, 12); 
    * var label = mouseX+","+mouseY;
    * text(label,mouseX, mouseY);};

## Object
 - 2 ways to create objects: 
    - __object literals__
    - __instantiation__ thru constructor Function
 - Objects have:
    - __Properties__ are the characteristics (color, height, name,...)
        - example: ``name: 'Olaf',`` <!--use a comma after each property-->
            - __property key__ is ``name``
            - __property value__ is ``'Olaf'``
    -__Properties as an array__
        - example: ``friends: ['elsa', 'fred'],``
    - __Methods__ are functions that are in an object. These are the behaviors (walk, talk)
    - Functionality
    - __Contextual this__ using __this.name__ will know that you are refering within the object to reference name within 
    - __nested objects__ is an object within an object.


## Pre-defined functions
    * draw = function(){}; will draw the items defined in the function
        * use x to define you items and then use x = x + 3 to animate, adjust the number as needed
    * mouseX, mouseY
    * mouseIsPressed

## Random
    * number = random (#1, #2). Will create a number randomly between #1 and #2

## Statements
 * A script is a series of instructions that a computer can follow
 * Each individual instruction or step is known as a statement
 * Statements should end with a semicolon.

## Script
 * a series of instructions that a computer can follow to achieve a goal, similar to a recipe, training document, manuals
 * Scripts can run different sections of the code
 * The first part of a script is to state the goal and then list the tasks that need to be completed in order to achieve it
 * Each individual task may be broken down into a sequence of steps.

## Text
    * A String is text in ""
    * Concatenating multiple strings together
        * var myGreeting = "Hello"
        * var myName = "Corey"
        * var sayHello = myGreeting + "," + myName + "!"; 
        * Hello, Corey!
    * text ("Hello", 100,100) will place the word Hello at the x,y coordinates starting from the very bottom left of the word Hello
    * "" and '' can both be used, but not simultaneosuly. 

## upper/lower case
 * if(variable name.toLowerCase() === "lowercase word"{}
 * if(variable name.toUpperCase() === "UPPERCASE WORD"){}

## Variables
 * A script will temporarily store information in variables.
 * var is the keyword followed by the variable name

## While loops
 * while(array.length){}
 * array.pop{} used to get out of the loop