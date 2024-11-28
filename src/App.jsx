import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SubmitEvent from "./pages/SubmitEvent";
import Footer from "./components/Footer";
import NavBAr from "./components/NavBar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <Router>
      <div className="bg-[#141A28] h-[100vh]">
        <NavBAr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submit-event" element={<SubmitEvent />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
