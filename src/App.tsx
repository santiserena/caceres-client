import { Routes, Route } from "react-router-dom";
import Create from "./components/Create/Create";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<div><Navbar/><Home/></div>} />
        <Route path='/detail' element={<div><Detail nombre={'emiliano'} /></div>} />
        <Route path='/admin' element={<div><Create/></div>} />
      </Routes>
    </div>
  );
}

export default App;
