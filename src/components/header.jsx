import React, { useState } from 'react';








export const Header = (props) => {

  
const [isChatOpen, setIsChatOpen] = useState(false);
const [isButtonClicked, setIsButtonClicked] = useState(false);

const handleChatButtonClick = () => {
setIsChatOpen(!isChatOpen);
setIsButtonClicked(true);
setTimeout(() => setIsButtonClicked(false), 300);
};


// Add these styles to your CSS file
const chatButtonStyles = {
position: 'fixed',
bottom: '20px',
right: '20px',
backgroundColor: '#0066ff',
color: 'white',
padding: '12px 24px',
borderRadius: '24px',
boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
cursor: 'pointer',
display: 'flex',
alignItems: 'center',
gap: '8px',
zIndex: 40,
transition: 'transform 0.2s',
border: 'none',
fontSize: '16px',
};




  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#/caddrafting"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Order Now
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>


      <button
        className={`chat-button ${isButtonClicked ? 'clicked' : ''}`}
        onClick={handleChatButtonClick}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        Let's Talk
      </button>

      <div className={`chat-modal ${isChatOpen ? 'open' : 'closed'}`}>
        <div className="chat-header">Chat with us</div>
        <div className="chat-messages">
          {/* Chat messages will appear here */}
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type your message..." />
          <button>Send</button>
        </div>
      </div>


    </header>






  );
};
