// EXAMPLE 1 - Check if a value's type is Boolean using JavaScript

const bool = true;

if (typeof bool === 'boolean') {
  // 👇️ this runs
  console.log('✅ the value is a boolean');
} else {
  console.log('⛔️ the value is NOT a boolean');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Define a reusable function

// function isBoolean(value) {
//   return typeof value === 'boolean';
// }

// console.log(isBoolean(true)); // 👉️ true
// console.log(isBoolean(false)); // 👉️ true
// console.log(isBoolean(undefined)); // 👉️ false
// console.log(isBoolean('')); // 👉️ false
// console.log(isBoolean(null)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a value is of type boolean using logical OR (||) operator

// const bool = true;

// if (bool === true || bool === false) {
//   // 👇️ this runs
//   console.log('✅ type is boolean');
// } else {
//   console.log('⛔️ type is NOT boolean');
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Define a reusable function

// function isBoolean(value) {
//   return value === true || value === false;
// }

// console.log(isBoolean(true)); // 👉️ true
// console.log(isBoolean(false)); // 👉️ true
// console.log(isBoolean(undefined)); // 👉️ false
// console.log(isBoolean('')); // 👉️ false
// console.log(isBoolean(null)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 5 - Check if a value is of type boolean using `toString.call()`

// const value = true;

// if (
//   Object.prototype.toString.call(value) === '[object Boolean]'
// ) {
//   // 👇️ this runs
//   console.log('✅ type is boolean');
// } else {
//   console.log('⛔️ type is NOT boolean');
// }

// ------------------------------------------------------------------

// // EXAMPLE  6 - Check if a value is of type boolean using `lodash`

// import _ from 'lodash';

// console.log(_.isBoolean(true)); // 👉️ true
// console.log(_.isBoolean(false)); // 👉️ true
// console.log(_.isBoolean('hello')); // 👉️ false
// console.log(_.isBoolean(null)); // 👉️ false
