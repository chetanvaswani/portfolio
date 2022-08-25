import React from "react";
import './Pages.css';
import HomePage from './pages/Home.js';
import AboutPage from './pages/AboutPage.js';
import ContactsPage from "./pages/ContactsPage.js";
import Github from './pages/Github.js';
import Skills from './pages/Skills.js';
import Projects from './pages/Projects.js';
import { useRef, useEffect, useState } from "react";


export default function Pages({activePageCommon, setActivePageCommon, filesOpen, setFilesOpen}){

  return (
    <div className='pages'>
        <PagesContent activePageCommon={activePageCommon} setActivePageCommon={setActivePageCommon} />
    </div>
  )
}
  
function PagesContent({activePageCommon, setActivePageCommon}){
  const activePageRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const githubRef = useRef(null);
  const projectsRef = useRef(null);
  const [activePage, setActivePage] = useState(activePageRef.current);

  function changePage(ref=null){
    activePageRef.current.classList.remove('page-header-div-active');
    ref.classList.add('page-header-div-active');
    activePageRef.current = ref;
    setActivePage(activePageRef.current);
  }

  useEffect(() => {
    activePageRef.current = homeRef.current;
  }, []);

  useEffect(() => {
    if (activePageCommon === "home.jsx"){
      changePage(homeRef.current);
    } else if (activePageCommon === "about.html"){
      changePage(aboutRef.current);
    } else if (activePageCommon === "contacts.css"){
      changePage(contactRef.current);
    } else if (activePageCommon === "skills.py"){
      changePage(skillsRef.current);
    } else if (activePageCommon === "github.c"){
      changePage(githubRef.current);
    } else if (activePageCommon === "projects.js"){
      changePage(projectsRef.current);
    }
  }, [activePageCommon])

    return (
      <>
        <div className='pages-header'>

          <div className='page-header-div page-header-div-active' ref={homeRef} onClick={() => {
            setActivePageCommon("home.jsx");
          }} >
            <img src='react-logo.png' alt='' height='19px'/>
            <p className='page-header-p'> home.jsx </p>
          </div>
          <div className='page-header-div' ref={aboutRef} onClick={() => {
            setActivePageCommon("about.html");
          }}>
          <img src='html-logo.png' alt='' height='19px' />
            <p className='page-header-p'> about.html </p>
          </div>
          <div className='page-header-div' ref={contactRef} onClick={() => {
            setActivePageCommon("contacts.css");
          }}>
            <img src='css-logo.png' alt='' height='19px'/>
            <p className='page-header-p'> contacts.css </p>
          </div>
          <div className='page-header-div' ref={skillsRef} onClick={() => {
            setActivePageCommon("skills.py");
          }}>
            <img src='python-logo.png' alt='' height='19px'/>
            <p className='page-header-p'> skills.py </p>
          </div>
          <div className='page-header-div' ref={githubRef} onClick={() => {
            setActivePageCommon("github.c");
          }}>
            <img src='c-logo.png' alt='' height='19px'/>
            <p className='page-header-p'> github.c </p>
          </div>
          <div className='page-header-div' ref={projectsRef} onClick={() => {
            setActivePageCommon("projects.js");
          }}>
            <img src='js-logo.png' alt='' height='19px'/>
            <p className='page-header-p'> projects.js </p>
          </div>

        </div>
      { activePage === undefined ? <div className='page-body'><HomePage /></div> : <div className='page-body'>
        {activePage === homeRef.current ? <HomePage setActivePageCommon={setActivePageCommon}/> : false}
        {activePage === aboutRef.current ? <AboutPage /> : false}
        {activePage === contactRef.current ? <ContactsPage /> : false}
        {activePage === githubRef.current ? <Github /> : false}
        {activePage === skillsRef.current ? <Skills /> : false}
        {activePage === projectsRef.current ? <Projects /> : false}
      </div>}
    </>
    )
}

export function LineNumbers({length}){
  return (
    <ol className='line-numbers-ol'>
        {[...Array(length)].map((elementInArray, index) => (
          <li key={index} className='line-numbers-ol-li'></li>
        ))}
    </ol>
  )
}

export function Blue({children}){
  return (
      <p className="blue">{children}</p>
  )
}

export function Green({children}){
  return (
      <p className="green">{children}</p>
  )
}

export function Yellow({children}){
  return (
      <p className="yellow">{children}</p>
  )
}

export function White({children}){
  return(
      <p className="white">{children}</p>
  )
}

export function Pink({children}){
  return(
      <p className="pink">{children}</p>
  )
}

export function Red({children}){
  return(
      <p className="red">{children}</p>
  )
}