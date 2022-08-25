import { ReactComponent as Bell } from "../src/svgs/bell.svg";
import './footer.css';
import React from "react";

export default function Footer({activePageCommon}){

    return (
      <div className='footer'>
        <div className='footer-left-div'>
          <p className='footer-p'>main</p>
        </div>
        <div className='footer-right-div'>
          <p className='footer-p'>{activePageCommon}</p>
          <Bell className='footer-icons'/>
        </div>
      </div>
    )
}