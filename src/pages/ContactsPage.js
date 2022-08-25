import { LineNumbers, Blue, White, Green, Yellow } from "../../src/Pages.js";
import "./ContactsPage.css"
import React from "react";

export default function ContactsPage(){
    return (
      <div className='contacts-page'>
        <LineNumbers length={30} />
        <div className="content">

          <a href="mailto:chetan.vaswani.cv@gmail.com">
              <ContentLineCSS>
                <White>#</White><Green>email-icon</Green><White>:hover::after</White><White>{"{"}</White>
              </ContentLineCSS>
              <ContentLineCSS indent={1}>
                <Blue>content</Blue><White>: '</White><Yellow>chetan.vaswani.cv@gmail.com</Yellow><White>';</White>
              </ContentLineCSS>
              <ContentLineCSS indent={1}>
                <Blue>height</Blue><White>:</White> <Yellow>20</Yellow><Green>px</Green><White>;</White>
              </ContentLineCSS>
              <ContentLineCSS indent={1}>
                <Blue>position</Blue><White>:</White> <Yellow>relative</Yellow><White>;</White>
              </ContentLineCSS>
              <ContentLineCSS indent={1}>
                <Blue>top</Blue><White>:</White> <Yellow>-10</Yellow><Green>px</Green><White>;</White>
              </ContentLineCSS>
              <ContentLineCSS indent={1}>
                <Blue>left</Blue><White>:</White> <Yellow>25</Yellow><Green>px</Green><White>;</White>
              </ContentLineCSS>
              <ContentLineCSS indent={1}>
                <Blue>background</Blue><White>:</White> <Green>rgba</Green><Yellow>(0, 0, 0 , 0.5)</Yellow><White>;</White>
              </ContentLineCSS>
              <ContentLineCSS>
                <White>{"}"}</White>
              </ContentLineCSS>
            </a>
            <br/>

            <a href="tel:+91-982-687-4562">
              <ContentLineCSS>
                <White>#</White><Green>phone-icon</Green><White>:hover::after</White><White>{"{"}</White>
              </ContentLineCSS>
              <ContentLineCSS indent={1}>
                <Blue>content</Blue><White>: '</White><Yellow>+91 9826874562</Yellow><White>';</White>
              </ContentLineCSS>
              <ContentLineCSS indent={1}>
                <Blue>height</Blue><White>:</White> <Yellow>20</Yellow><Green>px</Green><White>;</White>
              </ContentLineCSS>
              <ContentLineCSS indent={1}>
                <Blue>position</Blue><White>:</White> <Yellow>relative</Yellow><White>;</White>
              </ContentLineCSS>
              <ContentLineCSS indent={1}>
                <Blue>top</Blue><White>:</White> <Yellow>-10</Yellow><Green>px</Green><White>;</White>
              </ContentLineCSS>
              <ContentLineCSS indent={1}>
                <Blue>left</Blue><White>:</White> <Yellow>25</Yellow><Green>px</Green><White>;</White>
              </ContentLineCSS>
              <ContentLineCSS indent={1}>
                <Blue>background</Blue><White>:</White> <Green>rgba</Green><Yellow>(0, 0, 0 , 0.5)</Yellow><White>;</White>
              </ContentLineCSS>
              <ContentLineCSS>
                <White>{"}"}</White>
              </ContentLineCSS>
            </a>

        </div>
      </div>
    )
}

function ContentLineCSS({props, indent=null, children}){
  return (
      <>
      <div className={indent === null ? 'no' : indent === 1 ? "indent" : "double-indent"} >
          {children}
      </div>
      </>
  )
}