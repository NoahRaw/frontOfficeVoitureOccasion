import React, { useState } from 'react';

import Header from './composant/template/Header.js';
import AllAnnonce from './composant/AllAnnonce.js';
import Footer from './composant/template/Footer.js';
import Recherche from './composant/Recherche.js';


import './App.css';

const App = () => {
 
  return (
    <div>
      <Header />
      <Recherche />
      <Footer />
    </div>
  );
};

export default App;