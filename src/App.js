// import React, { useState } from 'react';
import React from 'react';

import Header from './composant/template/Header.js';
// import Annonce from './composant/Annonce.js';
import Footer from './composant/template/Footer.js';
import ChatBody from "./components/chatBody/ChatBody";

import './App.css';

const App = () => {
 
  return (
    <div>
      <Header />
      {/* <Annonce /> */}
      <div className="__main">
        <ChatBody />
      </div>
      <Footer />
    </div>
  );
};

export default App;