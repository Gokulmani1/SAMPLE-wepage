import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import '@fortawesome/free-regular-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from './slide1.jpg';
import slide2 from './slide2.webp';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faNavicon } from '@fortawesome/free-solid-svg-icons';

  const Page3=()=>{
    return(
        <>
        <div className="row">
                        <div className="col-lg-12 mt-5 text-center"> 
                            <p className="para1">welcome To Our Website</p>
                        </div>
          </div>
          <div className="row">
             
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-8 text-center">
                  <p className="">Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. 
                            The players may have an audience of non-players, such as when people are entertained by watching a chess championship. On the other hand, players in a game may constitute their
                             own audience as they take their turn to play. Often, part of the entertainment for children playing a game is deciding who is part of their audience and who is a player. A toy 
                             and a game are not the same. Toys generally allow for unrestricted play whereas games come with present rules.
                            </p>
                  </div>                 
                <div className="col-lg-2">&nbsp;</div>  
                
          </div> 
          <div className="row">
            <div className="col-lg-12 text-center ">
              <button type="button" className="btn1" >READ MORE</button>
            </div>
          </div>
      
                    
        </>
    )
  }
  export default Page3;




