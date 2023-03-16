// console.log("Hello World \n ");
// // alert("Hellow World")


// //  Practice:

// // console.log("Salam")
// // console.log(123)

// // VARIABLES
// // var x = 5;
// // var x = 4;
// // console.log(x)

// // let x = 5;
// // x = 4;
// // console.log(x)

// // const x = 3
// // const x = 5
// // console.log(x)

// // DATA TYPE
// // var x = "Pakistan"
// // console.log(typeof x)

// // LOGICAL OPERATORS
// // var var1 = 4
// // var var2 = 8
// // console.log(var1 + var2);
// // console.log(var1 - var2);
// // console.log(var1 * var2);
// // console.log(var1 / var2);

// // FUNCTIONS

// // Function Declaration:
// // function check() {
// //     console.log("Hello !")
// // }
// // check();

// // Function Expression:

// // var x = function check() {
// //     console.log("Printing inside Function Expression")
// // }
// // x();

// // Arrow Function:

// // var x = () => {
// //     console.log("Printing inside Arrow Function")
// // } 
// // x();

// // no need to add {} and return incase of only 1 line declaration.
// // Shortcut for 1 liner arrow function,

// // var x = (num1,num2) => num1 + num2;
// // console.log(x(3,4));


// // IF ELSE:

// // var num1 = 3;
// // var num2 = 6;
// // if (num2 == 0) {
// //     console.log("Denominator can not be zero")
// // }
// // else {
// //     console.log(num1/num2)
// // }


// // var num1 = 3;
// // var num2 = 0;
// // if (num2 == 0) {
// //     console.log("Denominator can not be zero")
// // }
// // else {
// //     console.log(num1/num2)
// // }


// // function div(num1,num2) {
// //     if (num2 == 0) {
// //         console.log("Denominator can not be zero")
// //     }
// //     else {
// //         console.log(num1/num2)
// //     }

// // }
// // div(4,2);
// // div(5,0);



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

// // Chechking
// console.log(studentsData.hasOwnProperty("Country"))
// console.log(studentsData.hasOwnProperty("city"))


// var arr1 = ["Asad","Babar",3,4,5]
// // console.log(arr1[0]);
// // console.log(arr1[1]);
// // console.log(arr1[3]);
// // arr1[3]="Saqib"
// // console.log(arr1[3]);
// // arr1.push("Akber")
// // console.log(arr1[5]);
// // console.log(arr1);
// // console.log(arr1.pop());
// // console.log(arr1);
// // console.log(arr1.pop());
// // console.log(arr1);
// // var x = arr1.slice(2,4))     // new array will be created having 2 to 3 elements from arr1. 
// // console.log(arr1.splice(2,1,"Ali","Babar"))  // splice parameters :- 1-from index, 2-remove(no.of passed index), 3-items to be added in the list
// in above code:- from position 2, remove 1 item, and add "Ali","Babar" in the array.
// var arr2 = [6,7,8]
// // var arr3 = arr1.concat(arr2);
// // console.log(arr3);
// // console.log(arr3[3]);
// // console.log(arr3.at(3));
// // // console.log(arr3.at(-1)); 
// var arr3;
// arr3 = [1,2].concat([3,4]);
// console.log(arr3);
// console.log(arr3.length);

// var y = [2,3];

// for (var i = 0; i<=arr3.length-1; i++) {    // mandatory to use comparision operators in loops
//     y.push(i);
// }
// console.log(y);

// isNaN() , isInteger()

// let x = [1,2,3,4,5]
// let x2 = x.map(x => x*3)
// console.log(x2);
// const pattern = prompt('Enter a pattern');
// let user_input = prompt("Type your name !");
// if (pattern === "Junaid") {
//     console.log("Your name is "+ pattern);
// }