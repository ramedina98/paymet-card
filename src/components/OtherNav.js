/*Here we have the component that take the info from 
the api and show them...*/
import '../App.css';
/*
link para la api...
https://ramedina98.github.io/api_nat/dataBankLinks.json*/

import React from 'react'

function OtherNav() {
    return (
        <div className='contenedor'>
            <div className='title'>
                <h2>Titulo</h2>
            </div>
            <div className='info'>
                <ul>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
            </div>
        </div>
    )
}

export default OtherNav