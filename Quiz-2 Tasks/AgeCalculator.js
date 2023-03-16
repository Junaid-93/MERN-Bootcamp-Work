function age() {
    let y = document.getElementById("input").value;
    const x = new Date(y);
    const z = new Date();
    const inputDate = x.toISOString();
    const thisDate = z.toISOString();
    var year = parseInt(thisDate.slice(0,5))-parseInt(inputDate.slice(0,5)); 
    var month = parseInt(thisDate.slice(6,8))-parseInt(inputDate.slice(6,8)); 
    var day = parseInt(thisDate.slice(9,11))-parseInt(inputDate.slice(9,11)); 
    console.log("Your current age is", Math.abs(year),"years",Math.abs(month), "months", Math.abs(day), "days");
}