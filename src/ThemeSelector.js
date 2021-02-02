import React, { useState } from 'react';

function Display(){
    const [location, setLocation] = useState('Home')

   return (
   <div>
        <h1>{location}</h1>
        <button onClick = {()=> setLocation('Beaches')}>Beaches</button>
        <button onClick = {()=> setLocation('Lakes')}>Lakes</button>
        <button onClick = {()=> setLocation('Mountains')}>Mountains</button>
        <button onClick = {()=> setLocation('Plains')}>Plains</button>

    </div>)
}


function ThemeSelector(){
      return ( <div>
            <Display/>
        </div>)
}


export default ThemeSelector;