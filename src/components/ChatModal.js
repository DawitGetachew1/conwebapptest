// src/components/ChatModal.js
import React from 'react';

const ChatModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4">Let's Talk</h2>
        <div className="chat-messages bg-gray-100 p-4 h-64 mb-4 overflow-y-auto rounded">
          {/* Chat messages will appear here */}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
    </div>
  );
};

export default ChatModal;