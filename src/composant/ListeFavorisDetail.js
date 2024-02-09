import React, { useState, useEffect } from 'react';

export default function ListeFavorisDetail({ idannoncefavoris,nomutilisateur,idvoitureutilisateur, dateventedebut, matricule, kilometrage, prix, nommarque, nommodele, nomcarburant, kw, cv, nomboitedevitesse, nomtypedevehicule, nbrporte, puissance, setAnnonces }) {

    const [voiturePhoto, setVoiturePhoto] = useState([]);

    const authToken = localStorage.getItem('authToken');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:52195/photoVoitureUtilisateurs/getPhotoVoitureUtilisateur/${idvoitureutilisateur}`);
  
          if (response.ok) {
            const data = await response.json();
            console.log(data);
  
            setVoiturePhoto(data); // Mettez à jour l'état avec les données récupérées
          } else {
            console.error('Erreur lors de la requête HTTP:', response.statusText);
          }
        } catch (error) {
          console.error('Erreur lors de la requête HTTP:', error);
        }
      };
  
      fetchData();
    }, [idvoitureutilisateur]);

    
    useEffect(() => {
        const fetchAnnonces = async () => {
        try {
            const response = await fetch(`http://localhost:52195/AnnonceFavorisView/findAnnonceFavorisByIdUser`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
                });
            if (response.ok) {
            const data = await response.json();
            setAnnonces(data);
            } else {
            console.error('Erreur lors de la récupération des annonces:', response.statusText);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des annonces:', error);
        }
        };

        fetchAnnonces();
    }, []);
  
  
    const [estVisible, setEstVisible] = useState(false);
  
    const handleClick = () => {
      setEstVisible(!estVisible);
    };

    const deleteFavoris = async () => {
        try {
          const response = await fetch(`http://localhost:52195/Favoris/${idannoncefavoris}`, {
            method: 'DELETE',
          });
    
          if (response.ok) {
            setAnnonces(prevAnnonces => prevAnnonces.filter(annonce => annonce.idannoncefavoris !== idannoncefavoris));
            // window.location.reload();
            console.log("favoris supprime avec succes");
            
          } else {
            console.error('Erreur lors de la demande:', response.statusText);
            alert('une erreur s`est produite lors de suppression dans favoris');
          }
        } catch (error) {
          console.error('Erreur lors de la requête HTTP:', error);
        }
      };

    return(
                    
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-place mb-30">
                <div className="place-img">
                    {voiturePhoto.map((photo) => (
                      <img src={`${photo.nomPhoto}`} alt="Description de l'image" ></img>
                    ))} 
                </div>
                <div className="place-cap">
                    <div className="place-cap-top">
                        <span><i className="fas fa-user"></i><span>{nomutilisateur}</span> </span>
                        <h3><a href="#">{nomtypedevehicule} {nommodele}</a></h3>
                        <p className="dolor">{prix} Ar<span>/ {kilometrage} km</span></p>
                    </div>
                    <div className="place-cap-bottom">
                        <ul>
                            <li><i className="far fa-clock"></i>{dateventedebut}</li>
                            <li><i className="fas fa-map-marker-alt"></i>{matricule}</li>
                        </ul>
                    </div>
                    {estVisible && 
                        <div className="place-cap-top">
                            <p className="dolor">Carburant : <span> {nomcarburant}</span></p>
                            <p className="dolor">Puissance en chevaux : <span> {kw} kw / {cv} cv</span></p>
                            <p className="dolor">Puissance : <span> {puissance}</span></p>
                            <p className="dolor">Marque : <span> {nommarque}</span></p>
                            <p className="dolor">Type de boite de vitesse : <span> {nomboitedevitesse}</span></p>
                            <p className="dolor">Nombre de porte : <span> {nbrporte}</span></p>
                        </div>
                    }
                    <div class="button-group-area mt-40">
                        <button onClick={handleClick} class="genric-btn success circle">Detail</button>
                        <button onClick={deleteFavoris} class="genric-btn danger circle" style={{marginLeft : 55}}>Supprimer du favoris</button>
                    </div>
                </div>

            </div>
        </div>
    );
};
