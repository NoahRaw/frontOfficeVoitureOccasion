import React, { useState, useEffect } from 'react';

export default function DetailHistoriqueAnnonce({ nomutilisateur,idvoitureutilisateur, dateventedebut, matricule, kilometrage, prix, nommarque, nommodele, nomcarburant, kw, cv, nomboitedevitesse, nomtypedevehicule, nbrporte, puissance, setAnnonces }) {

    const [voiturePhoto, setVoiturePhoto] = useState([]);
  
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
            const response = await fetch('http://localhost:52195/Voitureutilisateur_view/getHistoriqueAnnonce');
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

    return(
        
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-place mb-30">
                <div className="place-img">
                    {/* {voiturePhoto.map((photo) => ( */}
                    {/* // <img src={`${photo.nomPhoto}`} alt="Description de l'image" ></img> */}
                        <img src="https://images.bfmtv.com/UsUszd-6qH5LSvmGP4LK5ZkJgwE=/4x3:1252x705/800x0/images/-180591.jpg" alt="Description de l'image" ></img>

                    {/* ))} */}
                </div>
                <div className="place-cap">
                    <div className="place-cap-top">
                        <span><i className="fas fa-user"></i><span>{nomutilisateur}</span> </span>
                        <h3><a href="#">{nomtypedevehicule} {nommodele}</a></h3>
                        <p className="dolor">{prix} Ar<span>/ {kilometrage} km</span></p>
                    </div>
                    <div className="place-cap-bottom">
                        <ul>
                            <li><i className="fas fa-calendar-alt"></i>{dateventedebut}</li>
                            <li><i className="fas fa-car"></i>{matricule}</li>
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
                        <button class="genric-btn danger circle">Contacter</button>
                    </div>
                </div>

            </div>
        </div>
                
    );
};
