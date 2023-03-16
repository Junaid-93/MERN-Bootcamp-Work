import React, { useState } from "react";
const ToDoList = () => {
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);

  function completed(index) {
    let x = task.map((item, myindex) => {
      if (index == myindex) {
        if (item.status == "none") {
          item.status = "line-through";
        } else {
          item.status = "none";
        }
      }
      return item;
    });

    setTask(x);
  }
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setTask([...task, { text: text, status: "none" }]);
          setText("");
        }}
      >
        Add task
      </button>

      
        <h1>Tasks</h1>
        <ul style={{ textAlign: "left" }}>
          {task.map((tasks, index) => (
            <>
              <div style={{ display: "inline-block" }}>
                <input
                  type={"checkbox"}
                  style={{
                    height: "18px",
                    width: "18px",
                    display: "inline-block",
                    margin: "20px"
                  }}
                  onChange={() => {
                    completed(index);
                  }}
                />
                <li
                  style={{
                    textDecoration: tasks.status,
                    display: "inline-block",
                    fontSize: "20px"
                  }}
                  key={index}
                >
                  {tasks.text}
                  
                </li>
              </div>
              <br />
              {/* <div style={{ display: "inline-block"}}><button
          onClick={() => {
          completed(index);
          }}
        >
          Done
        </button></div><br /> */}
            </>
          ))}
        </ul>
      

      {/* <div style={{ display:"inline-block", margin:"30px"}}>
                <h2 >Completed Tasks</h2>
                <ul id="Completed Tasks">
                {task.map((tasks,index) => (<li>{tasks}</li>))}
                {/* {task.map((tasks,index) => (<li key={index}>{tasks}</li>))}
                </ul>
            </div>  */}
    </>
  );
};
export default ToDoList;