import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Pages/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import  NoPage  from "./Pages/NoPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home />}  />
        <Route path="/about" element={<About />}  />      
        <Route path="/services" element={<Services />}  />
        <Route path="*" element={<NoPage />}  />  {/*Setting path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.*/}
      </Routes>
      
      </BrowserRouter>
      
       </div>
  )
}

export default App


