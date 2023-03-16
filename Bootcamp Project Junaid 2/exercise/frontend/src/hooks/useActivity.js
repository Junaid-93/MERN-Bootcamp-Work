// import axios from "axios";
// import React, { useState, useEffect } from "react";

// export default function useActivity() {
//   const [data, setData] = useState({ name: "", type: "" , duration: "", date: "", description: "" });
//   const [activity, setActivity] = useState([]);
//   const [refetch, setRefetch] = useState(false);
  
  
//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value.toLowerCase() });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(data);
//     console.log();
//     try {
//       setData({
//         name: "",
//         type: "",
//         duration: "",
//         date: "",
//         description: "",
//       });

//       setRefetch(refetch ? false : true)
//     } catch (error) {
//       console.log(error.response.data.message);
//     }
//   };

//   useEffect(() => {
//     const getAllActivities = async()=>{
//         const res = await axios.get('');
//         if(!res.ok){
//             return ''
//         }
//         setActivity(res.data);
//         console.log('refecthing');
//     }
//     getAllActivities()
//   }, [refetch]);

//   return { handleChange, handleSubmit, data, activity };
// }
