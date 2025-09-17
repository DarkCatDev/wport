import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


import '../assets/css/Home.css';
import '../assets/css/Career.css';
import '../assets/css/Project.css';
import '../assets/css/Skills.css';
import '../assets/css/Devlog.css';


import { Link } from 'react-router-dom';

import img1 from '../assets/img/Profile.png';
import self from '../assets/img/Self.png'

import icon1 from '../assets/img/icon1.png';
import icon2 from '../assets/img/icon2.png';
import icon3 from '../assets/img/icon3.png';
import icon4 from '../assets/img/icon4.png';
import icon5 from '../assets/img/icon5.png';
import icon6 from '../assets/img/icon6.png';

import aet from '../assets/img/projects/aet.png';
import olm from '../assets/img/projects/olm.png';
import rrc from '../assets/img/projects/rrc.png';
import bgn from '../assets/img/projects/BAGANI.png';


import grad from '../assets/img/career/grad.png';
import work from '../assets/img/career/work.png';




function Home(){
    const [activeDiv, setActiveDiv] = useState("home");

    const radarRef = useRef(null);

    useEffect(() => {
    if (activeDiv === "skil" && radarRef.current) {
      const ctx = radarRef.current.getContext("2d");

      // destroy old chart instance if exists (avoids duplication)
      if (radarRef.current.chart) {
        radarRef.current.chart.destroy();
      }

      radarRef.current.chart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['Java', 'Python', 'C++', 'Dart', 'HTML/CSS/JS', 'PHP'],
          datasets: [
            {
              label: 'Programming Language Mastery 9.9.2025',
              data: [20, 20, 25, 10, 30, 0,],
              fill: true,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            },
          ],
        },
        options: {
          elements: {
            line: { borderWidth: 2 },
          },
          scales: {
            r: {
              beginAtZero: true,
              min: 0,
              max: 100,
              ticks: {
                stepSize: 20,
                color: '#fff',

                font: {
                    size: 14,
                    family: "Arial",
                    weight: "bold",
                },
                callback: function(value){
                    const letters = ["F","E","D","C","B","A"];
                    return letters[value/20] || value;
                }
               },

            grid: {
                color: "rgb(255,255,255,0.5)",
                },
            },
          },
        },
      });
    }
  }, [activeDiv]);


    return(
        <div className="content">   
            <div className="c-header">
                <div className="p1">
                    <div className="pic">
                        <img src={img1} alt="404" className='img1'/>
                    </div>
                    <div className="name">
                        <h2>ARJAY PIELAGO</h2>
                        <h4>ARPIE</h4>
                    </div>
                    <div className="title">
                        <button onClick={() => setActiveDiv("jobtitle")} className={activeDiv === "jobtitle" ? "active" : ""}>
                            <h4>ENTRY-LEVEL DEV</h4>
                        </button>
                    </div>
                </div>
                <div className="p2">
                    <div className="cinfo">
                        <p className='ico'>
                            📍
                        </p>
                        <p>
                            Antipolo City, Philippines
                        </p>
                    </div>
                    <div className="cinfo">
                        <p className='ico'>
                            ✉️
                        </p>
                        <p>
                            Pielagoarjay.07@gmail.com
                        </p>
                    </div>
                    <div className="cinfo">
                        <p className='ico'>
                            🏫
                        </p>
                        <p>
                            Partido State University
                        </p>
                    </div>
                    <div className="cinfo">
                        <p className='ico'>
                            🎓
                        </p>
                        <p>
                            BS Computer Science 21-25
                        </p>
                    </div>

                </div>
                <div className="p3">
                        <div><Link to="https://www.linkedin.com/in/arpie-darkcatdev/"><img src={icon1} alt="" className='imgicon'/></Link></div>
                        <div><Link to="https://www.facebook.com/DarkCatDev01"><img src={icon2} alt="" className='imgicon'/></Link></div>
                        <div><Link to="https://www.instagram.com/darkcatdev/"><img src={icon3} alt="" className='imgicon'/></Link></div>
                        <div><Link to="https://ganknow.com/darkcatdev"><img src={icon4} alt="" className='imgicon'/></Link></div>
                        <div></div>
                        <div><Link to="https://www.tiktok.com/@darkcatdev"><img src={icon5} alt="" className='imgicon'/></Link></div>
                        <div><Link to="https://www.youtube.com/@DarkCatDev"><img src={icon6} alt="" className='imgicon'/></Link></div>
                        <div></div>
                </div>
            </div>
            <div className="c-body">
                <div className="cb-1">
                    <div className="h-bar">
                        <ul>
                            <li>
                                <button onClick={( ) => setActiveDiv("home")} className={activeDiv === "home" ? "active" : ""}>HOME</button></li>
                            <li>
                                <button onClick={( ) => setActiveDiv("proj")} className={activeDiv === "proj" ? "active" : ""}>PROJECTS</button>
                            </li>
                            <li>
                                <button onClick={( ) => setActiveDiv("care")} className={activeDiv === "care" ? "active" : ""}>CAREER</button>
                            </li>
                            <li>
                                <button onClick={( ) => setActiveDiv("skil")} className={activeDiv === "skil" ? "active" : ""}>SKILLS</button>
                            </li>
                            <li>
                                <button onClick={( ) => setActiveDiv("devl")} className={activeDiv === "devl" ? "active" : ""}>DEVLOG</button>
                            </li>
                                
                        </ul>
                    </div>
                </div>
                <div className="cb-2"> {/* content-body 2 */}
                    {activeDiv == "home" && (
                        <div className='cbc'>
                            <div className='cbc-home'>
                                <div>
                                    <img src={self} alt="404" className='self-image' />
                                </div>
                                <div className='text-container'>
                                    <h2>&lt;Dark-Cat-Dev&gt;</h2>
                                    <p>Hello! This is Arpie, a.k.a. Dark Cat Dev. An introverted Programmer and Computer Science Graduate who aspire to be a game and application developer.</p>
                                    <p></p>
                                    <p>"Our dreams might be just our own imagination but we have our own way to make it a reality. Mine is making something out of it."</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeDiv == "proj" && (
                        <div className='cbc'>
                            <div className='cbc-title'>
                                <h1>Projects and Portfolio</h1>
                            </div>
                            <div className="cbc-projlist">
                                <div className="pt">
                                    <h2>
                                        Game Development
                                    </h2>
                                    <ul>
                                        <li>
                                            <img src={olm} alt="404" className='pimg'/>
                                            <h4>Orphan's Life: Medieval</h4>
                                            <p className="stats">
                                                Hiatus
                                            </p>    
                                            <p className='ptext'>
                                                OLM is a web text based game of an orphan living in the world of Arcanus.
                                            </p>
                                        </li>
                                        <li>
                                            <img src={bgn} alt="404" className='pimg'/>
                                            <h4>BAGANI: The Untold</h4>
                                            <p className="stats">
                                                Planning
                                            </p>    
                                            <p className='ptext'>
                                                A tactical rpg based on alternate history of Philippines.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pt">
                                    <h2>
                                        Mobile App Development
                                    </h2>
                                    <ul>

                                    </ul>
                                </div>
                                <div className="pt">
                                    <h2>
                                        Desktop App Development
                                    </h2>
                                    <ul>
                                        
                                    </ul>
                                </div>

                            </div>
                        </div>
                    )}

                    {activeDiv == "care" && (
                        <div className='cbc'>
                            <div className='cbc-caretitle'>
                                <h1>Career and Education</h1>

                            </div>

                            <div className="cbc-careinfo">
                                <div className="educ">
                                    <img src={grad} alt="" className='gradimg'/>
                                    <h4>Bachelors Degree</h4>
                                    <p><b>Computer Science</b></p>
                                    <p>Partido State University</p>
                                    <p>SY 2021-2025</p>    
                                </div> {/* Education Background */}
                                <div className="rcareer">
                                    <img src={work} alt="404" className='wimg'/>
                                    <h4>CS Intern</h4>
                                    <p>Partido State University - GAP</p>
                                    <p>Jun-July, 2024</p>

                                </div> {/* recent career */}
                            </div>

                            <div className='chistory'>
                                <h2>Career History</h2>
                                
                                <div className='jobdes'>
                                    <h4>CS intern</h4>
                                    <p>Partido State University - Guidance, Admission, and Placement Office</p>
                                    <p>June-July, 2024</p>
                                    <p>
                                        <ul>
                                            <li>Assisted the guidance staff in organizing, filing, and digitizing student documents</li>
                                            <li>Helped maintain records and ensured data accuracy in student files</li>
                                            <li>Co-initiated a prototype for a digital portal intended to streamline student access to guidance services using Laravel framework</li>
                                        </ul>
                                    </p>
                                </div>


                                
                            </div>
                        </div>
                    )}

                    {activeDiv == "skil" && (
                        <div className='cbc cbc-ski'>
                            <div className='cbc-title'>
                                <h1>Skills and Expertise</h1>

                            </div>

                            

                            <div className="cen">

                                {/*
                                    Update for Later

                                    <div className="cbc-info window">
                                    <img src={icon1} alt="404" className='skimg'/>
                                </div>
                                
                                */}

                                <div className="graph">
                                    <canvas ref={radarRef} id="myRadar"></canvas>
                                </div>

                                
                                
                            </div>
                        </div>
                    )}

                    {activeDiv == "devl" && (
                        <div className='cbc'>
                            <div className='cbc-title'>
                                <h1>Development Logs and Updates</h1>

                            </div>

                            <div className="cbc-info">
                                <div class="vlog">
                                    <div class="caption-title">
                                        <h4>Devlog #2: A new idea</h4>
                                    </div>
                                    <div class="caption-content">
                                        <p>Sept. 18, 2025. </p>
                                        <p>A new game idea came into mind upon trying to build one of my games and decided to prioritize it.</p>
                                    </div>
                                </div>

                                <div class="vlog">
                                    <div class="caption-title">
                                        <h4>Devlog #1: A new Portfolio Website</h4>
                                    </div>
                                    <div class="caption-content">
                                        <p>Sept. 10, 2025. </p>
                                        <p>I changed my Web Portfolio as there were bugs in the site. I'm thinking of starting a video blog but I'm still a bit shy in front of a cam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {activeDiv == "jobtitle" &&(
                        <div className="jobtitle">
                            
                        </div>
                    )}

                    
                </div>
            </div>
        </div>
    )
}


export default Home