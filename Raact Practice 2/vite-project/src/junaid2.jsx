import { useState } from "react"

function Junaid2(){
    const [x, setX] = useState(0)

    return (
        <>
        <h1>This is {x}</h1>
        
        <button style={{margin:"5px", backgroundColor:"green"}} width= "30px" onClick= {()=>{
            setX(x+1)
        }}>+1</button>
        <button style={{backgroundColor:"red"}} width= "30px" onClick= {()=>{
            setX(x+2)
        }}>+2</button> 
        </>
    )
}

// .catch((err) => {
//     console.log(err);
export default Junaid2