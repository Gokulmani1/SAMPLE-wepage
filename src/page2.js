import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import '@fortawesome/free-regular-svg-icons';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from './slide1.jpg';
import slide2 from './slide2.webp';
import './Home.css';

const page2=()=>{
    return(
        <div>
            <div className="container">
            <div className=" row">
                       
                       <div className="col-lg-12">
                       <Carousel >
                           <Carousel.Item >
                                   <img className="d-block w-100" src={slide1}/>
                               <Carousel.Caption className="caption">
                                   <h3>Game Development</h3>
                                   <button type="button" className="btn btn-light">GET STARTED</button>
                               </Carousel.Caption>
                           </Carousel.Item>
                           <Carousel.Item >
                                   <img className="d-block w-100 " src={slide2} alt="Image Two"/>
                           <Carousel.Caption className="caption">
                                   <h3>Game Development</h3>
                                 <button type="button" className="btn btn-light">GET STARTED</button>
                           </Carousel.Caption>
                           </Carousel.Item>
                       </Carousel>
                 
                   </div>
                   </div>
            </div>
        </div>
    )
}
export default page2;