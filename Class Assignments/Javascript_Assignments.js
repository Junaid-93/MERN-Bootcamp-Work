
// Assignments 1

// function sets(arr1,arr2) {
//     console.log(arr1.concat(arr2));
// }
// sets([1,2,3],[3,5,6])
// ------------------------------ //

// // Assignments 2
// var Ans = []
// function intersection(arr1, arr2) {
//     for (var x in arr1) {
//         for (var y in arr2) {
//             if (arr1[x] === arr2[y]) {
//                 Ans.push(arr1[x]);
//             }
//         }
//     }
//     console.log(Ans);
// }
// intersection([2,3,4,5],[4,5,6,7])


// Assignment 3
// ------------------------------ //
// function even(num) {
    
//     if(num % 2 === 0) {
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }
// even(10);


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

// Assignment 5
// ------------------------------ //

// function square(num) {
//     if (typeof num === 'number') {
//         console.log(num *= num);
//     }
//     else {    
//         var arr = []
//         for (var x in num) {
//             arr.push(num[x]**2) 
//         }
//         console.log(arr);
//     }
// }
// square([7,8]);

// Assignment 6 (a)
// ------------------------------ //

// function add(num1=0,num2=0) {
//     console.log(num1+num2)
// }
// add(3,5);

// // Assignment 6 (b)
// // ------------------------------ //
// function add(num) {
//     var total = 0;
//     for (var x in num) {
//         total += num[x]
//     }
//     console.log(total)
// }
// add([3,4])

// // Assignment 7 (no result for num=2)
// // ------------------------------ //
// function prime(num) {
//     for (let i = 2 ; i<=num ; i++) {
//         if (num % 2 == 0 && num !== 2) {
//             console.log(false)
//             break;
//         }
//         else {
//             console.log(true);
//             break;
//         }
//     }
// }
// for (var i = 2; i <= 20; i++) {
//     console.log(i),prime(i);
// }

// // Assignment 8 (not returning result)
// // ------------------------------ //
// function series(num) {
//     for (var i = 1; i <= num ; i++) {
//         console.log(num[i]);
//     }
// }
// series(7);


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