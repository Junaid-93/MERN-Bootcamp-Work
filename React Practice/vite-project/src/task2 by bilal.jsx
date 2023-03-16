// import { useState } from "react";
// // count = 0
// function App() {
//   let [count, setCount] = useState(0)
//   // let count = 0//1,2
//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={()=>{
//       setCount(++count)
//       console.log(count)
//     }}>Increase</button>
//     </>
//   );
// }

// export default App;



/**** TodoList *****/

import { useState } from "react";

function Abc() {
  let [list, setList] = useState([]);
  return (
    <>
      <input type="text" id="inp" />

      <button
        onClick={() => {
          var value = document.getElementById("inp").value;               //[bilal]----[bilal,hamza]----[bilal,hamza,gafar]
          setList([...list, { title: value, status: "not completed" }]);

        }}
      >
        Add
      </button>
<div>
      <div style={{textAlign:"left"}}>
        <h1>UnComplete</h1>
        {list.map((item) => {

          return <h5>{item.title+"   "+item.status}</h5>;
          
        })}
        
      </div>


      <br />
      <div style={{textAlign:"right"}}>
        <h1>Complete</h1>
        {list.map((item) => {
          if (item.status != "notcomp") {
            return (
              <>
                <h5>{item.title}</h5>
              </>
            );
          }
        })}
      </div>
      </div>
    </>
  );
}

export default Abc;