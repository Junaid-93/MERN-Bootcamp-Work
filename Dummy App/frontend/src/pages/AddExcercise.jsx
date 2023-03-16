import React, { useState } from 'react'

export default function AddExcercise() {
  const [title,SetTitle] = useState("")
  const [des,SetDes] = useState("")
  const [type,SetType] = useState("")
  const [duration,SetDuration] = useState("")
  async function HandleSubmit(e){
    e.preventDefault()
try{

  const result = await fetch("http://localhost:5000/excercise/addexcercise",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "authorization":localStorage.getItem("Token")
    },
    body:JSON.stringify({
      title:title,
      des:des,
      type:type,
      duration:duration
    })
  })

  const data = await result.json()
  alert("Added")
  SetTitle("")
  SetDes("")
  SetType("")
  SetDuration("")
}
catch(err){
  alert(err)
  console.log(err)
}
    
  }

  return (
    <form onSubmit={HandleSubmit}>
      <input placeholder='Title' value={title} onChange={(e)=>{SetTitle(e.target.value)}}/>
      <input placeholder='Description' value={des} onChange={(e)=>{SetDes(e.target.value)}}/>
      {/* Should Be Selction */}
      <input placeholder='Type' value={type} onChange={(e)=>{SetType(e.target.value)}}/>
      <input placeholder='Duration' type='number' value={duration} onChange={(e)=>{SetDuration(e.target.value)}}/>
      <input type='submit' value="AddExcercise"/>
    </form>
  )
}
