import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from "./WorkSpace/Pages/LoginRegister/LoginRegister.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginRegister />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;