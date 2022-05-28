import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Blogs/Blogs";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
      </Routes>
    </div>
  );
}

export default App;
