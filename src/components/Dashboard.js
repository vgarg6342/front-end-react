import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Dash() {
   // the stored user data from the authentication
   const [User, setUser] = useState([]);

   const updateProfile = ()=> {
      setUser(localStorage.name) //need to find some way to get additional data from the user
   }
   // data from the server containg every event the user have participated
   const [, setProfile] = useState([])

  
   useEffect(() => {
      updateProfile()
      const config = {
         headers:{
            'Content-Type': 'application/json'   
         }
      }
      config.headers['Authorization'] = `Token ${localStorage.token}`
      axios.get('http://localhost:8000/isauthenticated', config).then(
         res => {
            setProfile(res.data)
            console.log(res.data)
         }
         
      )
     
   }, [])
   return (

      <div>
         {User}
      </div>
      

   );
}  


export default Dash;