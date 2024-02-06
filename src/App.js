import React, { useState } from 'react';

import Header from './composant/template/Header.js';
// import Annonce from './composant/Annonce.js';
import Footer from './composant/template/Footer.js';
import ChatBody from "./components/chatBody/ChatBody";
import recherche from "./composant/Recherche";
import allAnnonce from "./composant/AllAnnonce";

import './App.css';

const chatBody = () => <div className="__main"><ChatBody /></div>;
const login = () => <div></div>;

export default function App(params) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentComponent, setCurrentComponent] = useState('login');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isConnected, setIsConnected] = useState(false);

  localStorage.setItem("authToken",'de95ef026b26feb89d7f7049570de2b6b42b61004ac46f7ad489970b4b244efa')

  const authToken = localStorage.getItem('authToken');

    if(authToken==null){
      setIsConnected(false)
    }
    else{
      const checkToken = async () => {
        try {
          const response = await fetch(`http://localhost:52195/Utilisateurs/isTokenValide`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            const boolean = data; // Assurez-vous d'adapter cela à la structure de la réponse du service webi
            console.log('componentKey: ',boolean);

            if(boolean===true){
                setIsConnected(true);
            }

          } else {
            console.error('Erreur lors de l\'authentification');
          }
        } catch (error) {
          console.error('Erreur lors de la requête HTTP:', error);
        }
      }
      checkToken();
    };

  const components = {
    chatBody: chatBody,
    login: login,
    recherche: recherche,
    allAnnonce: allAnnonce,
  };

  const renderComponent = () => {
      const ComponentToRender = components[currentComponent];
      switch (currentComponent) {
        case 'chatBody':
          return <ComponentToRender/>;
        case 'recherche':
          return <ComponentToRender/>;
        case 'allAnnonce':
          return <ComponentToRender/>;
        default:
          return <ComponentToRender/>;
      }
  };

  return (
    <div>
      { 
        isConnected &&
        (
          <div>
            <Header setCurrentComponent={setCurrentComponent}/>
          </div>
        )
      }

      {renderComponent()}

      { 
        isConnected &&
        (
          <div>
            <Footer />
          </div>
        )
      }
    </div>
  );
}