import React, { useState, useEffect } from 'react';
import DetailHistoriqueAnnonce from './DetailHistoriqueAnnonce';

const HistoriqueAnnonce = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:52195/Voitureutilisateur_view/getHistoriqueAnnonce`);

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
    <main>
        <div className="favourite-place place-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>ANNONCE</span>
                            <h2>Historique de vos annonces</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {userData.map((user) => (
                        <DetailHistoriqueAnnonce
                        key={user.idvoitureutilisateur}
                        nomutilisateur={user.nomutilisateur}
                        idvoitureutilisateur={user.idvoitureutilisateur}
                        dateventedebut={user.dateventedebut}
                        matricule={user.matricule}
                        kilometrage={user.kilometrage}
                        prix={user.prix}
                        nommarque={user.nommarque}
                        nommodele={user.nommodele}
                        nomcarburant={user.nomcarburant}
                        kw={user.kw}
                        cv={user.cv}
                        nomboitedevitesse={user.nomboitedevitesse}
                        nomtypedevehicule={user.nomtypedevehicule}
                        nbrporte={user.nbrporte}
                        puissance={user.puissance}
                        setAnnonces={setUserData}
                        />
                    ))}
                </div>
            </div>
        </div>
    </main>
  );
};

export default HistoriqueAnnonce;
