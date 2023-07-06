//here we have all the payment method...
import React from 'react'
import '../App.css';
import { useState, useEffect } from 'react';

//Aqui tenemos que continuar con las validaciones de 
//los inputs...

function Payment() {
    const [confirmed, setConfimed] = useState(false);
    const [name, setName] = useState("jane appleseed");
    const [carNumber, setCardNumber] = useState("0000 0000 0000 0000");  
    const [month, setMonth] = useState("00"); 
    const [year, setYear] = useState("00"); 
    const [cvc, setCvc] = useState("000");
    //para checar si hay error o no y pintar de rojo...
    const [hasError, setHasError] = useState(false);

    //Aqui comprobamos que solo se manden letras no numeros...
    const handleNameChange = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^a-zA-Z ]/g, '');
        setName(filteredValue);

        // Verificar si hay caracteres no permitidos
        if (inputValue !== filteredValue) {
            setHasError(true);
        } else {
            setHasError(false);
        }
    };

    //Funcion para el card number...
    const handleCardNumberChange = (event) => {
        const inputCardNumber = event.target.value;
        const cleanedCardNumber = inputCardNumber.replace(/\D/g, '');
        const formattedCardNumber = cleanedCardNumber
            .replace(/(.{4})/g, '$1 ')
            .trim()
            .slice(0, 19);
        const truncatedCardNumber = formattedCardNumber.slice(0, 19);
        setCardNumber(truncatedCardNumber);
    };

    return (
        <div className='main'>
            <div className='cont_img'></div>
            <div className='white'></div>
            <div className='cont_all'>
                <div className='cars_cont'>
                    <div className='front_card_cont'>
                        <div className='front_card'>

                            <div className='circles_cont'>
                                <div className='big_circle'></div>
                                <div className='small_circle'></div>
                            </div>

                            <div className='numbersNname'>
                                <div className='numbers'>
                                    <h2>{carNumber}</h2>
                                </div>
                                <div className='name'>
                                    <div className='n'>
                                        <h4>{name}</h4>
                                    </div>
                                    <div className='date'>
                                        <h4>{month}/{year}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='back_card_cont'>
                        <div className='back_card'>
                            <div className='cont_cuv'>
                                <p>{cvc}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='inputs_cont'>
                    <form>
                        <div className='cont_input_name'>
                            <label for='name'>carholder name</label>
                            <input 
                                type='text' 
                                name='name' 
                                placeholder='e.g.Jane Applessed'
                                required
                                maxLength={23}
                                onChange={handleNameChange}
                                className={hasError ? 'error' : ''}
                            />
                        </div>

                        <div className='cont_input_number'>
                            <label for='number'>card number</label>
                            <input 
                                type='text' 
                                name='number' 
                                
                                placeholder='e.g.1234 5678 9123 0000'
                                required
                                onChange={handleCardNumberChange}
                                maxLength={19}
                            />
                        </div>

                        <div className='cont_input_date'>
                            <div className='date'>
                                <label for='date'>exp. date(mm/yy)</label>
                                <input 
                                    type='text' 
                                    name='date' 
                                    placeholder='mm'
                                    maxLength={2}
                                    required
                                    onChange={(e) => setMonth(e.target.value)}
                                />
                                <input 
                                    type='text' 
                                    name='date' 
                                    placeholder='yy'
                                    maxLength={2}
                                    required
                                    onChange={(e) => setYear(e.target.value)}
                                />
                            </div>
                            <div className='cvc'>
                                <label for='cvc'>cvc</label>
                                <input 
                                    type='text' 
                                    name='cvc' 
                                    placeholder='e.g.123'
                                    maxLength={3}
                                    required
                                    onChange={(e) => setCvc(e.target.value)}
                                />
                            </div>
                        </div>

                        <button className='send' type='submit'>confirm</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Payment