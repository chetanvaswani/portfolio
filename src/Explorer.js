import React, { useEffect, useState } from "react";
import "./Explorer.css";
import { useRef } from 'react';
import { ReactComponent as Down } from "../src/svgs/down.svg";
import { ReactComponent as Envelope } from "../src/svgs/envelope.svg";
import { ReactComponent as CodeSlash } from "../src/svgs/code-slash.svg";
import { ReactComponent as Settings } from "../src/svgs/settings.svg";
import { ReactComponent as UserProfile } from "../src/svgs/user.svg";
import { ReactComponent as GitLogo } from "../src/svgs/github.svg";
import { ReactComponent as Search } from "../src/svgs/search.svg";
import { ReactComponent as ExplorerIcon } from "../src/svgs/explorer-icon.svg";

export default function Explorer({activePageCommon, setActivePageCommon}){
  const [listenerAdded, setListenerAdded] = useState(false)

  function filesToggle(){
    const explorerFilesDiv = document.querySelector('.explorer-files');
    const explorer = document.querySelector('.explorer');
    const explorerIconsSecton = document.querySelector('.explorer-icons-section');
    explorerFilesDiv.classList.toggle('show');
    explorer.classList.toggle('grow');
    explorerIconsSecton.classList.toggle('light');
  }
  
  useEffect(() => {
    const explorerIcon = document.getElementById('explorer-files-icon');

    if (window.innerWidth < 950 && !listenerAdded){
      explorerIcon.addEventListener('click', filesToggle);
      setListenerAdded(true);
      console.log('added');
    }

  });

    return (
      <div className='explorer'>
        <div className='explorer-icons-section'>
          <div id='explorer-icons-top'>
            <div className='explorer-icon-div explorer-icon-div-active' id="explorer-files-icon"><ExplorerIcon className='explorer-icons explorer-active' /></div>
            <div className='explorer-icon-div'><CodeSlash className='explorer-icons' /></div>
            <div className='explorer-icon-div'><Search className='explorer-icons' id='search' /></div>
            <div className='explorer-icon-div'><GitLogo className='explorer-icons' /></div>
            <div className='explorer-icon-div'><Envelope className='explorer-icons'/></div>
          </div>
          <div id='explorer-icons-botton'>
            <div className='explorer-icon-div' id="user-profile"><UserProfile className='explorer-icons'/></div>
            <div className='explorer-icon-div' id="settings"><Settings className='explorer-icons'/></div>
          </div>
        </div>
        <ExplorerFiles setActivePageCommon={setActivePageCommon} filesToggle={filesToggle}/>
      </div>
    )
}

function ExplorerFiles({setActivePageCommon, filesToggle}){
    const downRef = useRef(null);
    const portfolioRef = useRef(null);

    useEffect(() => {
      downRef.current = document.getElementById('portfolio-toggle-svg');
    }, [])

    return (
      <div className='explorer-files'>
      <h1 id='explorer-heading'>EXPLORER</h1>
      <div id='portfolio-toggle-heading' onClick={() => {
        portfolioRef.current.classList.toggle('hide');
        downRef.current.classList.toggle('explorer-toggle-close');
      }}>
        <Down id='portfolio-toggle-svg'/> <p id='portfolio-toggle-p' className=""> PORTFOLIO</p>
      </div>
      <ul className='portfolio-toggle-ul' ref={portfolioRef}>
        <li className='portfolio-ul-li' onClick={() => {
          setActivePageCommon("home.jsx");
            filesToggle();
        }}>
          <img src='react-logo.png' alt='' height='17px'/>
          <p className='portfolio-ul-li-p'> home.jsx </p>
        </li>
        <li className='portfolio-ul-li' onClick={() => {
          setActivePageCommon("about.html");
            filesToggle();
        }}>
          <img src='html-logo.png' alt='' height='17px' />
          <p className='portfolio-ul-li-p'> about.html </p>
        </li>
        <li className='portfolio-ul-li' onClick={() => {
          setActivePageCommon("contacts.css");
            filesToggle();
        }}>
          <img src='css-logo.png' alt='' height='17px'/>
          <p className='portfolio-ul-li-p'> contact.css </p>
        </li>
        <li className='portfolio-ul-li' onClick={() => {
          setActivePageCommon("skills.py");
            filesToggle();
        }}>
          <img src='python-logo.png' alt='' height='17px'/>
          <p className='portfolio-ul-li-p'> skills.py </p>
        </li>
        <li className='portfolio-ul-li' onClick={() => {
          setActivePageCommon("github.c");
            filesToggle();
        }}>
          <img src='c-logo.png' alt='' height='17px' />
          <p className='portfolio-ul-li-p'> github.c </p>
        </li>
        <li className='portfolio-ul-li' onClick={() => {
          setActivePageCommon("projects.js");
            filesToggle();
        }}>
          <img src='js-logo.png' alt='' height='17px' />
          <p className='portfolio-ul-li-p'> projects.js </p>
        </li>
      </ul>
    </div>
    )
  }