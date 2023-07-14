import './App.css';
import Payment from './components/Payment';
import OtherNav from './components/OtherNav';
import { BiSun, BiMoon } from 'react-icons/bi';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import React, {useState} from 'react';

function App() {
  //hook to chences from display = none to displa = block...
  const [display, setDisplay] = useState('none');
  const [btn, sentBtn] = useState('Ligth');
  const [menu, setMenu] = useState('none');
  //we check the state of the display to send the 
  //necesari comand...
  const handleClick = () => {
    if(display === 'none'){
      setDisplay('block')
    }else{
      setDisplay('none')
    }
  }
  const handleDark = (e, clickedItem) => {
    console.log("Boton click: " + clickedItem);
    sentBtn(clickedItem);
  }

  //this function is to open-close the burger menu...
  const handleMenuBurger = () => {
    setMenu('flex');
  }
  const close = () => {
    setMenu('none');
    setDisplay('none');
  }
  return (
    <div className="App dark" id={btn}>
      <header>
        <div className='cont_all'>
          <div className='logo'>
            <h2>Jal Bank</h2>
          </div>
          <nav>
            <ul className='options'>
              <a href='#'><li>About Us</li></a>
              <a href='#'><li>Other Services</li></a>
              <a href='#'><li>Legal Terms</li></a>
              <li className='mode' onClick={handleClick}>
                Mode
              </li>
              {/*This will bie appear when the user
              click the item MODE...*/}
              <ul className='mode_options' style={ {display} }>
                <li className='item' name='Dark' onClick={(e) => handleDark(e, 'Dark')}>Dark <BiMoon className='icono' /> </li>
                <li className='item' name='Ligth' onClick={(e) => handleDark(e, 'Ligth')}>Ligth  <BiSun className='icono' /> </li>
              </ul>
            </ul>
          </nav>
          <div className='hamburguer_menu'>
            <span className="material-icons" onClick={handleMenuBurger}>menu</span>
          </div>
        </div>
      </header>
      <ul className='options_side' style={{ display: menu }}>
        <div className='closeMenu' onClick={close}>
          X
        </div>
        <a href='#'><li>About Us</li></a>
        <a href='#'><li>Other Services</li></a>
        <a href='#'><li>Legal Terms</li></a>
        <li className='mode' onClick={handleClick}>
          Mode
        </li>
        {/*This will bie appear when the user
        click the item MODE...*/}
        <ul className='mode_options' style={ {display} }>
          <li className='item' name='Dark' onClick={(e) => handleDark(e, 'Dark')}>Dark <BiMoon className='icono' /> </li>
          <li className='item' name='Ligth' onClick={(e) => handleDark(e, 'Ligth')}>Ligth  <BiSun className='icono' /> </li>
        </ul>
      </ul>
      <Payment />
      {/*Vo a hacer otro componente el cual va a consumir
      recursos de una api en la cual se encuentra el titulo 
      del cont y todos los li requeridos...*/}
      <footer>
        <div className='cont_cards_nav'>
          <OtherNav/>
        </div>
        <div className='cont_redes_legal_terms'>
          <div className='redesNterms'>
            <div className='legal'>
              <p>
                <span>Jal Bank</span> © 2023 JalBank México Financiera S.A. de C.V., SFP (JalBank Mexico) is a financial institution. 
                C.V., SFP (JalBank Mexico) is a financial institution authorized and supervised by the National 
                authorized and supervised by the National Banking and Securities 
                Banking and Securities Commission and other financial authorities, 
                under the Savings and Popular Credit Law.
              </p>
            </div>
            <div className='redes'>
              <ul>
                <li><a href='#'><i className="fab fa-facebook"></i></a></li>
                <li><a href='#'><i className="fab fa-instagram"></i></a></li>
                <li><a href='#'><i className="fab fa-linkedin"></i></a></li>
                <li><a href='#'><i className="fab fa-twitter"></i></a></li>
                <li><a href='#'><i className="fab fa-youtube"></i></a></li>
                <li><a href='#'><i className="fab fa-tiktok"></i></a></li>
              </ul>
            </div>
          </div>
          <div className='termsNmore'>
            <div className='address'>
              <p>JalBank México Financiera S.A. de C.V. S.F.P. Ave. 
                Presidente Masaryk No. 111, 7th Floor, Col. 
                IV Sección, CP 11550, Miguel Hidalgo, CDMX.
              </p>
            </div>
            <div className='other_things'>
              <ul>
                <li>Costs and commissions</li>
                <li>Contracts</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
