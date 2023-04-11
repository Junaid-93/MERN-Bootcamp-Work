// Section-2 Q:1

function ageInDays(ageInYears) {
    let x = ageInYears / 4
    return ageInYears * 365 + Number.parseInt(x); 
}
var y = prompt("Enter your age !")
console.log(ageInDays(y));