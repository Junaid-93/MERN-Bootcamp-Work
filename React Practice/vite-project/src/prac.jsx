import React, { useState } from "react"

const PracArray = () => {
  const [list, setList] = useState([1,2,3])
  const [updated, setUpdated] = useState([1,2,3])
  const [text, setText] = useState('')

  return (
    <>
    <h1>This is Heading 1</h1>
    <p>Now, we print our list i.e. {list}</p>
    <input id ="input" type="text" value={text} onChange={(e)=>setText(e.target.value)} />
    <button type="button" onClick={() => {
      setUpdated([updated])
      setList([...list, text])
      // setList([])
      setText('')
      }}>add</button>
    <p>This is updated list {updated}</p>
    </>
  )
}
export default PracArray