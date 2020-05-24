import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

function GoogleBtn(props){

  const[isLogged,setIsLogged] = useState(false)

  const success =(response)=>{

    const id_token = response.tokenId

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8000/register/');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
     const json=JSON.parse(xhr.responseText);
     localStorage.setItem("name", json.name)
     localStorage.setItem("email", json.email)
     localStorage.setItem("token", json.token)
     console.log('Signed in as: ' + xhr.responseText)
    };
    xhr.send('idtoken=' + id_token);
    setIsLogged(true)
  }

  const faliure = (response)=>{
    localStorage.clear()
    props.trigger()
    console.log(response)
    // put a alert for error with google authentication failed
    setIsLogged(false)
  }

  const logout = (response) =>{
    setIsLogged(false)
    props.onLogout()
    localStorage.clear()
    
  }

  if(!isLogged){
  return(
    <GoogleLogin
    clientId="66922569807-nn0ubkp1qjm4q89n5schp67mgg4jap8u.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={success}
    onFailure={faliure}
    redirectUri={`http://localhost:3000/userdetails`}
    isSignedIn={true}
    cookiePolicy={'single_host_origin'}
  />
  )
  }
  else{
  return(
    <GoogleLogout
    clientId="66922569807-nn0ubkp1qjm4q89n5schp67mgg4jap8u.apps.googleusercontent.com"
    buttonText="Logout"
    onLogoutSuccess={logout}
  >
  </GoogleLogout>
  )
  }
}
export default GoogleBtn


