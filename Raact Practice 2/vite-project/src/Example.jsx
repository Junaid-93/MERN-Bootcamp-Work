import {useEffect,useState} from 'react'

function Example() {
    const [count , setCount] = useState(0);
    

    // Runs after every 2 seconds

    //   useEffect(()=>{

    //     setTimeout(() => {
    //       setCount((count)=>(count + 1))
      
    //     }, 2000);
        
    //     console.log('runing');
    // })

    // Runs only once
      
    useEffect(()=>{

      setTimeout(() => {
        setCount((count)=>(count + 1))
    
      }, 2000);
      
      console.log('runing');
  },[])
    

  return (
    <>
    <div>Example</div>
    {count}
    <button onClick={()=>setCount(count)}>count</button>
    </>
  )
}

export default Example;