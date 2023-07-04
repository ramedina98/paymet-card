import './App.css';
import React, {useState} from 'react';

function App() {
  //hook to chences from display = none to displa = block...
  const [display, setDisplay] = useState('none');
  //we check the state of the display to send the 
  //necesari comand...
  const handleClick = () => {
    if(display === 'none'){
      setDisplay('block')
    }else{
      setDisplay('none')
    }
  }

  return (
    <div className="App">
      <header>
        <div className='cont_all'>
          <div className='logo'>
            <h2>Jal Bank</h2>
          </div>
          <nav>
            <ul>
              <a href='#'><li>Contact Us</li></a>
              <a href='#'><li>Other Services</li></a>
              <a href='#'><li>Legal Terms</li></a>
              <li className='mode' onClick={handleClick}>
                Mode
              </li>
              {/*This will bie appear when the user
              click the item MODE...*/}
              <ul className='mode_options' style={ {display} }>
                <li className='item'>Dark</li>
                <li className='item'>Ligth</li>
              </ul>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
