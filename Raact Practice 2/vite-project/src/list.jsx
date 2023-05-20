import { useState } from "react";

function Practice() {
    let [list, setlist] = useState([1]);


    // function ab() {
    //     setlist([...list,list+1])
    //     return list
    // }


    

return (
    <>
    <h1>This is Heading 1</h1>
    <p>Now, we print our list i.e. {list}</p>
    {/* <button onClick= ></button> */}
    {/* <p>If we apply setstate then {ab}</p> */}


    <input id ="input" type="text" value={value} onChange={(e)=>setText(e.target.value)} />
    <button type="button" onClick={() => {
      setlist([...list, value])}}
      >ADD</button>
    {/* <input id ="input" type="text" value={text} onChange={(e)=>setText(e.target.value)} />
    <button type="button" onClick={() => {
      setUpdated([updated])
      setList([...list, text])
      // setList([])
      setText('')
      }}>add</button>
    <p>This is updated list {updated}</p> */}
    {/* <p>{ab}</p> */}
    </>
  )








}
export default Practice