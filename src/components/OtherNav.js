/*Here we have the component that take the info from 
the api and show them...*/
import '../App.css';
import axios from "axios";
import { useState, useEffect } from 'react';

import React from 'react'

function OtherNav() {

    const [data, setData] = useState([]);
    const peticionGet = async() => {
        await axios.get("https://ramedina98.github.io/api_nat/dataBankLinks.json")
        .then(response => {
            console.log(response.data)
            setData(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        peticionGet();
    },[]); 
    
    return (
        <>
            {data && data.map(item => (
                <div className='contenedor' key={item.id}>
                    <div className='title'>
                        <h2>{item.name}</h2>
                    </div>
                    <div className='info'>
                        <ul>
                            {item && item.items.map((lis) => (
                            <li>{lis}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    )
}

export default OtherNav