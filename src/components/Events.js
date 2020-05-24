import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom'
 

function Events(){
    const [items, setItems] = useState([])
    const fetchItems = async () =>{
        const data = await fetch('http://localhost:8000/events/')
        const items = await data.json();
        console.log(items)
        return items  
             
    }

    useEffect(() =>{ 
        fetchItems().then((items) =>{
            setItems(items)}); 
    },[]
    );
    if (!items.length) {
        return <h2>Loading posts...</h2>;
      }
    
    return (
        <div>
            {items.map(item=>  
            <div key ={item.serial_no}>       
            <h1 >
                <Link to={`/Events/${item.event_name}`}>{item.event_name}  </Link>
            </h1>  
            
            </div>       
            )}
        </div>
    );
}


export default Events;