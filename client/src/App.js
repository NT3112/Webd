import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Login" element={<LoginPage />}/>
          <Route path="/Register" element={<RegisterPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

