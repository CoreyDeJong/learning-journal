# Comparison and Logical Operators

## Comparison Operators
 * = assigned value
 * == Is Equal To
  * compares to see if they are the same, regardless of data type (number, string, boolean)
 * === strict equal to
  * compares to see if they are the same and the same data type (number, string, boolean)
 * != is not equal to
 * !== strict not equal to
 
 ## Logical Operators
 * && logical and
  * evalutes if both expressions are true
  * Example: (5>3)&&(5>4). Both evaluations are true, the expression is true.
 * || Logical or
  * this operator test at least one condition to be true, if one evalutation is true, the expression is true.
 * ! logical not
  * operator takes a single boolean value and inverts it
  * Example: !(2<1), expression is true given the condition is false.

## Loops
 * Loops check a condition. If it returns true, a code block will run. Then the condition will be checked again and will continue to run the code block until the condition if false.   
 * For loop
  * if you need to run a code a specific number of times
  * 3 main conditions components
   1. Initialization. Example: var i = 0;
   2. Condition. Example i<10;
   3. Update. Example i++ or i+=50
  * for (condition 1; condition 2; condition 3){code}
 * While loop
  * if you don't know how many times a code should run
  * condition 1; while (condition 3){code; condition 2} 
  *Nested For Loops is a loop within a loop