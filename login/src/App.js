import "./App.css";
import Signup from "./components/signup";
import Login from "./components/login";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import NoteState from "./NoteState";
import Profile from "./components/profile";
import Updateprofile from "./components/updateprofile";
import Comments from "./components/comments";

const userContext = createContext();
function App() {
  return (
    <>
      {/* // <div className="App">
    //   <Signup/>
    // </div>
    // <Login/>
    // <Welcome/> */}
       
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />

            <Route path="/Welcome" element={<Welcome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/updateprofile" element={<Updateprofile />} />
          </Routes>
        </Router> 
       
     
    </>
  );
}

export default App;
