// 29. What's the output?
const a = {}
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 123
a[c] = 456

console.log(a[b])
// A: 123
// B: 456
// C: undefined
// D: ReferenceError
// Answer
// Answer: B
// Object keys are automatically converted into strings. We are trying to set an object as a key to object a, with the value of 123.

// However, when we stringify an object, it becomes "[object Object]". So what we are saying here, is that a["[object Object]"] = 123. Then, we can try to do the same again. c is another object that we are implicitly stringifying. So then, a["[object Object]"] = 456.

// Then, we log a[b], which is actually a["[object Object]"]. We just set that to 456, so it returns 456.

// 31. What is the event.target when clicking the button?
{
  /* <div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div> */
}
// A: Outer div
// B: Inner div
// C: button
// D: An array of all nested elements.
// Answer
// Answer: C
// The deepest nested element that caused the event is the target of the event. You can stop bubbling by event.stopPropagation

// 35. Which of these values are falsy?
// 0;
// new Number(0);
// ('');
// (' ');
// new Boolean(false);
// undefined;
// A: 0, '', undefined
// B: 0, new Number(0), '', new Boolean(false), undefined
// C: 0, '', new Boolean(false), undefined
// D: All of them are falsy
// Answer
// Answer: A
// There are 8 falsy values:

// undefined
// null
// NaN
// false
// '' (empty string)
// 0
// -0
// 0n (BigInt(0))
// Function constructors, like new Number and new Boolean are truthy.
// 46. What's the output?
// let person = { name: 'Lydia' };
// const members = [person];
// person = null;

// console.log(members);
// A: null
// B: [null]
// C: [{}]
// D: [{ name: "Lydia" }]
// Answer
// Answer: D
// First, we declare a variable person with the value of an object that has a name property.

// Then, we declare a variable called members. We set the first element of that array equal to the value of the person variable. Objects interact by reference when setting them equal to each other. When you assign a reference from one variable to another, you make a copy of that reference. (note that they don't have the same reference!)

// Then, we set the variable person equal to null.

// We are only modifying the value of the person variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in members still holds its reference to the original object. When we log the members array, the first element still holds the value of the object, which gets logged.

// function Car() {
//   this.make = 'Lamborghini';
//   return { make: 'Maserati' };
// }

// const myCar = new Car();
// console.log(myCar.make);
// A: "Lamborghini"
// B: "Maserati"
// C: ReferenceError
// D: TypeError
// Answer
// Answer: B
// When you return a property, the value of the property is equal to the returned value, not the value set in the constructor function. We return the string "Maserati", so myCar.make is equal to "Maserati".

// 61. What's the output?
// const person = { name: 'Lydia' };

// Object.defineProperty(person, 'age', { value: 21 });

// console.log(person);
// console.log(Object.keys(person));
// A: { name: "Lydia", age: 21 }, ["name", "age"]
// B: { name: "Lydia", age: 21 }, ["name"]
// C: { name: "Lydia"}, ["name", "age"]
// D: { name: "Lydia"}, ["age"]
// Answer
// Answer: B
// With the defineProperty method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the defineProperty method, they are by default not enumerable. The Object.keys method returns all enumerable property names from an object, in this case only "name".

// Properties added using the defineProperty method are immutable by default. You can override this behavior using the writable, configurable and enumerable properties. This way, the defineProperty method gives you a lot more control over the properties you're adding to an object.

// 63. What's the output?
// let num = 10;

// const increaseNumber = () => num++;
// const increasePassedNumber = number => number++;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// console.log(num1);
// console.log(num2);
// A: 10, 10
// B: 10, 11
// C: 11, 11
// D: 11, 12
// Answer
// Answer: A
// The unary operator ++ first returns the value of the operand, then increments the value of the operand. The value of num1 is 10, since the increaseNumber function first returns the value of num, which is 10, and only increments the value of num afterwards.

// num2 is 10, since we passed num1 to the increasePassedNumber. number is equal to 10(the value of num1. Again, the unary operator ++ first returns the value of the operand, then increments the value of the operand. The value of number is 10, so num2 is equal to 10.

// 69. What's the output?
// const name = 'Lydia Hallie';
// console.log(name.padStart(13));
// console.log(name.padStart(2));
// A: "Lydia Hallie", "Lydia Hallie"
// B: " Lydia Hallie", " Lydia Hallie" ("[13x whitespace]Lydia Hallie", "[2x whitespace]Lydia Hallie")
// C: " Lydia Hallie", "Lydia Hallie" ("[1x whitespace]Lydia Hallie", "Lydia Hallie")
// D: "Lydia Hallie", "Lyd",
// Answer
// Answer: C
// With the padStart method, we can add padding to the beginning of a string. The value passed to this method is the total length of the string together with the padding. The string "Lydia Hallie" has a length of 12. name.padStart(13) inserts 1 space at the start of the string, because 12 + 1 is 13.

// If the argument passed to the padStart method is smaller than the length of the array, no padding will be added.

// 72. What's the output?
// console.log(String.raw`Hello\nworld`);
// A: Hello world!
// B: Hello
//      world
// C: Hello\nworld
// D: Hello\n
//      world
// Answer
// Answer: C
// String.raw returns a string where the escapes (\n, \v, \t etc.) are ignored! Backslashes can be an issue since you could end up with something like:

// const path = `C:\Documents\Projects\table.html`

// Which would result in:

// "C:DocumentsProjects able.html"

// With String.raw, it would simply ignore the escape and print:

// C:\Documents\Projects\table.html

// In this case, the string is Hello\nworld, which gets logged.

// 75. What's the output?
// const box = { x: 10, y: 20 };

// Object.freeze(box);

// const shape = box;
// shape.x = 100;

// console.log(shape);
// A: { x: 100, y: 20 }
// B: { x: 10, y: 20 }
// C: { x: 100 }
// D: ReferenceError
// Answer
// Answer: B
// Object.freeze makes it impossible to add, remove, or modify properties of an object (unless the property's value is another object).

// When we create the variable shape and set it equal to the frozen object box, shape also refers to a frozen object. You can check whether an object is frozen by using Object.isFrozen. In this case, Object.isFrozen(shape) returns true, since the variable shape has a reference to a frozen object.

// Since shape is frozen, and since the value of x is not an object, we cannot modify the property x. x is still equal to 10, and { x: 10, y: 20 } gets logged.

// var status = '😎';

// setTimeout(() => {
//   const status = '😍';

//   const data = {
//     status: '🥑',
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus());
//   console.log(data.getStatus.call(this));
// }, 0);
// A: "🥑" and "😍"
// B: "🥑" and "😎"
// C: "😍" and "😎"
// D: "😎" and "😎"
// Answer
// Answer: B
// The value of the this keyword is dependent on where you use it. In a method, like the getStatus method, the this keyword refers to the object that the method belongs to. The method belongs to the data object, so this refers to the data object. When we log this.status, the status property on the data object gets logged, which is "🥑".

// With the call method, we can change the object to which the this keyword refers. In functions, the this keyword refers to the the object that the function belongs to. We declared the setTimeout function on the global object, so within the setTimeout function, the this keyword refers to the global object. On the global object, there is a variable called status with the value of "😎". When logging this.status, "😎" gets logged.

// 85. What kind of information would get logged?
// fetch('https://www.website.com/api/user/1')
//   .then(res => res.json())
//   .then(res => console.log(res));
// A: The result of the fetch method.
// B: The result of the second invocation of the fetch method.
// C: The result of the callback in the previous .then().
// D: It would always be undefined.
// Answer
// Answer: C
// The value of res in the second .then is equal to the returned value of the previous .then. You can keep chaining .thens like this, where the value is passed to the next handler.

// 86. Which option is a way to set hasName equal to true, provided you cannot pass true as an argument?
// function getName(name) {
//   const hasName = //
// }
// A: !!name
// B: name
// C: new Boolean(name)
// D: name.length
// Answer
// Answer: A
// With !!name, we determine whether the value of name is truthy or falsy. If name is truthy, which we want to test for, !name returns false. !false (which is what !!name practically is) returns true.

// By setting hasName equal to name, you set hasName equal to whatever value you passed to the getName function, not the boolean value true.

// new Boolean(true) returns an object wrapper, not the boolean value itself.

// name.length returns the length of the passed argument, not whether it's true.

// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// for (const [x, y] of Object.entries(person)) {
//   console.log(x, y);
// }
// A: name Lydia and age 21
// B: ["name", "Lydia"] and ["age", 21]
// C: ["name", "age"] and undefined
// D: Error
// Answer
// Answer: A
// Object.entries(person) returns an array of nested arrays, containing the keys and objects:

// [ [ 'name', 'Lydia' ], [ 'age', 21 ] ]

// Using the for-of loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays instantly in the for-of loop, using const [x, y]. x is equal to the first element in the subarray, y is equal to the second element in the subarray.

// The first subarray is [ "name", "Lydia" ], with x equal to "name", and y equal to "Lydia", which get logged. The second subarray is [ "age", 21 ], with x equal to "age", and y equal to 21, which get logged.

// 94. What's the output?
// function getItems(fruitList, ...args, favoriteFruit) {
//   return [...fruitList, ...args, favoriteFruit]
// }

// getItems(["banana", "apple"], "pear", "orange")
// A: ["banana", "apple", "pear", "orange"]
// B: [["banana", "apple"], "pear", "orange"]
// C: ["banana", "apple", ["pear"], "orange"]
// D: SyntaxError
// Answer
// Answer: D
// ...args is a rest parameter. The rest parameter's value is an array containing all remaining arguments, and can only be the last parameter! In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error.

// function getItems(fruitList, favoriteFruit, ...args) {
//   return [...fruitList, ...args, favoriteFruit];
// }

// getItems(['banana', 'apple'], 'pear', 'orange');
// The above example works. This returns the array [ 'banana', 'apple', 'orange', 'pear' ]

// 95. What's the output?
// function nums(a, b) {
//   if (a > b) console.log('a is bigger');
//   else console.log('b is bigger');
//   return
//   a + b;
// }

// console.log(nums(4, 2));
// console.log(nums(1, 2));
// A: a is bigger, 6 and b is bigger, 3
// B: a is bigger, undefined and b is bigger, undefined
// C: undefined and undefined
// D: SyntaxError
// Answer
// Answer: B
// In JavaScript, we don't have to write the semicolon (;) explicitly, however the JavaScript engine still adds them after statements. This is called Automatic Semicolon Insertion. A statement can for example be variables, or keywords like throw, return, break, etc.

// Here, we wrote a return statement, and another value a + b on a new line. However, since it's a new line, the engine doesn't know that it's actually the value that we wanted to return. Instead, it automatically added a semicolon after return. You could see this as:

// return;
// a + b;
// This means that a + b is never reached, since a function stops running after the return keyword. If no value gets returned, like here, the function returns undefined. Note that there is no automatic insertion after if/else statements!

// 97. What's the output?
// const info = {
//   [Symbol('a')]: 'b',
// };

// console.log(info);
// console.log(Object.keys(info));
// A: {Symbol('a'): 'b'} and ["{Symbol('a')"]
// B: {} and []
// C: { a: "b" } and ["a"]
// D: {Symbol('a'): 'b'} and []
// Answer
// Answer: D
// A Symbol is not enumerable. The Object.keys method returns all enumerable key properties on an object. The Symbol won't be visible, and an empty array is returned. When logging the entire object, all properties will be visible, even non-enumerable ones.

// This is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents accidental name collision on objects, for example when working with 2 libraries that want to add properties to the same object), you can also "hide" properties on objects this way (although not entirely. You can still access symbols using the Object.getOwnPropertySymbols() method).
