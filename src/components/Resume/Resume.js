import React from 'react';

import classes from './Resume.module.scss';

const Resume = () => {
    // TODO: Put the resume in a xml or json file, and read and render from there
    return (
        <section className={classes.Resume}>
            <header className={classes.Resume__Header}>
                <h2>Berkay Senkoylu</h2>
            </header>

            <section className={classes.Resume__Intro}>
                <div>
                    Born and raised in Ankara, Turkey. Creative, determined, and enterprising software developer.
                </div>
            </section>

            <section className={classes.Resume__Skills}>
                <header>
                    <h2>Skills</h2>
                </header>
                <div className={classes.Resume__Skills__Grid}>
                    <div className={classes.Resume__Skills__Grid__Col}>
                        <h4>- Web Development</h4>
                        <ul>
                            <li>JavaScript, Node.js, Angular, React, Gatsby</li>
                            <li>Python, Flask, Django</li>
                            <li>HTML5, CSS3, SASS</li>
                            <li>Rest API, GraphQL</li>
                            <li>MongoDB, PostgreSQL</li>
                            <li>Jest, Mocha, Cypress</li>
                        </ul>
                    </div>
                    
                    <div className={classes.Resume__Skills__Grid__Col}>
                        <h4>- Misc Software</h4>
                        <ul>
                            <li>Matlab, Labview, Arduino, Processing</li>
                            <li>LaTeX, Microsoft Office, Gimp</li>
                        </ul>

                        <h4>- Game Development</h4>
                        <ul>
                            <li>Unity3D, Unreal Engine 4</li>
                            <li>Godot, Blender</li>
                        </ul>
                    </div>
                    
                </div>
            </section>

            <section className={classes.Resume__Work}>
                <header>
                    <h2>Work</h2>
                </header>
                <div className={classes.Resume__Work__Experience}>
                    <h4>Web Develoment Specialist at REA Uzaktan Egitim ltd. sti.</h4>
                    <div>
                        Web development, management and IT consultant
                    </div>
                    <ul>
                        <li>Building, and management of an e-learning system: www.de-institute.com</li>
                        <li>Organizing Spine courses, content management, data analysis</li>
                        <li>Co-author of the article: ‘Blended learning is a feasible and effective tool 
                            for basic pediatric spinal deformity training‘, currently in review for 
                            publishment on Global Spine Journal</li>
                        <li>Building elearning tools (e.g; custom video player with transcript controls, small trivia games, mobile course archives, etc)</li>
                        <li>Numerous video editing to be used in marketing and brand awareness</li>
                        <li>Prototyping an app which has a capability of natural language processing (wip)</li>
                    </ul>
                </div>
                
                <div className={classes.Resume__Work__Experience}>
                    <h4>Freelance Work</h4>
                    <div>
                        3D modeling, game development, and front-end web development
                    </div>
                    <ul>
                        <li>Modeled 3D Low poly model set for a local game studio in Stuttgart, Germany</li>
                        <li>Game Development for a client</li>
                        <li>Built a landing page for a school book club in Stuttgart</li>
                        <li>Commisioned for a landing page of a local establishment in Stuttgart</li>
                        <li>WordPress site cleanups and some customizations for some associations and academics</li>
                    </ul>
                </div>
            </section>

            <section className={classes.Resume__Education}>
                <header>
                    <h2>Education</h2>
                </header>

                <div className={classes.Resume__Education__School}>
                    <h4>Bachelor of Science (2016)</h4>
                    <div>Physics | Middle East Technical University (Ankara, Turkey)</div>
                    <div>Experimental Physics - Embedded Systems, Sensors, Processing</div>
                </div>

                <div className={classes.Resume__Education__School}>
                    <h4>Master of Science (2018-2019)</h4>
                    <div>Game Technologies | Hochschule der Medien (Stuttgart, Germany)</div>
                    <div>Studied 1 semester curriculum as an exchange student</div>
                </div>

                <div className={classes.Resume__Education__School}>
                    <h4>Master of Science (2017-2020)</h4>
                    <div>Computer Animation and Game Technologies | Hacettepe University (Ankara, Turkey)</div>
                    <div>In progress</div>
                </div>
            </section>

            <section className={classes.Resume__Projects}>
                <header>
                    <h2>Projects</h2>
                </header>

                <ul>
                    <li className={classes.Resume__Projects__Project}>
                        <span>E-learning platform:</span>
                        It is a platform that offers top notch hands on experience for newly 
                        trained surgeons in the fields of neuro surgery and orthopedics.
                    </li>
                    <li className={classes.Resume__Projects__Project}>
                        <span>E-commerce App:</span>
                        It is an app built with MERN stack, whose features include up to but 
                        not limited to complex authentication, user cart, checkout, payment,
                        product filter etc.
                    </li>
                    <li className={classes.Resume__Projects__Project}>
                        <span>Cartoonizer App:</span>
                        An application where users can convert their images to cartoon styled ones. Front end 
                        was built with react, backend was built with python flask.
                    </li>
                    <li className={classes.Resume__Projects__Project}>
                        <span>Fitness App:</span>
                        It is a MERN stack application where users can keep track of their exercise routines 
                        as well as their body indices with the help of the visualized data that they upload.
                    </li>
                    <li className={classes.Resume__Projects__Project}>
                        <span>Quiz App:</span>
                        It is a MEAN stack application where users can create their custom quizzes and questions,
                        and also compete with each other by solving quizzes created by others.
                    </li>
                    <li className={classes.Resume__Projects__Project}>
                        <span>Restaurant Landing page:</span>
                        It is a landing page I got commisioned, I built it with HTML, CSS and JavaScript.
                    </li>
                    <li className={classes.Resume__Projects__Project}>
                        <span>Bookclub Landing page:</span>
                        It is a landing page I got commisioned, I built it with HTML, CSS and JavaScript.
                    </li>
                    <li className={classes.Resume__Projects__Project}>
                        <span>RTS Game:</span>
                        It is an rts - tower defense mix that I got commisioned to build while I was in Germany.
                        Players need to survive as long as possible by collecting resources and building
                        defensive structures to kill zombies spawned during night time.
                    </li>
                    <li className={classes.Resume__Projects__Project}>
                        <span>2D Ball Game:</span>
                        A simple 2D game where the player gives the ball momentum to certain direction, collide with other balls
                        (sequentially to build a combo) and gain height to get away from nullification zone.
                    </li>
                    <li className={classes.Resume__Projects__Project}>
                        <span>Parallel:</span>
                        It is a co-op party game where 4 people can play at the same time. The main feature of this game is
                        dimension hopping where enemies become too overwhelming. It was built with 24 people as a semester
                        project in Hochschule der Medien in Stuttgart, Germany. I was in the game design department.
                    </li>
                    <li className={classes.Resume__Projects__Project}>
                        <span>Serious Game: OCD in Restaurants:</span>
                        Serious game project with the cooperation of Psychology Department and Informatics Institute of Hacettepe
                        University.
                    </li>
                    <li className={classes.Resume__Projects__Project}>
                        <span>Various Projects:</span>
                        Some more projects (personal or school) I built.
                        
                        <ul style={{marginTop: "1.5rem"}}>
                            <li>Motion activated SONAR</li>
                            <li>3D imaging system</li>
                            <li>Product sorting belt</li>
                            <li>Shadow shader in webgl</li>
                            <li>Implementation of finite state machines, behaviour trees and utility based ai system</li>
                            <li>2D visibility algorithm</li>
                            <li>Breakout game controlled by an agent trained with neural networks</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </section>
    )
}

export default Resume;