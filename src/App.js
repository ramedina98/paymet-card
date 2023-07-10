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
        </div>
      </header>
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
                <span>Jal Bank</span> © 2023 Nu México Financiera S.A. de 
                C.V., SFP (Nu México) es una entidad financiera 
                autorizada y supervisada por la Comisión Nacional 
                Bancaria y de Valores y demás autoridades financieras, 
                bajo la Ley de Ahorro y Crédito Popular.
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
              <p>Nu México Financiera S.A. de C.V. S.F.P. , Ave. 
                Presidente Masaryk No. 111, Piso 7, Col. Polanco 
                IV Sección, CP 11550, Miguel Hidalgo, CDMX.
              </p>
            </div>
            <div className='other_things'>
              <ul>
                <li>Costos y comisiones</li>
                <li>Contratos</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
