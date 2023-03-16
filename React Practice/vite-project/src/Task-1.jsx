import React from 'react'
import { useState } from "react"

function Count2 (){
const [count, setCount] = useState(5);

function abc(){
    
    setCount((count) => count+3)
}
return (
   <> 
    <div>
        <button onClick={() => abc()}>Click to add {count}</button>
    </div>
    </>
)
}

export default Count2;