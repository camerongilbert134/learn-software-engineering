# Javascript

When developing the backend of an application there are plenty of languages to choose from. Often times since the frontend of an application is built in using Javascript developers will choose to write the backend of an application in the same language to reduce cognitive load.

It is important to remember that Javascript was designed for the browser first and because of that it has some quirks that you won't find in other languages. Luckily these quirks are often either easily avoidable through following best practices or are just unlikely to be run into altogether.

# Node

In order to run Javascript on the server we need an application known as a `runtime` in order to use the code we write. Nodejs is the most popular Javascript runtime for running code on the server.

Node includes a bunch of libraries to help you interact with your the computer. This includes libraries for interacting with files or setting up complex networks.

Node has a vast open source community who have created and abundance of libraries to make solving nearly any problem a breeze. These libraries can help you with, setting up server, software testing, and even libraries to help you build the frontend of your websites.

## Installing Node

There are a couple of ways to install Node. 

You can get node directly from their website here: https://nodejs.org/en/

If you are comfortable with the command line you could use nvm(node version manager) that makes installing, upgrading, and switching between versions of node quick and easy.

Linux and MacOS: https://github.com/nvm-sh/nvm
Windows: https://github.com/coreybutler/nvm-windows

After you have installed node open up your command line and check that it is setup. Run the following command:

```bash
node --version
```
And you should see the version printed to your command line.

## Your first application
 
As with every application let's start with a simple hello world example. We are going to print "Hello, World!

Create a file with the name `hello.js`. Inside that file write the following code:

```js
console.log("Hello, world!");
```

In the above code we are using the `console` global object that can be accessed anywhere in your javascript code. We are then accessing the `log` function that is attached to that object. This log function will print the message it recieves as an input to the console.

To run this code you will need to open up your command line, navigate to where your code is stored, and then run the following command:

```bash
node hello.js
```

Afterwards you will see the message "Hello, world!" displayed in your command line!

Now you may be wondering what is with the semicolon. In a lot of language semicolons are required when you are finished with a line. In javascript they are optional due to a feature called Automatic Semicolon Insertion. Basically the language will place the semicolons for you at runtime when it thinks you forgot one. This can cause problems in a few edge cases or if you don't style your code well. It's probably best to use them as that tends to be a common practice anyway and you will avoid any ambiguity.

## Defining variables

In javascript there are 3 ways to add variables. One of them is always wrong and if I catch you using it then you are kicked out of the class :)

In all three of these ways you start with a keyword then follow it with the name of the variable then an equal sign and finally what you are setting the variable to.

Let's start with the 2 correct ways.

### let

The first way is the `let` keyword. The `let` keyword lets you define a mutable variable. This means that you can change the variable after setting it. This could look like the following:

```js
let message = "Hello, Wrld!";
message = "Hello, World!"; // oops typo above ;)
let message = "Hello, Universe!"; // This will throw an error.
```

As you can see when you redefine the variable it does not use the `let` keyword again. You only use the keyword when initialy defining the variable. Trying to use it again within the same scope will cause an error.

### const

The next way is the `const` keyword. Using this keyword defines a variable that cannot be changed after setting.

```js
const message = "Hello, Wrld!";
message = "Hello, World!"; // This will throw an error.
```

### var

You can also use the `var` keyword but that is the wrong way since `var` does not respect scope. Back in the old days `let` and `const` didn't exist. Now they do so don't use `var`!

### Variable Scope

I mentioned scope a couple times and I want to give a brief explaination. The short explaination is almost everytime you see these `{}` brackets anything inside will be in a different scope. Any variables inside the new scope can have the same name as variables outside the scope but if you use that name in the scope then you can't access the original variable from within that scope at all. Once the `}` is reached then all variables in that scope are forgotten. A couple quick example using a javascript `function` which we will be going over later.

```js
const message = "message1";
console.log(message); // prints "message1"
function someFunction() {
    const message = "message2";
    console.log(message); // prints "message2"
}
someFunction();
console.log(message); // prints "message1"
```

```js
const message = "message1";
console.log(message); // prints "message1"
function someFunction() {
    console.log(message); // prints "message1"
}
someFunction();
```

```js
const message = "message1";
console.log(message); // prints "message1"
function someFunction() {
    console.log(message); // throws an error since the message was defined in this scope. Even though it is defined afterwards.
    const message = "message2";
}
someFunction();
```

## Basic types, object literals and arrays.

Now that you know how to define variable let me teach you the basic types you could use to define a variable.

### boolean

The most basic value in any language is a boolean. A boolean can be either true or false.

```js
const isTrue = true;
const isFalse = false;
```

### number

Numbers can be whole numbers, decimals, negatives, or positives.

```js
const wholeNumber = 50;
const decimalNumber = 3.1415;
const negativeNumber = -20;
```

### string

Strings are used to define text. When defining a string the text must be wrapped in quotes of some sort. You may use single or double quotes. You may even use backticks to wrap your strings and when you do you will have access to some additional functionality which we will go over next. That is because strings wrapped in backticks are `template strings`.

```js
const message1 = "Hello, Cam!";
const message2 = 'Hello, Talon!';
const message3 = `Hello, World!`;
```

You can also use 3 backticks in a row to create multiline strings like this.

````js
let testing = ```
testing
testing
testing
```;
````
<br>

#### typeof

You can check the type of a variable with the `typeof` keyword. This gives you the type as a string.

```js
const whatType = typeof 10;
console.log(whatType); // prints "number"
```

### Object literals

To store information together when it is related. The easiest way to do that is with an object defined by an object literal. To do that we place `{}` after the `=` when defining a variable. This is a simple keyvalue store. The key will be on the left and the value will be on the right and they will be seperated by a colon `:`. After each keyvalue combo is defined you need to add a comma before defining the next keyvalue combo. If you define a key with a character not allowed in javascript variable names such as `-` then you will need to wrap the keyname in quotes.

To access these values you can either add a `.` at the end of the variable name followed by the key or you can add `[""]` after the variable name and put the key name inside the quotes. Most of the time the `.` is preferred when possible but some characters not allowed in the js language require you to use the brackets and quotes.

```js
const emptyObject = {};
const someConfig = {
    host: "localhost",
    "port-number": 8080 // had to wrap the key in quotes due to the "-" in the name.
};

console.log(someConfig.host); // Will print "localhost"
console.log(someConfig["port-number"]); // Will print "8080"
```

### Arrays

If you want to group information in a list instead you can create an array. To create an array you put `[]` after the equal sign when creating a variable. Inside the brackets you can put any values you want seperated by commas.

To access these variables you add `[]` at the end of the variable name and inside the brackets you put the index of the item in the array. Indexes in javascript start at 0. The first item in an array will have that 0 index and and for every item afterwards the index will increment.

```js
const emptyArray = [];
const array = [ "testing", 42, true ];

console.log(array[0]); // will print "testing"
console.log(array[1]); // will print "42"
console.log(array[2]); // will print "true"
```

## Basic string manipulation

Two basic string manipulations I want to go over is adding strings together and taking part of a string.

### String concatenation

String concatenation is the process of putting 2 strings together. There are two ways to do that. The first is to simply use the `+` operator to add strings together.

```js
const message1 = "Hello";
const message2 = " people of the ";
const message3 = "world!";
const fullMessage = message1 + message2 + message3;

console.log(fullMessage); // Will print "Hello people of the World!"
```

The other way is by using some of that added functionality for template string. Inside a template string you can use `${}` to place content in the middle of a string. Whatever is inside the squigly brackets gets added to the string.

```js
const message1 = "Hello";
const message2 = "people of the";
const message3 = "world!";
const fullMessage = `${message1} ${message2} ${message3}`; // Will print "Hello people of the World!"
```
###### Special Note: With strings and other types: If you attempt to mix a string with another type then it will treat the other type as a string as well. So `"testing" + 123` would create a string of `testing123`.
<br>

### Substrings and indexOf

Strings have a bunch of built in methods. Two of the most common methods you will need are the `substring` methods and the `indexOf` method. To access a method for any given object you add a `.` after the variable name or string followed by the name of the method then you put `()` which calls the method. If the method has any parameters then you put the parameters in the `()` parenthesis seperated by commas.

The `substring` method can take 2 parameters. The first one is the the start index and the second one is the end index. The `substring` will not include the character at the end index but only up to it. Remember indexes start at 0.

Here is an example:

```js
const message = "Hello, World";
const hello = message.substring(0, 5);
console.log(hello); // prints "Hello"
```

If you don't know what the string is before hand often you will need to use the `indexOf` method to help find where what you are looking for is. The `indexOf` method takes one parameter and it is basically a search string. It will give you back the first index of whatever it string you give it in the string your calling it on. You can then use this index in the `substring` method!

```js
const message = "Hello, World";
const worldIndex = message.indexOf(", World");
const hello = message.substring(0, worldIndex);
console.log(hello); // prints "Hello"
```

## Arithmetic

Math is a pretty important part of most applications so of course javascript has a bunch of built in operators to work with numbers. When working with numbers it will look just like algebra except the single character variable names will now be your programming variable names.

### The `+` operator

This operator is used for addition.

```js
const value = 5 + 6; // value is set to 11.
```

### The `-` operator

This operator is used for subtraction.

```js
const value = 20 - 7; // value is set to 13.
```

### The `*` operator
This operator is used for multiplication.

```js
const value = 15 * 3; // value is set to 45.
```

### The `/` operator
This operator is used for division.

```js
const value = 100 / 10; // value is set to 10.
```

### The `%` operator
This operator is used for modulo division. Modulo division will get the remainder when from a division operation. Just like you were probably taught when first learning division in elementary school!

```js
const value = 10 / 3; // value is set to 1 since 3 goes into 10, 3 times and has 1 left over.
```

### The increment `++` operator

The increment operator adds 1 to whatever variable it was used on.

```js
let value = 0;
value++;
++value; // value is now 2.
```

### The decrement `--` operator

The increment operator adds 1 to whatever variable it was used on.

```js
let value = 2;
value--;
--value; // value is now 0.
```

## Assignment operators

Assignment operators are used to assign variables. You have already used one extensively and that is the `=` operator but there are a few more.

### The `=` operator

This operator is used to assign a variable.

```js
let value = 10; // value is set to 10.
```

### The `+=` operator

This operator is used to reassign a variable to itself plus whatever is on the right side of the operator.

```js
let value = 10;
value += 5; // value is set to 15.
```

### The `-=` operator

This operator is used to reassign a variable to itself minus whatever is on the right side of the operator.

```js
let value = 10;
value -= 5; // value is set to 5.
```

### The `*=` operator

This operator is used to reassign a variable to itself times whatever is on the right side of the operator.

```js
let value = 10;
value *= 5; // value is set to 50.
```

### The `/=` operator

This operator is used to reassign a variable to itself divided by whatever is on the right side of the operator.

```js
let value = 10;
value /= 5; // value is set to 2.
```

### The `%=` operator

This operator is used to reassign a variable to itself modulo divided by whatever is on the right side of the operator.

```js
let value = 10;
value %= 3; // value is set to 1.
```

## Logical operators

Logical operators are used to create true or false values.

### The NOT `!` operator

This operator will flip a boolean true or false value.

```js
console.log(!true); // prints false
console.log(!false); // prints true
```

### The OR `||` operator

This operator will return true if either side of the operator is true.

```js
console.log(true || true); // prints true
console.log(true || false); // prints true
console.log(false || false); // prints false
```

### The AND `&&` operator

This operator will return true only if both sides of the operator are true.

```js
console.log(true || true); // prints true
console.log(true || false); // prints false
console.log(false || false); // prints false
```

### The strict equality `===` operator

This operator will return true if both sides are equal.

```js
console.log(true === true); // prints true
console.log(true === false); // prints false
console.log(false === false); // prints true
console.log(5 === 2 + 3); // prints true
console.log(5 === 2 + 2); // prints false
console.log("test" === "test"); // prints true
console.log("test" === "nottest"); // prints false
```
##### Special Note: There is also an `==` operator. Do not use it. The `==` operator is not strict so the following would be true `5 == "5"`

### The strict inequality `!==` operator

This operator will return true if both sides are not equal.

```js
console.log(true !== true); // prints false
console.log(true !== false); // prints true
console.log(false !== false); // prints false
console.log(5 !== 2 + 3); // prints false
console.log(5 !== 2 + 2); // prints true
console.log("test" !== "test"); // prints false
console.log("test" !== "nottest"); // prints true
```

##### Special Note: There is also an `!=` operator. Do not use it. The `!=` operator is not strict.

### The greater than `>` operator

This operator will return true if the left side is greater than the right.

```js
console.log(5 > 3 + 3); // prints false
console.log(5 > 2 + 3); // prints false
console.log(5 > 2 + 2); // prints true
```

### The less than `<` operator

This operator will return true if the left side is less than the right.

```js
console.log(5 < 3 + 3); // prints true
console.log(5 < 2 + 3); // prints false
console.log(5 < 2 + 2); // prints false
```

### The greater than or equal to `>=` operator

This operator will return true if the left side is greater than or equal to the right.

```js
console.log(5 >= 3 + 3); // prints false
console.log(5 >= 2 + 3); // prints true
console.log(5 >= 2 + 2); // prints true
```

### The less than or equal to `<=` operator

This operator will return true if the left side is less than or equal to the right.

```js
console.log(5 <= 3 + 3); // prints true
console.log(5 <= 2 + 3); // prints true
console.log(5 <= 2 + 2); // prints false
```

## Order of operations and Parenthesis

It is important to know that order of operations work as expected for mathematical operations.

Logical operator have there own order of operations.

1. Not: !
2. Comparison, e.g. < , >= , === , !=, ...
3. Logical AND &&
4. Logical OR ||

### Parenthesis

If you ever need to change the order of operations feel free to throw around as many parenthesis as you need. Parenthesis work in both logical and mathematical operations.

```js
console.log(
    (5 + 3) * 10 >= 50 || (60 / 30 === 2 && 5 * 2 < 1)
); // Prints true
```

## Control flow

A lot of time you want to be able to control what code is being run based on certain conditions. The 2 ways designed to do this are `if` statements and `switch`s.

### if

An `if` statement is given a condition and if the condition is true then the code is run. The `if` statement is written by putting the word `if` followed by parenthesis. In the parenthesis you will put the condition you want to check. After the parenthesis you will need to put `{}` squigly brackets. Inside the squigly brackets you will put the code you want to run if the condition is true.

```js
if (2 + 3 === 5) {
    console.log("That is definitely 5.");
}
```

You can also extend your `if` statements by adding `else if` after the squigly brackets. This is used to check another condition and run code when that condition is true. You can add as many `else if`'s as you need. This will only be checked if the original `if` statement was false and any other prior `else if`'s were false.

```js
if (2 + 1 === 5) {
    console.log("this would not run");
} else if (2 + 2 === 5) {
    console.log("this would not run");
} else if (2 + 3 === 5) {
    console.log("That is definitely 5.");
} else if (5 === 5) {
    console.log("This may also be 5 but it won't print since the prior else if was entered");
}
```

And lastly you may add an `else` at the end of an if statement for when none of the conditions are true. Since you aren't checking a specific condition you do not need the parenthesis's here.

```js
if (2 + 1 === 5) {
    console.log("this would not run");
} else if (2 + 2 === 5) {
    console.log("this would not run");
} else {
    console.log("None of these were 5 :(");
}
```

### switch

Switches are another way to control the flow of an application. A `switch` statement takes a value and then compares it to a bunch of cases. You start by writing the `switch` key word then you add parenthesis and put the value you want to check inside. Afterwards you put `{}` squigly brackets. Inside the squigly brackets you will add the `case` keyword followed by the comparing value. Then you will need to add a `:` and enter a newline. At this point you add the code to be run. When you want to add another case then at the end of the code you wrote add the word `case` again and repeat for as many cases as you have. You can add a `default` case at the end with the `default` keyword followed by a `:`.

One special thing to note is that once a case has been met any code after that case will run even if it is part of another case. Sometimes this is desired but if you only want a single case to run then before adding another case you can add a `break` key word before defining new cases.

```js
const name = "Nathan";
switch (name) {
    case "Nathan":
        console.log("That's a cool dude.");
        break;
    case "Talon":
    case "Cam":
        console.log("eh they are okay I guess");
        break;
    default:
        console.log("THAT'S MY PURSE! I DON'T KNOW YOU!");
}
```

## Loops

Loops are used to do repetitive actions. There are multiple loop types to fit your needs.

### while loops

This loop will run until it's condition is met. You define the loop with the `while` keyword followed by `()` parenthesis with the condition in the parenthesis. You then add `{}` brackets and put the code for the loop to run inside.

```js
while (true) {
    console.log("This is an infinite loop");
}

let i = 0;

while (i < 100) {
    console.log(i); // will log 0-99
    i++;
}
```

### for loops

`for` loops are a bit more structured then while loops and are designed in a way that should help you avoid infinite loops if you don't want them. Just like while loops you will use the keyword, in this case `for`, followed by parenthesis and the then `{}` where your code will run. In the parenthesis for the `for` loop thing look a little bit different. There are 3 parts. First you will define a variable, then you will define the condition that needs to be met in order for the loop to stop and lastly you will define an action that you want to do at the end of every loop. These 3 parts will need to be seperated by semicolons `;`.

```js
for (let i = 0; i < 100; i++) {
    console.log(i); // will log 0-99
}
```

### for of loops

This is the best darn loop and no one can convince me otherwise. This loop is perfect for running an action on every item in an array. You can also loop through every character in a string easily! The way this loop works is by defining a for loop but instead of what you normally put in the parenthesis you will define a variable that will be used to hold the array element you are iterating through but don't assign anything to it. Then add the `of` keyword followed by the name of the array you want to loop through.

```js
let nameList = ["Nathan", "Cam", "Talon"];

for (const name of nameList) {
    console.log(name); // This will print all of our names individually!
}

for (const char of "Nathan is the coolest"){
    console.log(char); // Will print every individual letter of the string above.
}
```

### for in loops

`for in` loops are more rare then the above but they certainly have a place. A for in loop will look just like a `for of`. Except you will use the word `in` instead of `of`. The variable you are setting in the loop definition will instead be set to the list index. You can also loop through an objects properties with this loop.

```js
let nameList = ["Nathan", "Cam", "Talon"];

for (const nameIndex in nameList) {
    console.log(nameIndex); // This will print "0", "1", "2"
}

let config = {
    host: "localhost",
    port: 8080
}

for (const configKey in config) {
    console.log(configKey); // This will print "host", and "port"
    console.log(config[configKey]); // This will print, "localhost", "8080"
}
```

### break and continue

The `break` keyword from the switch can also be used in a loop. This will stop the loop immediately so no more code inside of it will run.

The `continue` keyword is used to stop the current iteration of the loop but not the whole loop itself.

```js
while (true) {
    break; // This loop stops immediately.
}

while (true) {
    continue; // This starts the loop from the top. So this is still and infinite loop.
    console.log("this will never run"); // But this will never log.
}
```

## Functions

Functions allow you to make your code reusable. A vast majority of the code you write will be in a `function`. To define a `function` we need to use the `function` keyword followed by the name we want to give the function. We follow that up with parenthesis `()`. Inside the parenthesis we will need to put the names of the parameter we want the function to be able to use. For multiple parameters you will need to seperate them by commas. After the parenthesis you will put the `{}` squigly brackets and then put the code you want to run when the function is called inside.

```js
function print2(message1, message2) {
    console.log(message1);
    console.log(message2);
}
```
To call this function we need to put the function name, followed by parenthesis with what we want the function to use for the parameters inside seperated by commas.

```js
print2("Hello", "dudes")
```

Functions can also return a value for you to use. We do that with the `return` keyword followed by the value that we want to return. Once a function returns a value it stops running new code. Any async code that has already started will keep going.

```js
function printWithWrapper(message, wrapper) {
    return `${wrapper}${message}${wrapper}`;
    console.log("this will not print");
}

console.log(printWithWrapper("Hello", "~")); // prints "~Hello~"
```

### Lambdas

You can also define functions in the form of lambdas. The main purpose of lambdas is for when you pass in a function as a parameter to another function. Yes you can pass a function into another function to be used. To define a lambda we do that like any other variable. We assign the variable to a function by putting `() => {}` at the right side of the assignment operator `=`. The parenthesis are used the same way as a functions parenthesis and are used to define the parameters and inside the squigly brackets you put the code you want to run.

This is very common in old asyncronous code where the lambda is used to determine what runs after the async process is finished.

```js
const buttonClickListener = () => {
    console.log("button clicked!");
}
button.addEventListener("click", buttonClickListener);

database.fetch(someQuery, (error, data) => {
    if (error) {
        console.error(error);
    }

    doSomethingWithData(data);
});
```

## Error Handling

Error handling is another way to do control flow but it really only makes sense once you know what functions are. In a function you have the option to `throw` an error which will stop the function from running and send the error back to where ever the function was called. You can throw an error outside of a function but it will just stop your application entirely. We use the `throw` keyword similarly to how we use the `return` keyword as seen below.

```js
function throwOnTrue(option) {
    if (option) {
        throw "ERROR!";
    }

    return "SUCCESS!";
}
throwOnTrue(true);
```

Our code will output the following error.

```
c:\Users\natha\Documents\GitHub\learn-software-engineering\server-development\node-javascript-typescript\1-javascript-and-node-rundown\hello.js:3
        throw "ERROR!";
        ^
ERROR!
```

### Error Class

We will go into classes more later but right now I just need to teach you how to create an Error object. To create an error object you need to write the following: `new Error()`. Inside the parenthesis you would but the message you want to send. Always do this when throwing an error instead of what I did above. I will write all my errors like this from now on. Just know `Error` is a class and the `new` keyword is related to how you create instances of a class.

```js
function throwOnTrue(option) {
    if (option) {
        throw new Error("ERROR!");
    }

    return "SUCCESS!";
}
throwOnTrue(true);
```

The reason we want to create an error object is because when the error is thrown it will give us a stack trace as well. A stack trace is useful for debugging as it gives information about where the error occured.

The error in this code will look like this:

```
c:\Users\natha\Documents\GitHub\learn-software-engineering\server-development\node-javascript-typescript\1-javascript-and-node-rundown\hello.js:3
        throw new Error("ERROR!");
        ^

Error: ERROR!
    at throwOnTrue (c:\Users\natha\Documents\GitHub\learn-software-engineering\server-development\node-javascript-typescript\1-javascript-and-node-rundown\hello.js:3:15)
    at Object.<anonymous> (c:\Users\natha\Documents\GitHub\learn-software-engineering\server-development\node-javascript-typescript\1-javascript-and-node-rundown\hello.js:9:1)
    at Module._compile (node:internal/modules/cjs/loader:1109:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1138:10)
    at Module.load (node:internal/modules/cjs/loader:989:32)
    at Function.Module._load (node:internal/modules/cjs/loader:829:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47
```

### Try catch

Now most of the time you don't want your code to just fail when an error is thrown. You want to handle the error. To do this we use a `try catch`. This allows us to `try` some code and if an error occurs we can handle it in the `catch`. To do this we add the `try` keyword followed by `{}` squigly brackets. Inside the squigly brackets you will put the code you want to try. After the squigly brackets you will put the `catch` keyword. You then have the option to access the error or not. If you put `(error)` after the `catch` keyword you will have access to the error in the following squigly brackets. After the `catch` or the parenthesis you will need to put squigly brackets `{}`. Inside this second squigly bracket pair you will define what code to run when an error occurs.

```js
try {
    throwOnTrue(true);
    console.log("if an error is thrown this will not print")
} catch {
    console.error("this will print if an error is thrown but won't if one isnt");
}
```

```js
try {
    throwOnTrue(true);
} catch (err) { // Use whatever name for an error you want.
    console.error(err);
}
```

### Finally

After the catch you can also define a `finally` block. This will run regardless of if an error occurs in the `try` block.

```js
try {
    throwOnTrue(true);
} catch {
    console.log("log error");
} finally {
    console.log("will always log");
}
```

You can also add a finally without a catch but the error will not be caught. Sometimes this is desirable if you want whatever is calling your function to handle the error but still have more code to run after it.

```js
try {
    throwOnTrue(true);
} finally {
    console.log("this will always run");
}

console.log("this will not run if there was an error");
```

### More in the next section

When it comes to asyncronous code there are a couple other common ways to deal with errors. We will go over those in the next section as we talk about how to write asyncronous code.

## Async code

When communicating across a network you will need to write asyncronous code since you will not get a response instantly. The same is true for working with a file system while you wait for a disk to write.

### Callbacks

The oldest way to write asyncronous code is to use callbacks. Callbacks are just lambdas that you pass into a function. The function should be designed to use the lambda once the asyncronous code has finished. For example javascript has a built in `setTimeout` function that will allow you to define code to run after a certain amount of milliseconds. The first is the callback and the second is the amount of milliseconds to wait before running the callback.

```js
setTimeout(() => {
    console.log("will print after 5 seconds");
}, 5000);
```
#### Error handling with callbacks

In a vast majority of cases to handle errors in a callback a library will want you to put a parameter for possible errors. This is generally the first parameter and the second would be the data the asyncronous code is trying to give you to work with. Generally you just need to check if the error exists and handle it if there is one. You can generally assume if there is an error then there is no data.

```js
database.fetch(someQuery, (error, data) => {
    if (error) {
        console.error(error);
    }

    doSomethingWithData(data);
});
```

#### Writing a function that accepts a callback

To create a function that takes a callback you will need to use one of your parameters as a function. That's it. You should document how the function works so other know how to use your callback.


```js
function doAfterFiveSeconds(callback) {
    setTimeout(() => {
        callback();
        console.log("DONE!");
    }, 5000);
}
```

If you don't need the log you can also simplify the above code by just passing callback to setTimeout as a parameter.

```js
function doAfterFiveSeconds(callback) {
    setTimeout(callback, 5000);
}
```

#### The problem with callbacks... CALLBACK HELL 🔥😈🔥

The biggest problems with callbacks is they encourage a lot of indentation. Imagine a case where we have to lookup a user on a database, make an api call and then make a change to that user in the database and to top it all off write a file somewhere. That is 4 async calls that need to be done one after another. This would look something like the following.

```js
database.fetch(userSelectQuery, (error, user) => {
    if (error) {
        console.error(error);
    }

    api.getWithUserInfo(user, (error, apiCallData) => {
        if (error) {
            console.error(error);
        }

        const userUpdateQuery = createUserUpdateQuery(user, apiCallData);
        
        database.fetch(userUpdateQuery, (error) => {
            if (error) {
                console.error(error);
            }
            
            let fileData = createFileData(user);
            
            fs.writeFile(`./${Date.now()}-${user.name}.txt`, fileData, (error) => {
                if (error) {
                    console.error(error);
                }

                console.log("FULLY SUCCESSFUL!");
            });
        });
    });
});
```

This is a fairly normal example and it already looks partially hellish. For cases where you do a lot of async calls this pattern becomes hard to reason about.

### Promises

Given the problem of callback hell, javascript needed another solution. In come Promises! A `Promise` is a class much like ther `Error` class. When creating a new promise you will define a callback parameter in the Promise parameters. This call back will itself include parameters which will be callbacks that you control! These are the resolve and `resolve` and `reject` paramaters.

```js
new Promise((resolve, reject) => {
    try {
        throwOneTrue(true);
        resolve("success!");
    } catch (err) {
        reject(err);
    }
});
```

#### Resolve callback

The resolve callback is used to return a value when your async code is finished. Just call the function with the return value as a parameter.

#### Reject callback

The reject callback is used to throw an error if the code fails. Just call the function with the error value as a parameter.

#### then

In order to run code after the promise is complete you will need to call the `then` method on the promise. The `then` method takes an callback that has a parameter for the return value. The callback you define here in `then` is the same callback being called when you call `resolve` in a promise.

```js
function waitAndDouble(milliseconds, value) {
    return new Promise((resolve) => { // no need to add reject if we won't use it.
        setTimeout(() => {
            resolve(value * 2);
        }, milliseconds);
    });
}

waitAndDouble(5000, 15).then((doubledValue) => {
    console.log(doubledValue); // Will print 30.
});
```

#### catch

In order to catch the error from the reject callback you will need to use the `catch` method. Just like the `then` method the `catch` method takes a callback with a parameter that holds the error. This callback is the what will be called when `reject` is used in the above function.

```js
function rejected() {
    return new Promise((resolve, reject) => {
        reject(new Error("REJECTED!"));
    });
}

rejected().catch((err) => {
    console.error(err);
});
```

#### chaining

To mimic a full try catch you can chain a then and a catch together.

```js
function throwIfNotTrue(value) {
    return new Promise((resolve, reject) => {
        if (value) {
            resolve(value);
        } else {
            reject(new Error("ERROR!"));
        }
    });
}

throwIfNotTrue(true).then((value) => {
    console.log(value); // prints true
}).catch((error) => {
    console.error(error);
});
```

You may be wondering how this solves callback hell. With the power of chaining we can avoid callback hell. You can return a promise in your `then` callbacks and chain another then afterwards. The catch can be placed at the end to catch errors from any of the promises in the chain. In the callback hell example above it would look more like this with promises.

```js
database.fetch(userSelectQuery)
    .then((user) => {
        return api.getWithUserInfo(user);
    })
    .then((apiData) => {
        const userUpdateQuery = createUserUpdateQuery(user, apiData);
        return database.fetch(userUpdateQuery);
    })
    .then(() => {
        let fileData = createFileData(user);
            
        return fs.writeFile(`./${Date.now()}-${user.name}.txt`, fileData);
    })
    .then(() => {
        console.log("FULLY SUCCESSFUL!");
    })
    .catch((error) => {
        console.error(error)
    });
```

Callback hell is solved but this still involves a lot of code to get working... There's got to be a better way!!!

### Async Await

Well yes there is... Incomes async await! Async await introduces another type of function called an `async function`. An `async function` is equivalent to a normal `function` that returns a `Promise` and when you `return` from an `async function` it is the equivalent of calling the `resolve` callback in your promise and when you `throw` an `Error` it is the equivalent of calling the `reject` callback in your promise. In order to wait for the result they have added the `await` keyword. You can use `await` in the top level of your script(not inside a function or class) or from within any `async function`. An `async function` looks just like a regular function except it has the word `async` before the word `function`. You can `await` by adding the await keyword before your promise. This does not need to be immediately when you create the promise. If you store the promise in a variable you can always await later.

```js
async function throwIfNotTrue(value) {
    if (value) {
        return value;
    } else {
        throw new Error("ERROR!");
    }
}

const thrown = throwIfNotTrue(true);
await thrown();

function doesNotWork() {
    const value = await throwIfNotTrue(true); // This will not work since you can't await from a normal function.
    console.log(value);
}
```

Since async functions are just functions that return promises you can still use `then` and `catch` if you need to. For example in the example above from a normal `function` we could do this instead.

```js
function works() {
    throwIfNotTrue(true)
        .then((value) => {
            console.log(value)
        })
        .catch((error) => {
            console.error(error);
        });
}
```

#### Note about async / await and callbacks

Async / Await does not play nice with callbacks. You can use callbacks in async functions but you can not await them and there is no work around. To use callbacks in an async function you will need to wrap the old library call that uses a callback with a promise and call resolve/reject when the callback is done.

Since async functions are just functions that return promises you can use `await` on promises as well!

Here is a simple example with setTimeout.

```js
function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

await wait(5000);

console.log("DONE!"); // will print after 5 seconds.
```

##### Special Note: In node you can not use `await` out side of async funtions unless your file ends in `.mjs` instead of `.js`. The other way is to change your package type to `module` instead of the default. We will get into packages and how to create them and work with them in the next lesson.

## Classes

We have gone over a couple basic classes like `Error` and `Promise`. But how do they work? What are they for? What is that `new` keyword about? Why am I asking you all these questions?!

A `class` is a data stucture that can store other variable and perform operations on those variables. To create a `class` we use the `class` keyword followed by the name of the class. Then we put `{}` squigly brackets and everything that defines our class will go in there.

The `new` keyword is to create a new instance of the class. An instance is an object with access to all the fields from the class. Each instance has it's own values in the fields. This instance also can use any methods defined in the class.

```js
class User {}

const user = new User();
```

### Fields, this and the Constructor

Now how do we store data in our class? To do this we need to add fields. Fields are defined at the top of your class. Each field will include a field name, an assignment operator `=` and then the value you are setting it to.

```js
class User {
    username = "CoolDudeNathan";
    password = "hunter2";
}

const user = new User();
console.log(user.username); // print "CoolDudeNathan"
```

But what about passing values from outside the class into the class? We can do that by creating a `constructor`. What we would do is not assign anything to the fields we want to assign something else to and then we assign them in the `constructor`. The `constructor` is a function that is called when you create a new instance with `new`. The parenthesis after you class name when you create a new instance is where you put the parameters you will describe in the `constructor`. In order to define a `constructor` we use the `constructor` keyword followed by parenthesis which will store our parameters and the then `{}` brackets where we will manipulate our class.

In order to assign something to a field in the current class you will need to use the `this` keyword. The `this` keyword allows you to access anything on your current instance. In the case of a constructor it helps you setup the instance initially. To use the `this` keyword you add a `.` after it followed by the name of the field or method you are trying to access.

You can also reassign fields with an assignment operator `=` when accessing them.

```js
class User {
    username;
    password;

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

const user = new User("CoolDudeNathan", "hunter2");
console.log(user.username); // print "CoolDudeNathan"
user.username = "CoolestDudeNathan";
console.log(user.username); // print "CoolestDudeNathan"
```

### Methods

Methods are a type of function that has access to the instance of the class it is defined in. This means you can use the `this` keyword in methods and manipulate the data in your class. To create a method you need to put the method name in your class, followed by parenthesis to put your parameters then lastly the `{}` that contains your code. You can `return` from methods and methods can be made `async` simply by `async` keyword before the method name!

```js
class User {
    username;
    password;

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    verifyPassword(password) {
        return this.password === password;
    }

    async updatePassword(password) {
        await SomeApi.updatePasswordForUser({
            username: this.username,
            password // short hand for "password: password"
        });

        this.password = password;
    }
}

const user = new User("CoolDudeNathan", "huner2");
console.log(user.verifyPassword("hunter2")); // false
await user.updatePassword("hunter2");
console.log(user.verifyPassword("hunter2")); // true
```

### Static

You can also define fields and methods on a class that do not have access to an instance of the class. This means you can access these methods and fields without creating an instance with the `new` keyword. Since the `static` methods can not access the instance directly you will not be able to access the `this` keyword from inside `static` methods.

```js
class User {
    static DB_TABLE_NAME = "users";
    username;
    password;

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    verifyPassword(password) {
        return this.password === password;
    }

    async updatePassword(password) {
        await SomeApi.updatePasswordForUser({
            username: this.username,
            password // short hand for "password: password"
        });

        this.password = password;
    }

    static getRepository() {
        return getRepoFor(User.DB_TABLE_NAME); // can access other static members from static context
    }
}

console.log(User.DB_TABLE_NAME); // prints "users"
const repo = User.getRepository(); // this would work assuming getRepoFor actually existed.
const someUser = new User("CoolDudeNathan", "hunter2");

console.log(someUser.DB_TABLE_NAME); // prints "users"
```

### Getters and Setters

I told you earlier you can use an assignment operator to set fields in a class. But what if you want to run some code on what you are assigning or even what you are getting when accessing the field. That is where getters and setters come in. Getters and setters are types of method. A getter returns something and takes no input and a setter takes one input and returns nothing. You may have a getter and setter of the same name. The getters and setters can be accessed just like fields. The getter is called automatically when you access the field like `user.username` and the setter is used when setting a field like `user.username = "someUsername";` and the parameter for the setter will be what you put on the right side of the assignment operator `=`.

To define a getter you just need to put `get` before method name and to define a setter you need to put `set` before the method name.

```js
class User {
    username;
    hashedPassword;

    constructor(username, password) {
        this.username = username;
        this.hashedPassword = hash(password);
    }

    verifyPassword(password) {
        return verifyHash(password, this.hashedPassword);
    }

    set password(password) {
        this.hashedPassword = hash(password)
    }

    get password() {
        return this.hashedPassword;
    }
}

const someUser = new User("CoolDudeNathan", "hunter2");
someUser.password = "hunter3"; // this password would be automatically hashed.
console.log(someUser.password) // retrieves the password hash other then the password itself.
```

If you try to set when you only defined a getter then the code will throw an error and if you try to get when you only defined a set the the code will throw an error.

```js
class User {
    username;
    hashedPassword;

    constructor(username, password) {
        this.username = username;
        this.hashedPassword = hash(password);
    }

    verifyPassword(password) {
        return verifyHash(password, this.hashedPassword);
    }

    set password(password) {
        this.hashedPassword = hash(password)
    }
}

const someUser = new User("CoolDudeNathan", "hunter2");
someUser.password = "hunter3"; // this password would be automatically hashed.
console.log(someUser.password) // would throw an error.
```

### Private

If you only want the code in your class to be able to access a given field or method then you can put a `#` before the name. This changes the name so for example `hashedPassword` would become `#hashedPassword`. This will also make the field private so it can't be accessed from outside of the class.

```js
class User {
    username;
    #hashedPassword;

    constructor(username, password) {
        this.username = username;
        this.#hashedPassword = hash(password);
    }

    verifyPassword(password) {
        return verifyHash(password, this.#hashedPassword);
    }

    set password(password) {
        this.#hashedPassword = hash(password)
        this.#printPasswordSet();
    }

    #printPasswordSet() {
        console.log("Password Set!");
    }
}

const someUser = new User("CoolDudeNathan", "hunter2");
console.log(someUser.#hashedPassword); // would throw an error.
someUser.#printPasswordSet() // would throw an error.
```

Getters, Setters, Static, and Async methods can all be defined as private this way.

### Inheritance and instanceOf

One useful trait of classes is inheritance. You can extend another class to use it's fields, methods and functionality. To do this after we define the class name we will add the `extends` keyword followed by the name of the class we want to extend.

If you do not define a constructor when extending a class the original constructor will be used. If you need to define your own constructor you can use the `super` function at the top of your constructor. The `super` function requires that you input all the original parameters required by the original constructor. What the `super` function does is run through the original constructor.

If you define a method with the same name as a method in the parent class then the new method will takes its place for the newly defined class. Essentially overriding the original method.

You can add as many new fields and methods to the new class as you would like.

```js
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    printFirstName() {
        console.log(this.firstName);
    }

    printLastName() {
        console.log(this.firstName);
    }

    printFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

class TitledPerson extends Person {
    title;
    constructor(firstName, lastName, title) {
        super(firstName, lastName);
        this.title = title
    }

    printFullName() {
        console.log(`${this.title} ${this.firstName} ${this.lastName}`)
    }
}

class Doctor extends TitledPerson {
    constructor(firstName, lastName) {
        super(firstName, lastName, "Dr");
    }
    
    printOpinionOfSelf() {
        console.log(`I bet your jelly because I have the title of ${this.title}.`);
    }
}

const drBob = new Doctor("Sponge", "Bob");
drBob.printFullName();
drBob.printOpinionOfSelf();
```

#### instanceof

You can check that an object is an instance of a specific class using the instanceof keyword. You would put the object on the left side of the keyword and the class you are comparing it to on the right and it will return true or false. This will not return true if you put in a class that your class extended. Here is a simple and practical example involving error handling.

```js

class MyError extends Error {}

function throwMyError() {
    throw new MyError();
}

try {
    throwMyError();
} catch (error) {
    if (error instanceOf Error) {
        console.error("default error");
    } else if (error instanceOf MyError) {
        console.error("my error!"); // this is what would print in this case.
    }
}
```

Using the technique above you can define your own error classes and then handle multiple types of errors in your error handling easily! Remember you can also override the constructor, store extra information in the error, and extend it's functionality!

## Exporting and importing

As your application grows beyond a simple script you will want to seperate your code into multiple files. To do this we can export and import from and to any other file.

You can export a const, let, function or class. To do this put `export` before the declaration.

```js
export const someConst = "Exporting!"

export function someFunction() {
    return "Also being exported!"
}

export class SomeClass {
    beingExported = "YUP";
}
```

To then `import` these in another file you would need to use the `import` keyword. You follow this up by `{}` squigly brackets. Inside these brackets you will want to put the name of what you are importing seperated by commas. After the brackets you will want to put the `from` keyword followed by the path to the file you want to import in quotations.

```js
import { someConst, someFunction, SomeClass } from "./someFile.mjs";
```

You can rename these exports when importing. We do this with the `as` keyword. This gets placed after the name of an exported variable then after the `as` you will put the new name that you want for your variable.

```js
import { someConst as someOtherConst, someFunction, SomeClass as SomeOtherClass } from "./someFile.mjs";
```

You can combine all the exported variables into one object using a wildcard `*` and the `as` keyword to name the object.

```js
import * as someObject from "./someFile.mjs";

console.log(someObject.someConst); // prints "Exporting!"   This is how we access the combined imports.
```

You can also add a `default` export with the `default` keyword. Add the word `default` after `export`.

```js
export default class SomeClass {}
```

When importing a default import you do not need to use the `{}` squigly brackets and can even name this import anything you want.

```js
import SomeDefault from "./someFile.mjs";
```

You can also import both the default and the other exports all with one statement. After you define the default import name you will need to add a comma then either `* as <SOME_VAR_NAME>` or using `{<LIST OF IMPORTS>}` and then finish with the `from` and file path.

```js
import SomeDefault, * as someObject from "./someFile.mjs";
```

or 

```js
import someDefault, { someConst, someFunction } from "./someFile.mjs";
```

## Generators / Iterators

I'm going to skip this one for now. May add it in later but I'm so tired of this so here is a link to some docs instead:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

TL:DR: Special types of functions that can return multiple times. If you see `function*` or the `yield` keyword and are confused then this is what you are looking for.

P.S. The returns can be looped through with `for of` loops :)

This is an example from a different javascript server runtime named Deno. Where they use a generator to make a server. It's super neat. Note the await in the for loop since generators can be async and looped through the for loops need to be able to await too! `for await` is valid in all modern javascript runtimes I just think this example and how deno decided to do this was really cool.

```js
const server = serve({ port: 8080 });
for await (const request of server) {
    console.log("a new request has come in!");
}
```

## Spread, Rest and Destructuring

Much like the last one I'm going to phone this one in. Spread and Destructuring allows you to easily put together and take apart lists and objects.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

The one big thing I want you to remember about Spread and Rest is that it can be used in function parameters. Here is an example.

```js
function sumWithSpreadAndDestructuring(...args) {
    return sum(args);
}

function sum(numberList) {
    let result = 0;
    for (const value of numberList) {
        result += value;
    }
    return result;
}

console.log(sumWithSpreadAndDestructuring(10, 5, -13, Math.PI)); // prints 5.141592653589793

console.log(sumWithSpreadAndDestructuring(...[10, 5, -13, Math.PI])); // prints 5.141592653589793

console.log(sum([10, 5, -13, Math.PI])); // prints 5.141592653589793
```

# Resources

As a generic javascript resource the MDN is very good: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

Codecademy has some nice interactive javascript tutorials but no free ones for node unfortunately: https://www.codecademy.com/learn/introduction-to-javascript

There is a lot here and I don't expect you to retain it. You can use this as a resource as well.
