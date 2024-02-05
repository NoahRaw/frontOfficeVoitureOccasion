import React, { useState, useEffect } from 'react';

export default function DetailAnnonce({user}) {
  const [estVisible, setEstVisible] = useState(false);

  const handleClick = () => {
    setEstVisible(!estVisible);
  };

  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="single-place mb-30">
            <div className="place-img">
                    <img src="https://images.bfmtv.com/UsUszd-6qH5LSvmGP4LK5ZkJgwE=/4x3:1252x705/800x0/images/-180591.jpg" alt="Description de l'image" ></img>
            </div>
            <div className="place-cap">
                <div className="place-cap-top">
                    <span><i className="fas fa-user"></i><span>{user.nomutilisateur}</span> </span>
                    <h3><a href="#">{user.nomtypedevehicule} {user.nommodele}</a></h3>
                    <p className="dolor">{user.prix} Ar <span>/ {user.kilometrage} km</span></p>
                </div>
                <div className="place-cap-bottom">
                    <ul>
                        <li><i className="fas fa-calendar-alt"></i>{user.dateventedebut}</li>
                        <li><i className="fas fa-car"></i>{user.matricule}</li>
                    </ul>
                </div>
                {estVisible && 
                    <div className="place-cap-top">
                        <p className="dolor">Carburant : <span> {user.nomcarburant}</span></p>
                        <p className="dolor">Puissance en chevaux : <span> {user.kw} kw / {user.cv} cv</span></p>
                        <p className="dolor">Puissance : <span> {user.puissance}</span></p>
                        <p className="dolor">Marque : <span> {user.nommarque}</span></p>
                        <p className="dolor">Type de boite de vitesse : <span> {user.nomboitedevitesse}</span></p>
                        <p className="dolor">Nombre de porte : <span> {user.nbrporte}</span></p>
                    </div>
                }
                <div class="button-group-area mt-40">
                    <button onClick={handleClick} class="genric-btn success circle">Detail</button>
                    <button class="genric-btn danger circle" style={{marginLeft : 55}}>Contacter</button>
                </div>
            </div>

        </div>
    </div>
  );
}
