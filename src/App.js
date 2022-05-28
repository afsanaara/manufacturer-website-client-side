import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
