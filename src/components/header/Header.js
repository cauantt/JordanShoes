import React from 'react';
import './Header.css';
import { SiJordan } from "react-icons/si";

function Header() {
  return (
    <div className='header'>
        <div id='frete'><p>Frete grátis para todo Brasil</p></div>
        <div className='content'>
            <div id='banner'> <SiJordan id='icon'/> <div id='marca'>
                <p>JordanShoes</p>
            </div> </div>
            <div id="titles">
                <h1>A melhor loja de Jordan</h1>
                <p>O tênis Jordan é fruto de uma velha e forte
                parceria entre a Nike e o jogador Michael Jordan.</p>
            </div>
        </div>

    </div>
  );
}

export default Header;
