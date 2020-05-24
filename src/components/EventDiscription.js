import React, {useState, useEffect} from 'react';
import axios from 'axios';


function EventDiscription(match){

    useEffect(() =>{
      fetchItem().then((items)=>
      setItem(items)
      ) 
    },[]
    );
    
    const [items, setItem] = useState([]);
    const fetchItem = async () =>{
        const data = await fetch(`http://localhost:8000/events/${match.match.params.id}/`);
        const items = await data.json()
        console.log(items)  
        return items
    }
    const registerHandler = ()=>{
        const config = {
            headers:{
               'Content-Type': 'application/json',
               'Authorization': `Token ${localStorage.token}`
            }
         }
        config.headers[`${items.event_name}`] = 'Y'
    
        axios.put('http://localhost:8000/user-registration/',{} ,config).then(
             res => {
             } 
          )
    }
    return (
        <div>
            {items.discription}
            <div>
            <button onClick = {registerHandler} >REGISTER</button>
            </div>
        </div>
        
    );
}


export default EventDiscription;