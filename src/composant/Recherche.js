import React, { useState, useEffect } from 'react';
import ConstructAnnonce from './ConstructAnnonce';

const Recherche = () => {

  const [idmarque, setSelectIdMarque] = useState('');
  const [idmodele, setSelectIdModele] = useState('');
  const [idcarburant, setSelectIdCarburant] = useState('');
  const [idpuissance, setSelectIdPuissance] = useState('');
  const [idboitedevitesse, setSelectIdBoiteDeVitesse] = useState('');
  const [prixMin, setPrixMin] = useState('');
  const [prixMax, setPrixMax] = useState('');
  const [nbrPorte, setNbrPorte] = useState('');
  const [puissanceVal, setPuissanceVal] = useState('');
  const [date, setDate] = useState('');
  const [kilometrage, setKilometrage] = useState('');
  const [idtypedevehicule, setIdTypeDeVehicule] = useState('');

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userData, setUserData] = useState([]);


  const [dropdownMarque, setDropdownMarque] = useState([]);

    useEffect(() => {
        // Exemple de chargement des options depuis un web service
        const fetchDropdownOptions = async () => {
          try {
            const response = await fetch('http://localhost:52195/Marque');
            if (response.ok) {
              const options = await response.json();
              setDropdownMarque(options);
            } else {
              console.error('Erreur lors de la requête HTTP:', response.statusText);
            }
          } catch (error) {
            console.error('Erreur lors de la requête HTTP:', error);
          }
        };
    
        fetchDropdownOptions();
      }, []);

      const handleTextMarque = (e) => {
        setSelectIdMarque(e.target.value);
      };


      const [dropdownModele, setDropdownModele] = useState([]);

        useEffect(() => {
            const fetchDropdownModele = async () => {
            try {
                const response = await fetch('http://localhost:52195/Modele');
                if (response.ok) {
                const options = await response.json();
                setDropdownModele(options);
                } else {
                console.error('Erreur lors de la requête HTTP:', response.statusText);
                }
            } catch (error) {
                console.error('Erreur lors de la requête HTTP:', error);
            }
            };

            fetchDropdownModele();
        }, []); 

        const handleTextModele = (e) => {
            setSelectIdModele(e.target.value);
        };


        const [dropdownCarburant, setDropdownCarburant] = useState([]);

        useEffect(() => {
          const fetchDropdownCarburant = async () => {
            try {
              const response = await fetch('http://localhost:52195/Carburant');
              if (response.ok) {
                const options = await response.json();
                setDropdownCarburant(options);
              } else {
                console.error('Erreur lors de la requête HTTP:', response.statusText);
              }
            } catch (error) {
              console.error('Erreur lors de la requête HTTP:', error);
            }
          };
      
          fetchDropdownCarburant();
        }, []); 

        const handleTextCarburant = (e) => {
            setSelectIdCarburant(e.target.value);
        };


        const [dropdownPuissance, setDropdownPuissance] = useState([]);

        useEffect(() => {
            const fetchDropdownPuissance = async () => {
            try {
                const response = await fetch('http://localhost:52195/Puissance');
                if (response.ok) {
                const options = await response.json();
                setDropdownPuissance(options);
                } else {
                console.error('Erreur lors de la requête HTTP:', response.statusText);
                }
            } catch (error) {
                console.error('Erreur lors de la requête HTTP:', error);
            }
            };

            fetchDropdownPuissance();
        }, []); 

        const handleTextPuissance = (e) => {
            setSelectIdPuissance(e.target.value);
          };


          const [dropdownBoiteDeVitesse, setDropdownBoiteDeVitesse] = useState([]);

        useEffect(() => {
            const fetchDropdownBoiteDeVitesse = async () => {
            try {
                const response = await fetch('http://localhost:52195/Boitedevitesse');
                if (response.ok) {
                const options = await response.json();
                setDropdownBoiteDeVitesse(options);
                } else {
                console.error('Erreur lors de la requête HTTP:', response.statusText);
                }
            } catch (error) {
                console.error('Erreur lors de la requête HTTP:', error);
            }
            };

            fetchDropdownBoiteDeVitesse();
        }, []); 


          const [dropdownTypeDeVehicule, setDropdownTypeDeVehicule] = useState([]);

        useEffect(() => {
            const fetchDropdownTypeDeVehicule = async () => {
            try {
                const response = await fetch('http://localhost:52195/typeDeVehicules');
                if (response.ok) {
                const options = await response.json();
                setDropdownTypeDeVehicule(options);
                } else {
                console.error('Erreur lors de la requête HTTP:', response.statusText);
                }
            } catch (error) {
                console.error('Erreur lors de la requête HTTP:', error);
            }
            };

            fetchDropdownTypeDeVehicule();
        }, []); 

        const handleTextBoiteDeVitesse = (e) => {
            setSelectIdBoiteDeVitesse(e.target.value);
          };

          const handleTextTypeDeVehicule = (e) => {
            setIdTypeDeVehicule(e.target.value);
          };


          const handleSubmit = async (event) => {
            event.preventDefault();

            // Vous pouvez maintenant effectuer votre appel à votre service Spring Boot ici
            try {

              const response = await fetch(`http://localhost:52195/Voitureutilisateur_view/rechercheMultiple?prixmin=${prixMin}&prixmax=${prixMax}`, {                
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idmarque : idmarque,
                    idmodele : idmodele,
                    idcarburant : idcarburant,
                    idpuissance : idpuissance,
                    idboitedevitesse : idboitedevitesse,
                    idtypedevehicule : idtypedevehicule,
                    nbrporte : nbrPorte,
                    puissance : puissanceVal,
                    dateventedebut : date,
                    kilometrage : kilometrage
                }),
              }); 
        
              if (response.ok) {
                setFormSubmitted(true); 
                const data = await response.json();
                setUserData(data);
                console.log("data "+JSON.stringify(data))
                
              } else {
                console.error('Erreur lors de la soumission des données:', response.statusText);
              }
            } catch (error) {
              console.error('Erreur lors de la soumission des données:', error);
            }
          };
        
          const handleTextPrixMin = (e) => {
            setPrixMin(e.target.value);
          };

          const handleTextPrixMax = (e) => {
            setPrixMax(e.target.value);
          };

          const handleTextNbrPorte = (e) => {
            setNbrPorte(e.target.value);
          };

          const handleTextPuissanceVal = (e) => {
            setPuissanceVal(e.target.value);
          };

          const handleTextDate = (e) => {
            setDate(e.target.value);
          };

          const handleTextKilometrage = (e) => {
            setKilometrage(e.target.value);
          };
          
          
    return (

        <div>
            <div id="right-panel" className="right-panel">
                    <div className="content">
                            <div className="animated fadeIn">
                                  <div className="col-lg-10">
                                        <div className="card">
                                            <div className="card-body">
                                                    <div className="card-title">
                                                              <h3 className="text-center">Recherche avancé</h3>
                                                    </div>
                                                    <hr></hr>
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="form-group">
                                                                <label for="cc-payment" className="control-label mb-1"><b>Marque</b></label>
                                                                <div className="col-10 col-md-15">
                                                                      <select value={idmarque} onChange={handleTextMarque} name="" id="select" className="form-control">
                                                                                          <option value={0} selected>
                                                                                                choisissez votre marque
                                                                                          </option>
                                                                                          {dropdownMarque.map((option) => (
                                                                                                          <option value={option.id_marque}>
                                                                                                              {option.description}
                                                                                                          </option>
                                                                                                          ))}
                                                                      </select>
                                                                </div>
                                                          </div>
                                                        
                                                        <div className="form-group">
                                                        <label for="cc-payment" className="control-label mb-1"><b>Modele</b></label>
                                                            <div className="col-10 col-md-15">
                                                                  <select value={idmodele} onChange={handleTextModele} name="" id="select" className="form-control">
                                                                                      <option value={0}>
                                                                                          choisissez votre modele
                                                                                    </option>
                                                                                      {dropdownModele.map((option) => (
                                                                                                      <option value={option.idmodele}>
                                                                                                          {option.description}
                                                                                                      </option>
                                                                                                      ))}
                                                                  </select>
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                        <label for="cc-payment" className="control-label mb-1"><b>Carburant</b></label>
                                                            <div className="col-10 col-md-15">
                                                                  <select value={idcarburant} onChange={handleTextCarburant} name="" id="select" className="form-control">
                                                                                      <option value={0}>
                                                                                            choisissez votre carburant
                                                                                      </option>
                                                                                      {dropdownCarburant.map((option) => (
                                                                                                      <option value={option.id_carburant}>
                                                                                                          {option.description}
                                                                                                      </option>
                                                                                      ))}
                                                                  </select>
                                                            </div>
                                                        </div>


                                                        <div className="form-group">
                                                              <label for="cc-payment" className="control-label mb-1"><b>Puissance kw cv</b></label>
                                                              <div className="col-10 col-md-15">
                                                                    <select value={idpuissance} onChange={handleTextPuissance} name="" id="select" className="form-control">
                                                                                      <option value={0}>
                                                                                      choisissez votre puissance
                                                                                      </option>
                                                                                        {dropdownPuissance.map((option) => (
                                                                                                        <option value={option.idpuissance}>
                                                                                                            {option.kw} kw {option.cv} cv
                                                                                                        </option>
                                                                                                        ))}
                                                                    </select>
                                                              </div>
                                                        </div>


                                                        <div className="form-group">
                                                              <label for="cc-payment" className="control-label mb-1"><b>Boite de vitesse </b></label>
                                                              <div className="col-10 col-md-15">
                                                                    <p>Boite de vitesse : <select name="" id="select" className="form-control" value={idboitedevitesse} onChange={handleTextBoiteDeVitesse}>
                                                                                        <option value={0}>
                                                                                        choisissez votre boite de vitesse
                                                                                    </option>
                                                                                {dropdownBoiteDeVitesse.map((option) => (
                                                                                                <option value={option.idboitedevitesse}>
                                                                                                    {option.description}
                                                                                                </option>
                                                                                                ))}
                                                                    </select></p>
                                                              </div>
                                                        </div>

                                                        <div className="form-group">
                                                              <label for="cc-payment" className="control-label mb-1"><b>Type vehicule</b></label>
                                                              <div className="col-10 col-md-15">
                                                                <select name="" id="select" className="form-control" value={idtypedevehicule} onChange={handleTextTypeDeVehicule}>
                                                                                    <option value={0}>
                                                                                    choisissez votre type de vehicule
                                                                                                      </option>
                                                                            {dropdownTypeDeVehicule.map((option) => (
                                                                                            <option value={option.idTypeDeVehicule}>
                                                                                                {option.description}
                                                                                            </option>
                                                                                            ))}
                                                                </select>
                                                              </div>
                                                        </div>
                                                        
                                                        <div className="col-10">
                                                              <label for="x_card_code" className="control-label mb-1"><b>Nombre de porte</b></label>
                                                              <div className="input-group">
                                                                <input type="text" value={nbrPorte} onChange={handleTextNbrPorte} className="form-control"/>
                                                              </div>
                                                        </div>                      

                                                        <div className="col-10">
                                                            <label for="x_card_code" className="control-label mb-1"><b>Puissance</b></label>
                                                            <div className="input-group">
                                                              <input type="text" value={puissanceVal} onChange={handleTextPuissanceVal} className="form-control" /> 
                                                            </div>                
                                                        </div>   

                                                        <div className="col-10">
                                                            <label for="x_card_code" className="control-label mb-1"><b>date</b></label>
                                                            <div className="input-group">
                                                                <input type="date" value={date} onChange={handleTextDate} className="form-control"/>
                                                            </div>
                                                        </div>                    

                                                        <div className="col-10">
                                                            <label for="x_card_code" className="control-label mb-1"><b>kilometrage</b></label>
                                                            <div className="input-group">
                                                                  <input type="text" value={kilometrage} onChange={handleTextKilometrage} className="form-control"/>
                                                            </div>
                                                        </div>


                                                        <div className="col-10">
                                                            <label for="x_card_code" className="control-label mb-1"><b>Prix min</b></label>
                                                            <div className="input-group">
                                                              <input type="text" value={prixMin} onChange={handleTextPrixMin} className="form-control"/>
                                                              </div>
                                                        </div>

                                                        <div className="col-10">
                                                            <label for="x_card_code" className="control-label mb-1"><b>Prix max</b></label>
                                                            <div className="input-group">
                                                                <input type="text" value={prixMax}  onChange={handleTextPrixMax} className="form-control"/>
                                                            </div>
                                                        </div>

                                                        <div className="col-10">
                                                        <button id="payment-button" type="submit" className="mt-3 login100-form-btn">
                                                            <span id="payment-button-amount">Rechercher</span>
                                                        </button>
                                                        </div>
                                                    </form>
                                          </div>
                                      </div>
                                </div>
                          </div>
                  </div>
          </div>
          
           {/* Affichez le composant tableau si le formulaire a été soumis */}
           {formSubmitted && userData && <ConstructAnnonce liste={userData}  />}
        </div>

    )
}

export default Recherche;
