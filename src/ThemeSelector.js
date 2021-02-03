
import React, { useState } from 'react';
import Beaches from './Beaches';
import Lakes from './Lakes';
import Mountains from './Mountains';
import Plains from './Plains';
import Home from './Home';

function Display(){
    const [location, setLocation] = useState('Home')

    const Checker = () =>{
        const current = location;
        if (current === 'Beaches'){
            return <Beaches/>;
        }
        if (current === 'Lakes'){
            return <Lakes/>;
        }
        if (current === 'Mountains'){
            return <Mountains/>;
        }
        if (current === 'Plains'){
            return <Plains/>;
        }
        return <Home/>;
    }

   return (
   <div>
        <div><Checker/></div>

        <h1>{location}</h1>
        <button onClick = {()=> setLocation('Beaches')}>Beaches</button>
        <button onClick = {()=> setLocation('Lakes')}>Lakes</button>
        <button onClick = {()=> setLocation('Mountains')}>Mountains</button>
        <button onClick = {()=> setLocation('Plains')}>Plains</button>
        <button onClick = {()=> setLocation('Home')}>Home</button>

    </div>)
}




function ThemeSelector(){
      return ( 
        <div>
            <Display/>
        </div>)
}


export default ThemeSelector;