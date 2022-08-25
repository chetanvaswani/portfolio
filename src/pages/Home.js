import './Home.css'
import React from "react";

export default function HomePage({setActivePageCommon}){
    return (
      <div className='home-page'>
  
          <div className='home-content-text'>
              <h1 id='home-content-name' className='animate-pop'>Chetan Vaswani</h1>
              <h2 id='home-content-title' className='animate-pop'>{'<FullstackWebDeveloper />'}</h2>
              <button className='animate-fade' id='view-work-btn' onClick={() => {
                  setActivePageCommon('about.html');
              }}>View Work</button>
              <button className='animate-fade' id='reach-me-btn' onClick={() => {
                  setActivePageCommon('contacts.css');
              }}>Reach Me</button>
          </div>
  
          <div id='home-icon'>
              <img src='icon.png' alt='' height='550px' id='home-icon-image' className='animate-pop' />
          </div>
  
      </div>
    );
  }