//here we have all the payment method...
import React from 'react'
import '../App.css';
import { useState, useEffect } from 'react';

//Aqui tenemos que continuar con las validaciones de 
//los inputs...

function Payment() {
    const [confirmed, setConfirmed] = useState(false);
    const [name, setName] = useState("jane appleseed");
    const [labelName, setLabelName] = useState("CARHOLDER NAME")
    const [carNumber, setCardNumber] = useState("0000 0000 0000 0000");  
    const [labelNumbers, setLabelNumbers] = useState("CARD NUMBER");
    const [month, setMonth] = useState("00"); 
    const [labelData, setLabelData] = useState("EXP. DATE(MM/YY)");
    const [year, setYear] = useState("00"); 
    const [cvc, setCvc] = useState("000");
    const [labelCvc, setLabeCvc] = useState("CVC");
    //para checar si hay error o no y pintar de rojo...
    const [hasError, setHasError] = useState(false);
    const [hasError1, setHasError1] = useState(false);
    const [hasError2, setHasError2] = useState(false);
    const [hasError3, setHasError3] = useState(false);
    const [hasErro4, setHasError4] = useState(false); 

    //Aqui comprobamos que solo se manden letras no numeros...
    const handleNameChange = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^a-zA-Z ]/g, '');
        setName(filteredValue);
        setHasError(inputValue !== filteredValue);
        setLabelName(inputValue !== filteredValue ? "No numbers" : "CARHOLDER NAME");
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
        setHasError1(inputCardNumber !== cleanedCardNumber);
        setLabelNumbers(inputCardNumber !== cleanedCardNumber ? "NO LTTERS" : "CARD NUMBER");
    };

    //funcion para validar los inputs de fecha y cvc
    const handleMonth = (e) => {
        const inputValue = e.target.value;
        const validar = inputValue.replace(/\D/g, '');
        setMonth(validar);
        setHasError2(inputValue !== validar);
        setLabelData(inputValue !== validar ? "totally invalid format" : "EXP. DATE(MM/YY)");
    }
    const handleYear= (e) => {
        const inputValue = e.target.value;
        const validar = inputValue.replace(/\D/g, '');
        setYear(validar);
        setHasError3(inputValue !== validar);
        setLabelData(inputValue !== validar ? "totally invalid format" : "EXP. DATE(MM/YY)");
    }

    //CVC function...
    const handleCvc = (e) => {
        const inputValue = e.target.value; 
        const validar = inputValue.replace(/\D/g, '');
        setCvc(validar); 
        setHasError4(inputValue !== validar);
        setLabeCvc(inputValue !== validar ? "totally invalid format" : "CVC");
    }

    /*En estas funciones validamos que ningun campo
    del form este vacio para poder hacer sumit*/
    // Verificar si todos los campos están completos
    const isFormValid = () => {
        return name && carNumber && month && year && cvc;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validar si todos los campos están completos
        if (isFormValid()) {
            setConfirmed(true);
            console.log('Formulario confirmado');
        } else {
            alert("Exito");
        }
    };

    //para retornar al formulario anterior...
    const handleContinue = (e) => {
        setName('jane appleseed');
        setCardNumber('0000 0000 0000 0000');
        setCvc('000');
        setYear('00'); 
        setMonth('00');
        setConfirmed(false);
    }

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
                    {confirmed ? (
                        <div className='father_cont_thanks'>
                            <div className='cont_thanks'>
                                <div className='img'></div>
                                <div className='cont_txt_thanks'>
                                    <h2>thank you!</h2>
                                    <p>We've added your card details</p>
                                </div>
                                <button onClick={handleContinue}>Continue</button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                        <div className='cont_input_name'>
                            <label for='name'>{labelName}</label>
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
                            <label for='number'>{labelNumbers}</label>
                            <input 
                                type='text' 
                                name='number' 
                                
                                placeholder='e.g.1234 5678 9123 0000'
                                required
                                onChange={handleCardNumberChange}
                                maxLength={16}
                                className={hasError1 ? 'error' : ''}
                            />
                        </div>

                        <div className='cont_input_date'>
                            <div className='date'>
                                <label for='date'>{labelData}</label>
                                <input 
                                    type='text' 
                                    name='date' 
                                    placeholder='mm'
                                    maxLength={2}
                                    required
                                    onChange={handleMonth}
                                    className={hasError2 ? 'error' : ''}
                                />
                                <input 
                                    type='text' 
                                    name='date' 
                                    placeholder='yy'
                                    maxLength={2}
                                    required
                                    onChange={handleYear}
                                    className={hasError3 ? 'error' : ''}
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
                                    onChange={handleCvc}
                                    className={hasErro4 ? 'error' : ''}
                                />
                            </div>
                        </div>

                        <button className='send' type='submit'>confirm</button>
                    </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Payment