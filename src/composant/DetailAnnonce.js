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
                <img src="https://images.bfmtv.com/UsUszd-6qH5LSvmGP4LK5ZkJgwE=/4x3:1252x705/800x0/images/-180591.jpg" alt=""/>
            </div>
            <div className="place-cap">
                <div className="place-cap-top">
                    <span><i className="fas fa-star"></i><span>{user.nomutilisateur}</span> </span>
                    <h3><a href="#">{user.nommodele}</a></h3>
                    <p className="dolor">{user.prix}<span></span></p>
                </div>
                <div className="place-cap-bottom">
                    <ul>
                        <li><i className="far fa-clock"></i>{user.dateventedebut}</li>
                        <li><i className="fas fa-map-marker-alt"></i>{user.nommarque}</li>
                    </ul>
                </div>

                {estVisible &&  <div className="place-cap-bottom" >
                    <p>carburant : {user.nomcarburant}</p>
                    <p>kw : {user.kw}</p>
                    <p>cv : {user.cv}</p>
                    <p>boite de vitesse : {user.nomboitedevitesse}</p>
                    <p>type de vehicule : {user.nomtypedevehicule}</p>
                    <p>nombre de porte : {user.nbrporte}</p>
                    <p>puissance : {user.puissance}</p>
                </div> }

                <button onClick={handleClick} class="btn btn-outline-primary">detail</button>
            </div>

        </div>
    </div>
  );
}
