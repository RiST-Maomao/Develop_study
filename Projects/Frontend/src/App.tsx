import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from "./WorkSpace/Pages/LoginRegister/LoginRegister.tsx";
import Home from "./WorkSpace/Pages/Home/Home.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> 

        {/* <Route path='/' element={<LoginRegister />} />
        <Route path='/login' element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;