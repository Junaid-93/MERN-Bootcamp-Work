
function HigherOrderFunction(name,myfunction){
    console.log(name)
    //myfunction() 
    myfunction()

}

HigherOrderFunction("Bilal",callBack1)



function callBack1(){
    console.log("Hello1")
    console.log("I1")
    console.log("am1")
    console.log("CallBack1")
}
function callBack2(){
    console.log("Hello2")
    console.log("I2")
    console.log("am2")
    console.log("CallBack2")
}
function callBack3(){
    console.log("Hello3")
    console.log("I3")
    console.log("am3")
    console.log("CallBack3")
}