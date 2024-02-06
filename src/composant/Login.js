import React, { useState } from 'react';
import '../css/login.css';

const Login = ({setIsConnected}) => {
  const [token, setToken] = useState('');
  const [login, setLogin] = useState('antra@gmail.com');
  const [pwd, setPwd] = useState('3333');

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
            setToken(authToken);
            localStorage.setItem('authToken', authToken);
            setIsConnected(true);
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
					
					<div class="text-center p-t-46 p-b-20">
						<span class="txt2">
							or sign up using
						</span>
					</div>

					<div class="login100-form-social flex-c-m">
						<a href="facebook.com" class="login100-form-social-item flex-c-m bg1 m-r-5">
							<i class="fa fa-facebook-f" aria-hidden="true"></i>
						</a>

						<a href="twitter.com" class="login100-form-social-item flex-c-m bg2 m-r-5">
							<i class="fa fa-twitter" aria-hidden="true"></i>
						</a>
					</div>
				</form>
				{token && console.log(token)}
				<div class="login100-more" style={{backgroundImage: `url('https://images.bfmtv.com/UsUszd-6qH5LSvmGP4LK5ZkJgwE=/4x3:1252x705/800x0/images/-180591.jpg')`}}>
				</div>
			</div>
		</div>
	</div>

  );
};

export default Login;
