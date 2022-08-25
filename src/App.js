import React from "react";
import './App.css';
import Header from "./Header.js";
import Footer from "./footer.js";
import Pages from "./Pages.js";
import Explorer from "./Explorer.js";
import {useState} from 'react';

export default function App() {
  const [activePageCommon, setActivePageCommon] = useState("home.jsx");

  return (
    <div className="App">
      <Header />
      <main>
        <Explorer activePageCommon={activePageCommon} setActivePageCommon={setActivePageCommon}/>
        <Pages activePageCommon={activePageCommon} setActivePageCommon={setActivePageCommon} />
      </main>
      <Footer activePageCommon={activePageCommon}/>
    </div>
  );
}