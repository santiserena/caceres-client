import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<div><Navbar/><Home/></div>} />
        <Route path='/detail' element={<div><Detail nombre={'emiliano'} /></div>} />
      </Routes>
    </div>
  );
}

export default App;
