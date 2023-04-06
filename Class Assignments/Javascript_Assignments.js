
// Assignments 1

// function union(arr1,arr2) {
//     let arr3 = arr1.concat(arr2);
//     let arr4 = []
//     for (let i of arr3){
//         if (arr4.includes(i)==false){
//             arr4.push(i)
//         }        
//     }
//     console.log(arr4);
// }

// union([1,2,3,3,3],[3,6,4,4,4,4,7,4,5])
    // arr1 = new Set([arr1])
    // arr2 = new Set([arr2])
    // let arr3 = new Set([...arr1, ...arr2])
    // console.log(arr3.values());

// ------------------------------ 


// // Assignments 2

// function intersection(arr1,arr2) {
//     let arr3 = arr1.filter(i => arr2.includes(i));
//     console.log(arr3);
// }
// intersection([2,3,4,5],[4,2,5,6,7])


// Assignment 3
// ------------------------------ //

// Using if statement
// function even(num) {
    
//     if(num % 2 === 0) {
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }
// even(10);

// Using Ternary Operator
// function even2(num2) {
//     return num2 % 2 === 0 ? console.log(true) : console.log(false); 
// }
// even2(7)


// Assignment 4
// ------------------------------ //
// function odd(num) {
//     if (num % 2 === 1) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }
// odd(4);

// Using Ternary Operator
// function odd2(num) {
//     return num % 2 === 1 ? console.log(true) : console.log(false); 
// }
// odd2(0)


// Assignment 5
// ------------------------------ //

// function square(num) {
//     if (typeof num === 'number') {
//         console.log(num *= num);
//     }
//     else {    
//         var arr = []
//         for (var x of num) {
//             arr.push(x**2) 
//         }
//         console.log(arr);
//     }
// }
// square([7,8]);

// Alternate method for arrays only
// function square2(nums) {
//     let result = nums.map(i => i*i)    
//     console.log(result)
// }
// square2([4,6]);

// Assignment 6 (a)
// ------------------------------ //

// function add(num1=0,num2=0) {
//     console.log(num1+num2)
// }
// add(3,5);

// // Assignment 6 (b)
// // ------------------------------ //
// function add2(num) {
//     var total = 0;
//     for (var x of num) {
//         total += x
//     }
//     console.log(total)
// }
// add2([3,4,6])

// Alternate
// function add3(num_array) {
//     let result = num_array.reduce(myFunction)
//     function myFunction (total, value) {
//             return( total + value )
//     }
//     console.log(result);
// }
// add3([1,2,3,4,5])



// // Assignment 7 (Print Prime numbers)
// ------------------------------ //
// function prime(num) {
//     for (i = 2 ; i <= num ; i++) {
//         let flag = 0

//         for (x = 2 ; x < i ; x++) {
//             if ( i % x == 0 ) {
//                 flag = 1
//                 break;
//             }
//         }
//         if (num > 1 && flag == 0) {
//             console.log(i);
//         }
//     }
// }
// prime(1022)

// Assignment 8 (To get fibonacci series numbers (argument=3, result3 numbers))
// ------------------------------ //
// function fibonacci(num) {
//     series = [0,1]
//     console.log(series.at(-2));
//     console.log(series.at(-1));
//     for (var i = 1; i <= num-2 ; i++) {
//         series.push(series.at(-1)+series.at(-2))
//         console.log(series.at(-1))
//     }
// }
// fibonacci(7);

// (To get fibonacci series numbers uptill given argument)

// function fibonacci2(num) {
//     if (num == 0){
//         console.log(0);
//     }
//     else{
//     series = [0,1]
//     console.log(series.at(-2));
//     console.log(series.at(-1));
//     for (var i = 1; i <= num-2 ; i++) {
//         let x = series.at(-1)+series.at(-2)
//         if ( x <= num) {
//         series.push(x)
//         console.log(series.at(-1))
//         }
//         else {
//             break;
//         }
//     }
// }
// }
// fibonacci2(8);

// Fibonacci using Recursion (printing nth value of Fibonacci sequence)
// function fibonacci3(n) {
//     if (n <= 1){
//         return n
//     }
//     else {
//         return fibonacci3(n-1) + fibonacci3(n-2)
// }}
// console.log(fibonacci3(10)); 

// var x = (function add(num1,num2) {
      
//     console.log(num1+num2); 
// })(2,6)
// console.log(3);


// // RECURSION
// function factorial(x) {

//     // if number is 0
//     if (x === 0) {
//         return 1;
//     }
  
//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
//   }
//   console.log(factorial(5));