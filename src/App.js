import React, { useState } from 'react';

import Header from './composant/template/Header.js';
import Footer from './composant/template/Footer.js';
import ChatBody from "./components/chatBody/ChatBody";
import recherche from "./composant/Recherche";
import AllAnnonce from "./composant/AllAnnonce";
import HistoriqueAnnonce from "./composant/HistoriqueAnnonce";
import ListeFavoris from "./composant/ListeFavoris";
import Login from "./composant/Login";

import './App.css';

export default function App(params) {
  const [currentComponent, setCurrentComponent] = useState('login');

  const [isConnected, setIsConnected] = useState(false);

  const[otherId,setOtherId]=useState({});

  // localStorage.setItem("authToken",'de95ef026b26feb89d7f7049570de2b6b42b61004ac46f7ad489970b4b244efa')

  const authToken = localStorage.getItem('authToken');

      const checkToken = async () => {
        try {
          const response = await fetch(`https://voitureoccasion-production-d019.up.railway.app/Utilisateurs/isTokenValide`, {
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
                setCurrentComponent('allAnnonce')
            }

          } else {
            console.error('Erreur lors de l\'authentification');
          }
        } catch (error) {
          console.error('Erreur lors de la requête HTTP:', error);
        }
    };
    if(isConnected===false)
      checkToken();

  const components = {
    recherche: recherche,
  };

  const renderComponent = () => {
      const ComponentToRender = components[currentComponent];
      switch (currentComponent) {
        case 'chatBody':
          return <div className="__main"><ChatBody setOtherId={setOtherId} otherId={otherId} isConnected={isConnected} setCurrentComponent={setCurrentComponent}/></div>;
        case 'recherche':
          return <ComponentToRender/>;
        case 'allAnnonce':
          return <AllAnnonce setOtherId={setOtherId} setCurrentComponent={setCurrentComponent}/>;
        case 'historiqueAnnonce':
            return <HistoriqueAnnonce />;
        case 'ListeFavoris':
          return <ListeFavoris />;
        default:
          return <Login setIsConnected={setIsConnected} setCurrentComponent={setCurrentComponent}/>;
      }
  };

  return (
    <div>
      { 
        isConnected &&
        (
          <div>
            <Header setCurrentComponent={setCurrentComponent} setIsConnected={setIsConnected}/>
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