import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Caddrafting from "./components/Caddrafting";
import Packages from "./components/Packages"; 
import WorkProcess from "./components/WorkProcess";
import Dashboard from './components/Dashboard/Dashboard';
import AutoCADDraftingServices from './components/AutoCADDraftingServices';
import ThreeDModelingPage from "./components/ThreeDModelingPage";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const AppContent = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const location = useLocation();

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* Conditionally render Navigation based on the current route */}
      {location.pathname !== "/dashboard" && <Navigation />}
      
      <Routes>
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
        <Route path="/packages" element={<Packages />} />
        <Route path="/workprocess" element={<WorkProcess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/caddrafting" element={<Caddrafting />} />
        <Route path="/ThreeDModelingPage" element={<ThreeDModelingPage />} />
        <Route path="/AutoCADDraftingServices" element={<AutoCADDraftingServices />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
