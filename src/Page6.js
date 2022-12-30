import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import '@fortawesome/free-regular-svg-icons';
import './Page6.css';
import img1 from './img1.jfif';
import img2 from './img2.jpg';
import img3 from './img3.webp';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCalendarCheck, faCalendarTimes, faCircleCheck, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCalendarWeek, faHeartCircleBolt, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const Page6=()=>{
    return(
        <div>
            <div className="container  mt-5 text-center">
                <div className="row page6">
                    <div className="col-lg-3">
                        <FontAwesomeIcon className="page6icon" icon={faCalendarWeek}></FontAwesomeIcon>
                        <p className="page6p mt-3">12<span className="page6span">+</span></p>
                        <p className="page6p2">Year of experience</p>
                    </div>
                    <div className="col-lg-3">
                        <FontAwesomeIcon  className="page6icon" icon={faCircleCheck}></FontAwesomeIcon>
                        <p className="page6p mt-3">999<span className="page6span">+</span></p>
                        <p className="page6p2">Year of experience</p>
                    </div>
                    <div className="col-lg-3">
                        <FontAwesomeIcon  className="page6icon" icon={faPeopleGroup}></FontAwesomeIcon>
                        <p className="page6p mt-3">480<span className="page6span">+</span></p>
                        <p className="page6p2">Year of experience</p>
                    </div>
                    <div className="col-lg-3">
                        <FontAwesomeIcon  className="page6icon" icon={faHeartCircleBolt}></FontAwesomeIcon>
                        <p className="page6p mt-3">15<span className="page6span">+</span></p>
                        <p className="page6p2">Year of experience</p>
                    </div>
                </div>
            </div>
            <div className="row page6row2 mt-5">
                <div className="col-lg-12 text-center">
                    <p>Our Protofoli</p>
                </div>
            </div>
            <div className="row"><div className="col-lg-3"></div>
                <div className="col-lg-6 text-center">
                    <p>Games are sometimes played purely for enjoyment,Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well..</p>
                </div>
                <div className="col-lg-3"></div>
            </div>
            <div className="row page6row3">
                <div className="col-lg-2"></div>
                <div className="col-lg-2">
                    <span>ALL</span>
                </div>
                <div className="col-lg-2">
                    <span>Web development</span>
                </div>
                <div className="col-lg-2">
                    <span>Game development</span>
                </div>
                <div className="col-lg-2">
                    <span>App development</span>
                </div>
                
                <div className="col-lg-2"></div>
            </div>
            

            <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <img src={img1} className='img-fluid h-100'/>
                </div>
                <div className='col-lg-4'>
                    <img src={img2} className=' w-100 h-100'/>
                </div>
                <div className='col-lg-4'>
                    <img src={img3} className='img-fluid'/>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-4'>
                    <img src={img4} className='img-fluid h-100'/>
                </div>
                <div className='col-lg-4'>
                    <img src={img5} className=' w-100 h-100'/>
                </div>
                <div className='col-lg-4'>
                    <img src={img6} className='img-fluid'/>
                </div>
            </div>

            
            </div>
        



        </div>
    )
}
export default Page6;