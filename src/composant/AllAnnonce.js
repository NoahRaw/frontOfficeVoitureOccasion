import React, { useState, useEffect } from 'react';
import DetailAnnonce from './DetailAnnonce';


const AllAnnonce = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:52195/Voitureutilisateur_view`);

        if (response.ok) {
          const data = await response.json();
          setUserData(data); // Mettez à jour l'état avec les données récupérées
        } else {
          console.error('Erreur lors de la requête HTTP:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la requête HTTP:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="favourite-place place-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>ANNONCE</span>
                            <h2>Listes des annonces</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {userData.map((user) => (
                        <DetailAnnonce user={user} />
                    ))}
                </div>
            </div>
    </div>
)};

export default AllAnnonce;
