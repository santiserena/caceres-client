import { Routes, Route } from "react-router-dom";
import Create from "./components/Create/Create";
import Detail from "./components/Detail/Detail";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<div><Navbar/><Home/></div>} />
        <Route path='/detail' element={<div><Detail nombre={'emiliano'} /></div>} />
        <Route path='/admin' element={<div><Create/></div>} />
        <Route path='/login' element={<div><Login/></div>} />
        <Route path='/gallery' element={<div><Navbar/><Gallery/></div>} />
      </Routes>
    </div>
  );
}

export default App;
