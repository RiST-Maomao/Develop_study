import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Register from "./WorkSpace/Pages/Register/Register.tsx";
import Home from "./WorkSpace/Pages/Home/Home.tsx";
import RoomID from "./WorkSpace/Pages/RoomID/RoomID.tsx";
import Wating from "./WorkSpace/Pages/Wating/Wating.tsx";
import Prepare from "./WorkSpace/Pages/Prepare/Prepare.tsx";

function App() {
  return (
    <>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/Register' element={<Register />} /> 
        <Route path='/RoomID' element={<RoomID />} /> 
        <Route path='/Waiting' element={<Wating />} />
        <Route path='/Prepare' element={<Prepare />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;