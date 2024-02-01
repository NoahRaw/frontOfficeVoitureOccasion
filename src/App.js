import React, { useState } from 'react';

import Header from './composant/template/Header.js';
import Annonce from './composant/Annonce.js';
import Footer from './composant/template/Footer.js';

import './App.css';

const App = () => {
 
  return (
    <div>
      <Header />
      <Annonce />
      <Footer />
    </div>
  );
};

export default App;