//here we have all the payment method...
import React from 'react'
import '../App.css';

function Payment() {
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
                                    <h2>0000 0000 0000 0000</h2>
                                </div>
                                <div className='name'>
                                    <div className='n'>
                                        <h4>jane appleseed</h4>
                                    </div>
                                    <div className='date'>
                                        <h4>00/00</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='back_card_cont'>
                        <div className='back_card'>
                            <div className='cont_cuv'>
                                <p>000</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='inputs_cont'>
                    <form>
                        <div className='cont_input_name'>
                            <label for='name'>carholder name</label>
                            <input type='text' name='name' placeholder='e.g.Jane Applessed'/>
                        </div>

                        <div className='cont_input_number'>
                            <label for='number'>card number</label>
                            <input type='text' name='number' placeholder='e.g.1234 5678 9123 0000'/>
                        </div>

                        <div className='cont_input_date'>
                            <div className='date'>
                                <label for='date'>exp. date(mm/yy)</label>
                                <input type='text' name='date' placeholder='mm'/>
                                <input type='text' name='date' placeholder='yy'/>
                            </div>
                            <div className='cvc'>
                                <label for='cvc'>cvc</label>
                                <input type='text' name='cvc' placeholder='e.g.123'/>
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