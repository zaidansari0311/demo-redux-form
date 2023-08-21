import "./App.css";
import UserDetails from "./Components/UserDetails";
import Profile from "./Components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserDetails/>}/>
          <Route path="/profile" element={<Profile/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
