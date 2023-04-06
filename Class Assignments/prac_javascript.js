// console.log("Hello World \n ");
// alert("Hellow World")


// //  Practice:

// console.log("Salam")
// console.log(123)

// // VARIABLES
// var x = 5;
// var x = 4;
// console.log(x)

// let x = 5;
// x = 4;
// console.log(x)

// const x = 3
// const x = 5
// console.log(x)

// // DATA TYPE
// var x = "Pakistan"
// console.log(typeof x)

// // LOGICAL OPERATORS
// var var1 = 4
// var var2 = 8
// console.log(var1 + var2);
// console.log(var1 - var2);
// console.log(var1 * var2);
// console.log(var1 / var2);

// // FUNCTIONS

// Functions returns a value. The function which does not returns a value is call VOID FUNCTION.

// // Function Declaration:
// function check() {
//     console.log("Hello !")
// }
// check();

// // Function Expression:

// var x = function check() {
//     console.log("Printing inside Function Expression")
// }
// x();

// // Arrow Function:

// Arrow functions are always anonymous

// var x = () => {
//     console.log("Printing inside Arrow Function")
// } 
// x();

// // no need to add {} and "return" incase of only 1 line declaration.
// // Shortcut for 1 liner arrow function,

// var x = (num1,num2) => num1 + num2;
// console.log(x(3,4));

// function myFunction(a, b) {
//   return a * b;             // Function returns the product of a and b
// }

// let x = myFunction(4, 3);   // Function is called, return value will end up in x

// console.log(x);

// // IF ELSE:

// var num1 = 3;
// var num2 = 6;
// if (num2 == 0) {
//     console.log("Denominator can not be zero")
// }
// else {
//     console.log(num1/num2)
// }


// var num1 = 3;
// var num2 = 0;
// if (num2 == 0) {
//     console.log("Denominator can not be zero")
// }
// else {
//     console.log(num1/num2)
// }


// function div(num1,num2) {
//     if (num2 == 0) {
//         console.log("Denominator can not be zero")
//     }
//     else {
//         console.log(num1/num2)
//     }

// }
// div(4,2);
// div(5,0);



// // OBJECTS (DICTIONERIES)

// var studentsData = {
//     name : "Hammad",
//     fName : "Aslam",
//     age : 27 
// } 

// // Accessing an object
// console.log(studentsData);

// // Accessing a value of an ocject  (way-1)
// console.log(studentsData.name)
// console.log(studentsData.fName)
// console.log(studentsData.age)

// // way-2
// // always use " " incase of accessiong through [ ] because its always takes string value. 
// console.log(studentsData["name"]);
// console.log(studentsData["fName"]);
// console.log(studentsData["age"]);

// // Adding a value to an object
// studentsData.city = "Karachi"
// console.log(studentsData.city);

// studentsData["Province"] = "Simdh"
// console.log(studentsData["Province"]);

// // Deleting a value of an object
// delete studentsData["name"]
// console.log(studentsData);

// Warning !
// Array elements can be deleted using the JavaScript operator delete.

// Using delete leaves undefined holes in the array.

// Use pop() or shift() instead.

// // Chechking
// console.log(studentsData.hasOwnProperty("Country"))
// console.log(studentsData.hasOwnProperty("city"))


var arr1 = ["Asad","Babar",3,4,5]
// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[3]);
// console.log(arr1);
arr1[3]="Saqib"
// console.log(arr1);
// console.log(arr1[3]);
arr1.push("Akber")
// console.log(arr1[5]);
// console.log(arr1);
// console.log(arr1.pop());    // To eliminate last element of an array
// console.log(arr1.shift());  // To eliminate first element of an array
// arr1.push(7);               // To add an element at the last of an array
// console.log(arr1);
// arr1.unshift(8);            // To add an element at the beginning of an array
// console.log(arr1);

// console.log(arr1);
// console.log(arr1.pop());
// console.log(arr1);
// var x = arr1.slice(2)     // new array will be created having element with index no. 2 to onwards.
// console.log(x);           // slice method creates new array and does delete any item from source array
// console.log(arr1);
// var arr4 = arr1.slice(2,5)
// console.log(arr4);


// console.log(arr1.splice(2,1,"Ali","Babar"))  // splice parameters :- 1-from index no., 2-remove(no.of passed index), 3-items to be added in the list
// in above code:- from position 2, remove 1 item, and add "Ali","Babar" in the array.
// splice method returns an array of deleted items.

// console.log(arr1);
// var arr2 = [6,7,8]
// var arr3 = arr1.concat(arr2);
// console.log(arr3);
// console.log(arr3[3]);

// console.log(arr3.at(3));
// console.log(arr3.at(-1));
// console.log(arr3[-1]); // will return undefined 
// var arr3;

// arr3 = [1,2].concat([3,4]);
// console.log(arr3);
// console.log(arr3.length);

// var country = "Pakistan"
// var nationality = "i"
// console.log(country.concat(nationality));
// console.log(country.substring(0,3));
// var a = "This is our beloved country"

// split converts an string into an array

// console.log(a.split(" "));  // split the string at spaces into array 

// var a = "This is our beloved country"
// console.log(a.split()); // array of whole string at index [0]

// var a = "This is our beloved country"
// console.log(a.split(""));   // return array of single characters


// Arrays
// var x = [1,2,4,9,5,3,7,8]
// console.log(x.toString());   // toString converts an array into comma separated string 

// console.log(x.reverse());
// console.log(x.sort());
// console.log(x.reverse());

// let text = "Salam3";

// switch (text) {
//     case "Salam":
//         console.log("1st done");
//         break;
    
//     case "Salam2":
//         console.log("2nd done");
//         break;

//     case "Salam3":
//         console.log("3rd done");
//         break;
//     default:
//         console.log("default done");


// For Loop:

// var y = [2,3];
// var anArray = []
// for (var i = 0; i<=arr3.length-1; i++) {    // mandatory to use comparision operators in loops
//     console.log(anArray.push(i));
// }
// console.log(anArray);

var obj = {
    "name" : "Hammad",
    "fname" : "Malik",
    "age" : "27"
}

// For In Loop
// for (let x in obj) {         // For in loop is used to iterate over properties of an obj
//     console.log("The",x,"is",obj[x]);
// }

// For of Loop
// anArray1 = [2,3,4,"aa","bb","cc"]
// for (let x of anArray1) {       // For of loop it to iterate over iterables like Arrays, strings etc.
//     console.log(x);
// }
// If we use for in loop over an array, it will return index numbers of that array.
// // While Loop

// let i = 0;
// while (i < 10) {
//  i++;
//  console.log(i);
// }

// // Do while loop

// let x = 0;
// do {
// x++;
// console.log(x);
//  } while (x < 10);

// Break/Continue Statements

// for (let i = 0; i < 10; i++) {
//     console.log("The number is ", i);
//     if (i === 3) {      // It will break the loop when the condition is met
//     break;
//     }
//   }

// for (let i = 0; i < 10; i++) {
//     if (i === 3) { 
//         continue;           // It will skip a single iteration when the condition is met
//     }
//     console.log("The number is ", i);
    
//   }


// Closure
// - Variables defined outside a function are Global variables and can be used inside or outside the functions.
// - Variables defined inside a function are local variables and and can be used inside the function only.
// - Variables defined without keywords "var, let, const" are global always even if defined inside a function.
// - A closure is a function having access to the parent scope, even after the parent function has closed.

// Example
// const add = (function () {
//     let counter = 0;    // set basic variable in parent function
//     return function () {
//         counter += 1;
//         return counter
//     }
//     })();   // must have to immediately invoke
  
//   add();
//   add();
//   add();
  // the counter is now 3

  
//   Annonymous Functions

// // Example 1
// let show = function() {
//     console.log('Anonymous function');
//    };
//    show();

// // Example 2  
// setTimeout(function() {
//     console.log('Execute later after 1 second')
// }, 1000);
  
// // Immediate Invoke Functon Expression
// (function () {
//     console.log(person.firstName+ ' ' + person.lastName);
//    })(person);
   
// Recursion:
// function factorial(x) {
//     if (x==0) {
//         return 1;
//     }
//     else if (x > 0) {
//         return x * factorial(x-1) 
//     }
// }
// console.log(factorial())


// isNaN() , isInteger()

// let x = [1,2,3,4,5]
// let x2 = x.map(x => x*3)
// console.log(x2);
// const pattern = prompt('Enter a pattern');
// let user_input = prompt("Type your name !");
// if (pattern === "Junaid") {
//     console.log("Your name is "+ pattern);
// }


// Map Find Filter Reduce (every, some, reduceRight, findIndex()) 
// https://www.w3schools.com/js/js_array_iteration.asp

// // MAP
// let alist = [1,2,3,4,5]
// let Aresult = alist.map(myFunction)
// function myFunction(value,items,array){
//     return value * 4
// }           // 2nd and 3rd param can be omitted
// console.log(Aresult);

// //  it can also be written as an arrow function

// let result = alist.map(i => i*3)
// console.log(result);

// // FIND
// let A2result = alist.find(anyFunction2)
// function anyFunction2(value,items,array){
//     return value > 3
// }
// console.log(A2result);

// //  it can also be written as an arrow function

// let result2 = alist.find(i => i > 3)
// console.log(result2);

// // FILTER
// let result3 = alist.filter(i => i > 3)
// console.log(result3);

// // REDUCE
// // It perform a task on every item of the list and return a single value

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//   return total + value;
// }
// console.log(sum);

// //  It can also be written as 
// let func = (total, value) => value + total
// let result4 = alist.reduce(func,10)
// console.log(result4); 