import {BrowserRouter as Router, Route , Routes}  from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Asidebar from "./Components/Asidebar";
import Imagecard from "./Components/Imagecard";
import Postart from "./Components/Postart";
import Imagedetails from "./Components/Imagedetails";
import Landingpage from "./Components/Landingpage";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Savedarts from "./Components/Savedarts";
// import Selectcategory from "./Components/Selectcategory";

export default function App() {
  return (
   <Router>
    <Routes>
      <Route path="/Navbar" element={<Navbar/>}></Route>
      <Route path="/Homepage" element={<Homepage/>}></Route>
      <Route path="/Asidebar" element={<Asidebar/>}></Route>
      <Route path="/Imagecard" element={<Imagecard/>}></Route>
      <Route path="/Postart" element={<Postart/>}></Route>
      <Route path="/art/:id" element={<Imagedetails/>}></Route>
      <Route path="/" element={<Landingpage/>}></Route>
      <Route path="/Signin" element={<Signin/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Savedarts" element={<Savedarts/>}></Route>
      {/* <Route path="/Selectcategory" element={<Selectcategory/>}></Route> */}


    </Routes>
   </Router>
  )
}