import React from "react";

import'./resume.css';

 function resume(){

       return(
        <React.Fragment>
              <div className="container">
                    <div className="title">
                        <div className="square"></div>
                        <h3 className="header-resume">RESUME</h3>
                    </div>
                    <div className="cv">
                        <button>
                            DOWNLOAD CV
                        </button>
                    </div>
                            <div className="resume-container card">
                            <h3>EDUCATION</h3>
                                <div className="row">
                                    <div className="col-md-5">
                                        <h4>2015-2019</h4>
                                        <h6>Malla Reddy Engineering College</h6>
                                        <p>Bachelors in Computer Science Engineering</p>
                                    </div>
                                    <div className="col-md-7">
                                       <h4>Relevant Details:</h4>
                                       <ul className="bullet-points education">
                                           <li>

                                           </li>
                                           <li>

                                               
                                           </li>
                                       </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="resume-container card">
                                <h3>TECHNICAL SKILLS</h3>
                                <ul className="bullet-points">
                                    <li>Core Java</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>SASS</li>
                                    <li>Bootstrap</li>
                                    <li>JavaScript</li>
                                    <li>Reactjs</li>                                    
                                    <li>MySQL</li>
                                    <li>Redux</li>
                                    <li>Material UI</li>
                                </ul>
                            </div>
                </div>
        </React.Fragment>
       );

}

export default resume;