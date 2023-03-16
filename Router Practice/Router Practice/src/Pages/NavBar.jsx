import React from 'react'
import {Link} from 'react-router-dom'

function Navbar () {
  return (
    <div>
    <Link to={"/"} style={{fontSize:"30px",margin:"15px"}}>Home</Link>
    <Link to={"/about"} style={{fontSize:"30px",margin:"15px"}}>About</Link>                                             {/*To refresh only specific item*/}
    <a href={"http://localhost:5173/about"} style={{fontSize:"30px",margin:"15px"}}>About (refreshing whole page)</a>    {/*To refresh the whole page*/}

    <Link to={"/services"} style={{fontSize:"30px",margin:"10px"}}>Services</Link>

    </div>
  )
}
export default Navbar;