const error = new Error('This is an error');
// console.log(error);
// console.log(error.name);
// console.log(error.message);
// console.log(error.stack);

// syntax error
// let collect = [];
// let collect = {}

// reference error
// var a = a + b;
// let a = a + b;

// range error
let num = 7.9222; 
// start adding zeros - args must be from 0 to 100
// num = num.toFixed(1); // works fine
num = num.toFixed(101);  // range error 
console.log(num);

// type error
// let collect = {}
// collect.doSomething();

// uri error
// decodeURIComponent("%20");
// decodeURIComponent("%");

// -----------------------------------

// a++; // reference error

// any error

// try {
//   a++;
// } catch {
//     console.log('Something is wrong...');
// }

// try {
//   a++;
// } catch(error){
//   console.error(error.name);
//   console.error(error.message);
//   console.error(error.stack);
// }

// try {
//   // a++;
//   console.log('Success....');
// } catch(error){
//   console.error(error.message);
// } 
// // finally {
// //   console.log('Housekeeping...');
// // }

// // it works - why I need the finally block
// console.log('Housekeeping...');

// function finallyFunc() {
//   try {
//     a++;
//     return 'Success....';
//   } catch (error) {
//     return error.message;
//   } finally {
//     console.log('Housekeeping...');
//   }
// }

// console.log(finallyFunc());

// ---------------------------------------
// division by zero
// js is a safe language (math safe)

// js handles the error
// let a = 0 / 0;
// let b = 5 / 0;
// console.log(a);
// console.log(b);

// function div(a, b) {
//   if (typeof a !== 'number') {
//     throw TypeError('First args should be a number...')
//   }

//   if (typeof b !== 'number') {
//     throw TypeError('Second args should be a number...')
//   }

//   // no need js handles it
//   if (b == 0) {
//     throw new Error('Division by 0 error...');
//   }
// }

// try {
//   // div('a as text', 'b as text');
//   // div(1,  'b as text');
//   div(5, 0);
// } catch (error) {
//   console.error(error.message);
// }

// throw or throw new --> similar functionality
// difference in serialization (when used in console.log)
// try {
//   // throw ReferenceError();
//   // throw SyntaxError('Syntax Error');
//   throw new Error('An Error...')
// } catch (error) {
//   if (error instanceof ReferenceError) console.error('Reference Error...');
//   else if (error instanceof SyntaxError) console.error('Syntax Error...');
//   else if (error instanceof Error) console.error('My Error...');
// }


