import React, { Component } from "react";
import "./projects.css"


class projects extends Component {
    constructor() {
        super();
        this.state = {
            name:'',
            projectList: [

                {
                    projectName: 'Blood Bank - Mini Project',
                    projectDesc: 'A web based application in which donors register to donate blood and their details can be accessed when required by users as well as hospital management.',
                    projectTech: 'HTML, CSS, JS, Mysql, Java Servlets, Tomcat 7',                    
                    projectLink: "https://gitlab.com/vyshnavi-kottamasu/blood-bank"

                },
                {
                    projectName: 'Live Tracker - Internship',
                    projectDesc: 'A Web application used to change the status of the page and to track whether the page is in live or not.',
                    projectTech: 'HTML, CSS, JS, AJAX, Bootstrap, Mysql, Java Servlets',
                    projectLink: "",
                },
                {
                    projectName: 'Action Tracker - POC',
                    projectDesc: 'A Dashboard which is used to assign user stories, add points, change the status of a story, track the pending tasks based on due dates, allows to log time against a task. Access permissions were given based on the role. ',
                    projectTech: 'HTML, CSS, Vuejs, Bootstrap, SQL Server',
                    projectLink: "",
                },
                {
                    projectName: 'Project 1',
                    projectDesc: 'A tool which is used to create static pages. This breaks the page into sections and each section has modules which accepts html code. Different modules have different features like animations, default stylings and many more styling options.',
                    projectTech: 'Html, CSS, SASS, Reactjs, Material UI, Cypress Automation.',
                    projectLink: "",
                },
                {
                    projectName: 'Project 2',
                    projectDesc: 'To create Frontend Static as well as Dynamic pages. API calls are provided by the backend team and basic metric calls are written in js code.',
                    projectTech: 'Html, CSS, Reactjs, Redux, Material UI',
                    projectLink: "",
                }

            ]
        }

    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="title">
                        
                    <div className="square"></div>
                    <h3 className="header-project">PROJECTS</h3>
                    </div>
                    <p className="subtitle">Check out some of my projects down below!</p>
                    {
                      this.state.projectList.map(projectLists =>
                            <div className="project-container card">
                                <div className="row">
                                    <div className="col-md">
                                    {
                                       projectLists.projectLink.length>0 && <button className="rounded-pill check-out float-right"><a href={projectLists.projectLink} target="_blank" rel="noreferrer" >Check out</a></button>
                                    }
                                        <div className="card-header project-name">
                                           <h5>{projectLists.projectName}</h5>
                                        </div>
                                        <div className="card-body">
                                            <h6>Project Description</h6>
                                            <div>{projectLists.projectDesc}</div>
                                        </div>
                                        <div className="card-footer">
                                            <h6>Project Technology</h6>
                                            <div>{projectLists.projectTech}</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                </div>
            </React.Fragment>

        );
    }




}

export default projects;