import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./component/Auth/Homepage";
import SignIn from "./component/Auth/SignIn";
import SignUp from "./component/Auth/SignUp";
import AuthDetails from "./component/Auth/AuthDetails";
import Gallery from "./component/Gallery";
function App() {
  return (
    // <Router>
      <div>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
        <AuthDetails />
        
      </div>
    // </Router>
  );
}

export default App;
