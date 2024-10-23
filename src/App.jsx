import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import Login from "./components/Login";  // New import for Login
import Signup from "./components/Signup";  // New import for Signup
import Caddrafting from "./components/Caddrafting";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          {/* Route for the landing page (your default page with all components) */}
          <Route 
            path="/" 
            element={
              <>
                <Header data={landingPageData.Header} />
                <Features data={landingPageData.Features} />
                <About data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <Gallery data={landingPageData.Gallery} />
                <Testimonials data={landingPageData.Testimonials} />
                <Team data={landingPageData.Team} />
                <Contact data={landingPageData.Contact} />
              </>
            } 
          />
          
          {/* Route for Login page */}
          <Route path="/login" element={<Login />} />
          
          {/* Route for Signup page */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/caddrafting" element={<Caddrafting />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
