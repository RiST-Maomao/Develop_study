import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./WorkSpace/Pages/Register/Register.tsx";
import Home from "./WorkSpace/Pages/Home/Home.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/Register' element={<Register />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;