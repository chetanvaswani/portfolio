import "./AboutPage.css";
import { LineNumbers, Blue, White, Yellow } from "../../src/Pages.js";
import React from "react";

export default function AboutPage(){
    return (
      <div className='about-page'>
         <LineNumbers length={150} />
          <div className="content">
            <ContentLine><p className='white'>!</p><p className="blue">DOCTYPE <i className="green">html</i></p></ContentLine>
            <ContentLine><Blue>html</Blue> <Green>lang</Green><Equal /><Yellow>"eng"</Yellow></ContentLine>
            <ContentLine indent={1}><p className="blue">head</p></ContentLine>
            <ContentLine indent={2}><Blue>meta</Blue> <Green>charset</Green><Equal /><Yellow>"utf-8"</Yellow> <ForwardSlash /></ContentLine>
            <ContentLine indent={2}>
                <Blue>meta</Blue> <Green>name</Green><Equal /><Yellow>"viewport"</Yellow> 
                <Green> content</Green><Equal /><Yellow>"width=decive-width, initial scale=1"</Yellow> <ForwardSlash />
            </ContentLine>
            <ContentLine indent={2}><Blue>title</Blue><ForwardAngleBracket /><White>About Page</White><BackAngleBracket /><ForwardSlash /><Blue>title</Blue></ContentLine>
            <ContentLine indent={1}><ForwardSlash /><Blue>head</Blue></ContentLine>
            <ContentLine indent={1}><Blue>body</Blue></ContentLine>
            <ContentLine indent={2}><Blue>h1</Blue><ForwardAngleBracket />
                <White>About Me</White><BackAngleBracket /><ForwardSlash /><Blue>h1</Blue>
            </ContentLine>
            <ContentLine indent={2}><Blue>p</Blue><ForwardAngleBracket/> <br />
                <div className='white indent about-p'>Hello! My name is Chetan. I'm from a small town called Bhilai, in India. My interest in programming began a year ago,
                after I saw a video on YouTube about the oppurtunities one might
                encounter simply by being a part of the community that builds the tools of the future. Although that isn't the reason I chose to become a fullstack developer,
                but it surely was a kickstarter as it encouraged me to learn more about the field and how things work.</div>
                <BackAngleBracket /><ForwardSlash /><Blue>p</Blue>
            </ContentLine>
            <ContentLine indent={2}><Blue>p</Blue><ForwardAngleBracket/> <br />
                <div className='white indent about-p'>Since then I've been working tirelessly day in and day out, in order to gather all the skills required to start a career in tech
                and I've been loving it. Although I'm currently in second year, pursuing Bachelors in Computer Applications at Durg University. But for the most part I'm self taught,
                in the sense that I've learned to code on my own using various online courses and books.</div>
                <BackAngleBracket /><ForwardSlash /><Blue>p</Blue>
            </ContentLine>
            <ContentLine indent={2}><Blue>p</Blue><ForwardAngleBracket/> <br />
                <div className='white indent about-p'>I'm also a firm believer in having a strong foundation of fundamentals, inorder to build new things on top of it. My average typing
                speed stands at 120 words per minute, with a high of 149. Which is about three times the worldwide average of 40 words per minute. This makes me comparitively more productive
                as a considerable chunk of a developer's time is dedicated towards writing code. </div>
                <BackAngleBracket /><ForwardSlash /><Blue>p</Blue>
            </ContentLine>


            <ContentLine indent={2}><Blue>h2</Blue><ForwardAngleBracket />
                <White>CS courses I have taken.</White><BackAngleBracket /><ForwardSlash /><Blue>h2</Blue>
            </ContentLine>
            <ContentLine indent={2}><Blue>ul</Blue></ContentLine>
            <div className="indent">
                <ContentLine indent={2} className='indent'><Blue>li</Blue><ForwardAngleBracket />
                    <div className="indent"><BackAngleBracket /><Blue>a</Blue> <Green><i>href</i></Green><Equal /> <Yellow>"<a className="link" href="https://certificates.cs50.io/de711dc1-543b-4dc4-ba69-755d421db14b.pdf" target="_blank" rel="noopener noreferrer">
                    https://certificates.cs50.io/ de711dc1-543b-4dc4-ba69-755d421db14b.pdf</a>"</Yellow> <Green>target</Green><Equal /><Yellow>"_blank"</Yellow> <ForwardAngleBracket /><br /> <White>CS50's Understanding Technology.</White><BackAngleBracket /><ForwardSlash /><Blue>a</Blue><ForwardAngleBracket /></div>
                <BackAngleBracket /><ForwardSlash /><Blue>li</Blue></ContentLine>
                <ContentLine indent={2} className='indent'><Blue>li</Blue><ForwardAngleBracket />
                    <div className="indent"><BackAngleBracket /><Blue>a</Blue> <Green><i>href</i></Green><Equal / ><Yellow>"<a className="link" href="https://courses.edx.org/certificates/9f587953eee64d4e8a066cc16b233c10" target="_blank" rel="noopener noreferrer">
                    https://courses.edx.org/ certificates/9f587953eee64d4e 8a066cc16b233c10</a>"</Yellow> <Green>target</Green><Equal /><Yellow>"_blank"</Yellow> <ForwardAngleBracket /><br /> <White>HarvardX - Introduction to Computer Science.</White><BackAngleBracket /><ForwardSlash /><Blue>a</Blue><ForwardAngleBracket /></div>
                <BackAngleBracket /><ForwardSlash /><Blue>li</Blue></ContentLine>
                <ContentLine indent={2} className='indent'><Blue>li</Blue><ForwardAngleBracket />
                    <div className="indent"><BackAngleBracket /><Blue>a</Blue> <Green><i>href</i></Green><Equal / ><Yellow>"<a className="link" href="https://certificates.cs50.io/8fc615b2-41d3-47df-bd3d-eddfbdd7e22e.pdf" target="_blank" rel="noopener noreferrer">
                        https://certificates.cs50.io/ 8fc615b2-41d3-47df-bd3d-eddfbdd7e22e.pdf</a>"</Yellow> <Green>target</Green><Equal /><Yellow>"_blank"</Yellow> <ForwardAngleBracket /><br /> <White>CS50's Introduction to programming with Python.</White><BackAngleBracket /><ForwardSlash /><Blue>a</Blue><ForwardAngleBracket /></div>
                <BackAngleBracket /><ForwardSlash /><Blue>li</Blue></ContentLine>
                <ContentLine indent={2} className='indent'><Blue>li</Blue><ForwardAngleBracket />
                    <div className="indent"><BackAngleBracket /><Blue>a</Blue> <Green><i>href</i></Green><Equal /> <Yellow>"<a className="link" href="https://certificate.algoexpert.io/PE-7c1351ae5c" target="_blank" rel="noopener noreferrer">
                    https://certificate.algoexpert.io/ PE-7c1351ae5c</a>"</Yellow> <Green>target</Green><Equal /><Yellow>"_blank"</Yellow> <ForwardAngleBracket /><br /> <White>Porgramming Expert.</White><BackAngleBracket /><ForwardSlash /><Blue>a</Blue><ForwardAngleBracket /></div>
                <BackAngleBracket /><ForwardSlash /><Blue>li</Blue></ContentLine>
                <ContentLine indent={2} className='indent'><Blue>li</Blue><ForwardAngleBracket />
                    <div className="indent"><BackAngleBracket /><Blue>a</Blue> <Green><i>href</i></Green><Equal /> <Yellow>"<a className="link" href="https://certificate.algoexpert.io/FE-e673f088b1" target="_blank" rel="noopener noreferrer">
                    https://certificate.algoexpert.io/ FE-e673f088b1</a>"</Yellow> <Green>target</Green><Equal /><Yellow>"_blank"</Yellow> <ForwardAngleBracket /><br /> <White>FrontEnd Expert.</White><BackAngleBracket /><ForwardSlash /><Blue>a</Blue><ForwardAngleBracket /></div>
                <BackAngleBracket /><ForwardSlash /><Blue>li</Blue></ContentLine>
            </div>
            <ContentLine indent={2}><ForwardSlash /><Blue>ul</Blue></ContentLine>


            <ContentLine indent={2}><Blue>h1</Blue><ForwardAngleBracket />
                <White>My Past Experiences</White><BackAngleBracket /><ForwardSlash /><Blue>h1</Blue>
            </ContentLine>
            <ContentLine indent={2}><Blue>p</Blue><ForwardAngleBracket/> <br />
                <div className='white indent about-p'>I started a motivational, self-growth and productivity brand on Instagram with a friend in 2017 at the age of 14. Using superhero themes
                for our posts made them unique and special, we took our Instagram page to over 57,500 followers organically. And although we did not manufacture any products of our own,
                we sold some products which were relatable to our niche, and also used our audience to market other brands in the niche. Growing up, I realised it was only a hobby and finally sold
                the brand in June of 2021 making my first exit at the age of 18.</div>
                <BackAngleBracket /><ForwardSlash /><Blue>p</Blue>
            </ContentLine>
            <ContentLine indent={2}><Blue>p</Blue><ForwardAngleBracket/> <br />
                <div className='white indent about-p'>I also have experience in management, sales and finance as I have also been involved in my family business which includes manufacturing, distribution and retail
                of all sorts of clothing products. Now although these experiences might not be directly related to the field of computer science, but they have helped me setup a foundation and learn so much about the
                various approaches one might take while encountering a problem because of which I was able to develop great problem solving skills, persistance and the ability to adapt and grow by learning new things.</div>
                <BackAngleBracket /><ForwardSlash /><Blue>p</Blue>
            </ContentLine>

            <ContentLine indent={1}><ForwardSlash /><Blue>body</Blue></ContentLine>
            <ContentLine><ForwardSlash /><Blue>html</Blue></ContentLine>
          </div>
      </div>
    );
}

function BackAngleBracket(){
    return (
        <p className='white'>{'<'}</p>
    )
}

function ForwardAngleBracket(){
    return (
        <p className='white'>{'>'}</p>
    )
}

function ForwardSlash(){
    return (
        <p className="white">/</p>
    )
}

function Equal(){
    return (
        <p className="white">=</p>
    )
}

export function Green({children}){
    return (
        <p className="green"><i>{children}</i></p>
    )
  }

function ContentLine({props, indent=null, children}){
    return (
        <>
        <div className={indent === null ? 'no' : indent === 1 ? "indent" : "double-indent"} >
            <BackAngleBracket />
            {children}
            <ForwardAngleBracket />
        </div>
        </>
    )
}
