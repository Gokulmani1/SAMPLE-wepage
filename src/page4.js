import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import '@fortawesome/free-regular-svg-icons';
import './Page4.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground, faCheck, faCircle, faCircleH, faCircleNotch, faCircleUser, faHistory } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faCircleRight, faEye } from "@fortawesome/free-regular-svg-icons";



export const Page4=()=>{
    return(
        <div className="container">
                <div className="row mt-5">
                                <div className="card card col-lg-4">
                                    <div className="card-header cardhead text-center">
                                        <FontAwesomeIcon className="icon" icon={faHistory}></FontAwesomeIcon>
                                    </div>
                                <div className="card-title cardtitle text-center mt-3">
                                    <p>Our Story</p>  
                                    </div>
                                
                                <div className="card-body cardbody">
                                    <p>Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. The players may have an audience of non-players, such as when people are entertained by watching a chess championship.</p>
                                </div>
                            </div>

                                <div className="card card2 col-lg-4 ">
                                    <div className="card-header cardhead text-center">
                                        <FontAwesomeIcon className="icon" icon={faCircleUser}></FontAwesomeIcon>
                                    </div>
                                <div className="card-title cardtitle text-center mt-3">
                                    <p>Our Story</p>  
                                    </div>
                                
                                <div className="card-body cardbody">
                                    <p>Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. The players may have an audience of non-players, such as when people are entertained by watching a chess championship.</p>
                                </div>
                            </div>
                      
                        
                                <div className="card card3 col-lg-4 ">
                                    <div className="card-header cardhead text-center">
                                        <FontAwesomeIcon className="icon" icon={faEye}></FontAwesomeIcon>
                                    </div>
                                <div className="card-title cardtitle text-center mt-3">
                                    <p>Our Story</p>  
                                    </div>
                                
                                <div className="card-body cardbody">
                                    <p>Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. The players may have an audience of non-players, such as when people are entertained by watching a chess championship.</p>
                                </div>
                            
                        </div>
                    
        </div>
        </div>
    )
}