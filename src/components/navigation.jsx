import React, { useState } from "react";  // Add useState
import { Link } from "react-router-dom";

// Add translations object
const translations = {
  english: {
    home: "Home",
    autocadService: "AutoCAD Service",
    modelingService: "3D Modeling Service",
    orderUs: "Order Us",
    about: "About",
    howWeWork: "HOW WE WORK",
    packages: "Packages",
    login: "Login",
    signup: "Signup"
  },
  amharic: {
    home: "መነሻ",
    autocadService: "አውቶካድ አገልግሎት",
    modelingService: "3ዲ ሞደሊንግ አገልግሎት",
    orderUs: "ያዘዙን",
    about: "ስለ እኛ",
    howWeWork: "እንዴት እንሰራለን",
    packages: "ጥቅሎች",
    login: "ግባ",
    signup: "ተመዝገብ"
  }
};

export const Navigation = (props) => {
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'amharic' : 'english');
  };

  const t = translations[language];

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header navbar-left">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
  <img 
    src="/image/logo.png" // Update this path to match your logo's location
    alt="TiruSera Logo"
    className="navbar-logo"
  />
</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/#features" className="page-scroll">{t.home}</Link>
            </li>
            <li>
              <Link to="/AutoCADDraftingServices" className="page-scroll">
                {t.autocadService}
              </Link>
            </li>
            <li>
              <Link to="/ThreeDModelingPage" className="page-scroll">
                {t.modelingService}
              </Link>
            </li>
            <li>
              <Link to="/caddrafting" className="page-scroll">
                {t.orderUs}
              </Link>
            </li>
            <li>
              <Link to="/about" className="page-scroll">{t.about}</Link>
            </li>
            <li>
              <Link to="/workprocess" className="page-scroll">
                {t.howWeWork}
              </Link>
            </li>
            <li>
              <Link to="/packages">{t.packages}</Link>
            </li>
            <li>
              <Link to="/login" className="btn-mycustom">
                {t.login}
              </Link>
            </li>
            <li>
              <Link to="/signup" className="btn-mycustom">
                {t.signup}
              </Link>
            </li>
            
            {/* Language Toggle Button */}
            <li>
              <div className="language-toggle">
                <input 
                  type="checkbox" 
                  id="language-switch" 
                  className="language-switch"
                  onChange={toggleLanguage}
                  checked={language === 'amharic'}
                />
                <label htmlFor="language-switch" className="language-switch-label">
                  <span>{language === 'english' ? 'EN' : 'አማ'}</span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};