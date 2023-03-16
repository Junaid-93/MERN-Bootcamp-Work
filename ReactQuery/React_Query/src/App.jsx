import './App.css'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()

 

 export default function App() {

   return (

     <QueryClientProvider client={queryClient}>

       <Example />

     </QueryClientProvider>

   )

 }

 

 function Example() {

   const { isLoading, error, data } = useQuery('repoData', () =>

     fetch('https://https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}').then(res =>

       res.json()

     )

   )

 

   if (isLoading) return 'Loading...'

 

   if (error) return 'An error has occurred: ' + error.message

 

   return (

     <div>

       <h1>{data.current.dt}</h1>

       {/* <p>{data.description}</p>

       <strong>👀 {data.subscribers_count}</strong>{' '}

       <strong>✨ {data.stargazers_count}</strong>{' '}

       <strong>🍴 {data.forks_count}</strong> */}

     </div>

   )

   }