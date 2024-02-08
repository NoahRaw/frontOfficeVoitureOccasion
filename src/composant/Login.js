/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../css/login.css';

const Login = ({setIsConnected,setCurrentComponent}) => {
  const [login, setLogin] = useState('noah@gmail.com');
  const [pwd, setPwd] = useState('0000');

  const voir = () => 
  {
	setCurrentComponent('allAnnonce')
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`http://localhost:52195/Utilisateurs/authenticateSimpleUser?login=${login}&pwd=${pwd}`, {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.text();
        const authToken = data; // Assurez-vous d'adapter cela à la structure de la réponse du service webi
        if(authToken){
            localStorage.setItem('authToken', authToken);
            setIsConnected(true);
			setCurrentComponent('allAnnonce');
        }

        // Stockage dans le localStorage
        console.log(authToken)
      } else {
        console.error('Erreur lors de l\'authentification');
      }
    } catch (error) {
      console.error('Erreur lors de la requête HTTP:', error);
    }
  };

  return (
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form onSubmit={handleLogin} class="login100-form validate-form">
					<span class="login100-form-title p-b-43">
						Login to continue
					</span>
					
					
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" value={login} onChange={(e) => setLogin(e.target.value)} type="email" placeholder='email'/>
						<span class="focus-input100"></span>
						{/* <span class="label-input100">Email</span> */}
					</div>
					
					
					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<input class="input100" type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder='Your password'/>
						<span class="focus-input100"></span>
						{/* <span class="label-input100">Password</span> */}
					</div>

					<div class="container-login100-form-btn">
						<button class="login100-form-btn" type="submit">
							Login
						</button>
					</div>

					<div class="container-login100-form-btn" style={{"margin-top": "50px"}}>
						<button class="login100-form-btn" onClick={voir} style={{"background": "black"}}>
							voir la liste des annonce
						</button>
					</div>
					
					<div class="text-center p-t-46 p-b-20">
						<span class="txt2">
							or sign up using
						</span>
					</div>

					<div class="login100-form-social flex-c-m">
						<a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5">
							<i class="fa fa-facebook-f" aria-hidden="true"></i>
						</a>

						<a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
							<i class="fa fa-twitter" aria-hidden="true"></i>
						</a>
					</div>
				</form>
				<div class="login100-more" style={{backgroundImage: `url('https://images.bfmtv.com/UsUszd-6qH5LSvmGP4LK5ZkJgwE=/4x3:1252x705/800x0/images/-180591.jpg')`}}>
				</div>
			</div>
		</div>
	</div>

  );
};

export default Login;
