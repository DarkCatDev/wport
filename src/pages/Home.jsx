import React, { useState, useEffect, useRef } from 'react';


import '../assets/css/Home.css';
import '../assets/css/Career.css';
import '../assets/css/Project.css';



import { Link } from 'react-router-dom';

import img1 from '../assets/img/Profile.png';
import self from '../assets/img/Self.png'

import icon1 from '../assets/img/icon1.png';
import icon2 from '../assets/img/icon2.png';
import icon3 from '../assets/img/icon3.png';
import icon4 from '../assets/img/icon4.png';
import icon5 from '../assets/img/icon5.png';
import icon6 from '../assets/img/icon6.png';

import olm from '../assets/img/projects/olm.png';
import bgn from '../assets/img/projects/BAGANI.png';


import grad from '../assets/img/career/grad.png';
import work from '../assets/img/career/work.png';




function Home(){
    const [activeDiv, setActiveDiv] = useState("home");

    


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
                        {/*
                            <button onClick={() => setActiveDiv("jobtitle")} className={activeDiv === "jobtitle" ? "active" : ""}>
                                <h4>ENTRY-LEVEL DEV</h4>
                            </button>
                        */}
                        <p>
                            Entry-Level Software Engineer
                        </p>
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
                                <button onClick={( ) => setActiveDiv("home")} id='highlight' className={activeDiv === "home" ? "active" : ""}>HOME</button></li>
                            <li>
                                <button onClick={( ) => setActiveDiv("proj")} id='highlight' className={activeDiv === "proj" ? "active" : ""}>PROJECTS</button>
                            </li>
                            <li>
                                <button onClick={( ) => setActiveDiv("care")} id='highlight' className={activeDiv === "care" ? "active" : ""}>CAREER</button>
                            </li>
                            <li>
                                <button onClick={( ) => setActiveDiv("skil")} id='highlight' className={activeDiv === "skil" ? "active" : ""}>SKILLS</button>
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
                                                Prototyping
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
                                <h1>Proffessional Skills</h1>
                            </div>
                                
                            <div>
                                <h3>
                                    Langauge Profeciency
                                </h3>

                                <p>
                                    <ul>
                                        <li>
                                            Has Great Fundamentals and a Basic understanding of Programming structure and algorithms.
                                        </li>
                                        <li>
                                            Proficiency in C++ with an average grade of 1.6 in Programming, and created simple terminal-based programs.
                                        </li>
                                        <li>
                                            Competent in Java and Python with a project of a Simple Terminal-Based Restaurant Reservation Chatbot and an Arithmetic Expression Tokenizer, which also displays an understanding of Natural Language Processing
                                        </li>
                                        <li>
                                            Dabbled and has ample experience in C# and PHP. Previously worked on Laravel with PHP as a backend with the assistance of AI in unfamiliar terms and concepts.
                                        </li>
                                        <li>
                                            Competent in HTML and CSS for basic to intermediate web and web app development. 
                                        </li>
                                        <li>
                                            Basic JavaScript understanding and potential.
                                        </li>
                                        <li>
                                            Exploring Dart and Godot Script.
                                        </li>
                                    </ul>
                                </p>
                            </div>

                            <div>
                                <h3>
                                    Framework Mastery
                                </h3>

                                <p>
                                    <ul>
                                        <li>
                                            Dabbled with multiple frameworks and gained basic knowledge in framework management.
                                        </li>
                                        <li>
                                            Competent in the React.js framework with an inclination to Vite. Developed my web portfolio using the React.js framework.
                                        </li>
                                        <li>
                                            Planned and initiated the thesis web portal with the focus on backend, using the Django framework. Connected the database with MySQL and Xampp.
                                        </li>
                                        <li>
                                            Co-initiated a web portal for the Guidance, Admission, and Placement office using the Laravel Framework. Connected MySQL and Xampp.
                                        </li>
                                        <li>
                                            Exploring Flutter Framework.
                                        </li>
                                        
                                    </ul>
                                </p>
                            </div>

                            <div>
                                <h3>
                                    Computer Science Fundamentals
                                </h3>

                                <p>
                                    <ul>
                                        <li>
                                            Adept in Database management with adequate knowledge in using MySQL and Xampp server. Has a basic understanding of how SQL commands.
                                        </li>
                                        <li>
                                           Competent in Object-Oriented Programming with a grade of 1.8 and a basic understanding of the concept of class encapsulation and hiding.
                                        </li>
                                        <li>
                                            Grasped the concept of Data Structure and Algorithms with a grade of 2.0
                                        </li>
                                        <li>
                                            Fundamental understanding in Programming language, including Natural Language Processing and Tokenization
                                        </li>
                                    </ul>
                                </p>
                            </div>

                            <div>
                                <h3>
                                    Tools and Software
                                </h3>

                                <p>
                                    <ul>
                                        <li>
                                            Microsoft Office proficiency focusing on MS Word for Document Formatting, MS Excel for Spreadsheet management, and MS PowerPoint for Presentation Design.
                                        </li>
                                        <li>
                                            Visual Studio Code, CodeBlocks, and Eclipse for IDE and program development, Figma for Prototyping, and Git/GitHub for Version Control.
                                        </li>
                                        <li>
                                            ClickUp site for Project Management and Workflow.
                                        </li>
                                    </ul>
                                </p>
                            </div>

                            <div>
                                <h3>
                                    Softskills
                                </h3>

                                <p>
                                    <ul>
                                        <li>
                                            A project-based learner who grows skills through practical application.
                                        </li>
                                        <li>
                                           Demonstrates a strong work ethic in accomplishing tasks and goals.

                                        </li>
                                        <li>
                                            Adapts and adjusts quickly with flexibility in various situations.

                                        </li>
                                        <li>
                                            Upholds integrity and professionalism in both work and conduct.

                                        </li>
                                        <li>
                                             Hardworking and self-motivated in completing responsibilities.

                                        </li>
                                        <li>
                                            Open-minded and willing to learn from new experiences.

                                        </li>
                                        <li>
                                            Works collaboratively and values effective teamwork.
                                        </li>
                                    </ul>
                                </p>
                            </div>

                            <div>
                                <h3>
                                    Langauge Profeciency
                                </h3>

                                <p>
                                    <ul>
                                        <li>
                                            Has Great Fundamentals and a Basic understanding of Programming structure and algorithms.
                                        </li>
                                        <li>
                                            Proficiency in C++ with an average grade of 1.6 in Programming, and created simple terminal-based programs.
                                        </li>
                                        <li>
                                            Competent in Java and Python with a project of a Simple Terminal-Based Restaurant Reservation Chatbot and an Arithmetic Expression Tokenizer, which also displays an understanding of Natural Language Processing
                                        </li>
                                        <li>
                                            Dabbled and has ample experience in C# and PHP. Previously worked on Laravel with PHP as a backend with the assistance of AI in unfamiliar terms and concepts.
                                        </li>
                                        <li>
                                            Competent in HTML and CSS for basic to intermediate web and web app development. 
                                        </li>
                                        <li>
                                            Basic JavaScript understanding and potential.
                                        </li>
                                        <li>
                                            Exploring Dart and Godot Script.
                                        </li>
                                    </ul>
                                </p>
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