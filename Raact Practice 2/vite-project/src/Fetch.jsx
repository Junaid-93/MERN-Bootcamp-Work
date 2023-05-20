import { useEffect, useState } from "react";


function Data_Fetch () {
    const [data, setData] = useState([])
    
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => setData(json))
        .catch(err=>{console.log(err);})
        
      }, [data]);

        // async function getUsers(){
        //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        //     const json = await response.json();
        //     setData(json)
//         }
// getUsers()
       
    
      return(
        <>
        <h1><u>Data Table</u></h1>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
        <table className="table">
            <thead>
                <tr>
                    <th style={{width:"10%"}}>User ID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
            {data.map((items,i) => (    
            <tr key={i}>
                <td>{items.userId}</td>
                <td>{items.id}</td>
                <td>{items.title}</td>
                <td>{items.body}</td>
            </tr>
))}
            </tbody>

        </table>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

        </>
      )
}
export default Data_Fetch