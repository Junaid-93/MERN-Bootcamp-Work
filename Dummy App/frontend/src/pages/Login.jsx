import React, { useState } from 'react'


export default function Login() {
  const [Email,SetEmail] = useState("")
  const [Password,SetPassword] = useState("")
  async function HandleSubmit(e){
    e.preventDefault()

    try{
      const result  = await fetch("http://localhost:5000/login",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email:Email,
          password:Password
        })
      }
      )
      const data = await result.json()
      console.log(data)
      localStorage.setItem("Token",data.Token) 

      window.location.replace("/")

    }
    catch(err){
      alert("Invalid")
    }
  
  
  
  }
  return (
    <form onSubmit={HandleSubmit}>
      <br />
      <input placeholder='Email' value={Email} onChange={(e)=>{SetEmail(e.target.value)}}/>
      <br />
      <input placeholder='Password' value={Password} onChange={(e)=>{SetPassword(e.target.value)}} />
      <br />
      <input type="submit" value="Login"/>
    </form>
  )
}
