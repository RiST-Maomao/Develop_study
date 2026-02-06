import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./WorkSpace/Pages/Home/Home.tsx";
import Register from "./WorkSpace/Pages/Register/Register.tsx";
import RoomID from "./WorkSpace/Pages/RoomID/RoomID.tsx";
import Wating from "./WorkSpace/Pages/Waiting/Waiting.tsx";
import Prepare from "./WorkSpace/Pages/Prepare/Prepare.tsx";
import Chatting from "./WorkSpace/Pages/Chatting/Chatting.tsx";
import Vote from "./WorkSpace/Pages/Vote/Vote.tsx";
import Result from "./WorkSpace/Pages/Result/Result.tsx";
import End from "./WorkSpace/Pages/End/End.tsx";

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
        <Route path='/Chatting' element={<Chatting />} />
        <Route path='/Vote' element={<Vote />} />
        <Route path='/Result' element={<Result />} />
        <Route path='/End' element={<End />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;