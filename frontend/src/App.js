import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import JoinAsClintOrFreelancer from "./Pages/JoinAsClintOrFreelancer";
import Login from "./Pages/Login";
import SignUpFreelancer from "./Pages/SignUpFreelancer";
import FreelancerHomePage from "./Pages/FreelancerHomePage";
import SignUpClient from "./Pages/SignUpClient";
import SignuptofindWork from "./Pages/ SignuptofindWork";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/joinAsClintOrFreelancer"
          element={<JoinAsClintOrFreelancer />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signUpFreelancer" element={<SignUpFreelancer />} />
        <Route path="/signUpClient" element={<SignUpClient />} />
        <Route path="/freelancerHomePage" element={<FreelancerHomePage />} />
        <Route path="/signuptofindWork" element={<SignuptofindWork />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
