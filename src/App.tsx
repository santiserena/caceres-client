import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<div><Home/></div>} />
        <Route path='/detail' element={<div><Detail nombre={'emiliano'} /></div>} />
      </Routes>
    </div>
  );
}

export default App;
