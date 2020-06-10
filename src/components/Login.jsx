import React from 'react';
import GoogleBtn  from './GoogleButton';


function login() {
  
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