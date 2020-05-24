import React from 'react';
import GoogleBtn  from './GoogleButton';


function login() {
   // the stored user data from the authentication
  
   const onLogout = ()=>{
       window.location.href = '/'
   }
   return (
      <div>
         <GoogleBtn  onLogout = {onLogout}/>
      </div>
   );
}  


export default login;