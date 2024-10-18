// app.js
import multiply, { add, subtract, addAndLogUpper, maxMultiplyUpper} from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';
 
// Call the functions and log results (your choice of arguments)
console.log('Add: ', add(5, 3));  // Test your add function
console.log('Subtract: ', subtract(8, 6)); // Test your subtract function
console.log('Multiply: ', multiply(4, 7)); // Test the default export

console.log('Uppercase: ', toUpperCase('hello'));  // Test string manipulation
console.log('Lowercase: ', toLowerCase('HELLO')); // Test string manipulation

console.log('Max: ', findMax([1, 2, 3, 4, 5]));  // Test findMax
console.log('Reversed: ', reverseArray([1, 2, 3]));  // Test reverseArray

addAndLogUpper(10, 20);  // Test the new function
console.log('Maximum number times a value set to uppercase: ', maxMultiplyUpper([2, 5, 4, 7], 6));  // Test maxMultiplyUpper