import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import '@fortawesome/free-regular-svg-icons';
import './Page5.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faDesktop, faGear, faGears, faLaptop, faMobileAndroid, faPhone, faW } from "@fortawesome/free-solid-svg-icons";

const Page5=()=>{
                return(
                    <div>
                        <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-12 text-center">
                                <p className="page5text">Our Service</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-2">&nbsp;</div>
                            <div className="col-lg-8">
                                <p className="page5text2 text-center">Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. 
                                They can be played alone, in teams, or online; by amateurs or by professionals sometimes played purely for enjoyment.</p>
                            </div>
                            <div className="col-lg-2">&nbsp;</div>
                        </div>
                        

                        <div className="row  mt-5">
                            <div className="col-lg-1">&nbsp;</div>
                            <div className="col-lg-3 page5row ">   
                                        <FontAwesomeIcon icon={faComputer} className="page5icon mt-1"></FontAwesomeIcon>
                                        <span >WEB DESIGN</span>
                           </div>
                           <div className="col-lg-1">&nbsp;</div>
                            <div className="col-lg-3 page5row d-flex">
                                         <FontAwesomeIcon icon={faLaptop} className="page5icon mt-1"></FontAwesomeIcon>
                                        <span>WEB DEVELOPMENT</span>
                            </div>
                            <div className="col-lg-1">&nbsp;</div>
                            <div className="col-lg-3 page5row d-flex">
                                        <FontAwesomeIcon icon={faGear} className="page5icon mt-1"></FontAwesomeIcon>
                                        <span>THEME DEVELOPMENT</span>
                            </div>
                        </div>

                        <div className="row  mt-5">
                            <div className="col-lg-1">&nbsp;</div>
                            <div className="col-lg-3 page5row d-flex">   
                                        <FontAwesomeIcon icon={faGears} className="page5iconmt-1"></FontAwesomeIcon>
                                        <span>GAME DEVELOPMENT</span>
                           </div>
                           <div className="col-lg-1">&nbsp;</div>
                            <div className="col-lg-3 page5row d-flex">
                                         <FontAwesomeIcon icon={faMobileAndroid} className="page5icon mt-1"></FontAwesomeIcon>
                                        <span>APP DEVELOPMENT</span>
                            </div>
                            <div className="col-lg-1">&nbsp;</div>
                            <div className="col-lg-3 page5row d-flex">
                                        <FontAwesomeIcon icon={faDesktop} className="page5icon mt-1"></FontAwesomeIcon>
                                        <span>DESKTOP APPLICATION</span>
                            </div>
                        </div>

                        <div className="row  mt-5">
                            <div className="col-lg-1">&nbsp;</div>
                            <div className="col-lg-3 page5row d-flex">   
                                        <FontAwesomeIcon icon={faW} className="page5icon mt-1"></FontAwesomeIcon>
                                        <span>WORDPRESS THEME</span>
                           </div>
                           <div className="col-lg-1">&nbsp;</div>
                            <div className="col-lg-3 page5row d-flex">
                                         <FontAwesomeIcon icon={faGear} className="page5icon mt-1"></FontAwesomeIcon>
                                        <span>WORDPRESS PLUGING</span>
                            </div>
                            <div className="col-lg-1">&nbsp;</div>
                            <div className="col-lg-3 page5row d-flex">
                                        <FontAwesomeIcon icon={faPhone} className="page5icon mt-1"></FontAwesomeIcon>
                                        <span>SUPPORT & IT</span>
                            </div>
                        </div>

                        
                    </div>
                    </div>
                )
}
export default Page5; 