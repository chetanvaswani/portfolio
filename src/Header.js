import './Header.css';
import React from "react";

export default function Header(){
    return (
      <div className='header'>
  
        <div className='header-left'>
  
          <ul className='header-left-ul'>
  
            <li className='header-left-li' id='vs-codo-logo-li'>
              <img src="vscodelogo.png" height={15} id="vs-code-logo" alt='VS Code Logo'/>
            </li>
            <li className='header-left-li'>File</li>
            <li className='header-left-li'>Edit</li>
            <li className='header-left-li'>Seclection</li>
            <li className='header-left-li'>View</li>
            <li className='header-left-li'>Go</li>
            <li className='header-left-li'>Run</li>
            <li className='header-left-li'>Terminal</li>
            <li className='header-left-li'>Help</li>
  
          </ul>
  
        </div>
  
  
        <div className='header-center'>
          <p id='header-name'>Chetan Vaswani - Visual Studio Code</p>
        
        </div>
  
  
        <div className='header-right'>
          <div id='minimise' className='top-buttons'></div>
          <div id='fullscreen' className='top-buttons'></div>
          <div id='close' className='top-buttons'></div>
        </div>
        
      </div>
    )
  }