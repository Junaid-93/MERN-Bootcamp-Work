// Section-2 Q:2

// var x = prompt("Type a word !").toLowerCase()
let x = "Pakistan"

for (i=1;i<=(x.length-1)/2;i++) {
   if (x[i-1]==x[x.length-i]) {
    console.log("Its a palindrome");
   }
   else {
    console.log("its not a palindrome");
   }
}