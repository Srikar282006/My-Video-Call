import React from "react";
import LandingPage from "./pages/LandingPage";
import AuthenticationPage from "./pages/AuthenticationPage"; // Correct import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"; // Corrected casing
import VideomeetComponent from "./pages/VideomeetComponent";
import HomeComponent from "./pages/home";
import History from "./pages/history";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />


            <Route path="/auth" element={<AuthenticationPage />} />
            <Route path="/home" element={ <HomeComponent/> } />
            <Route path="/history" element={ <History />} />
            <Route path="/:url" element={<VideomeetComponent/>}/>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
