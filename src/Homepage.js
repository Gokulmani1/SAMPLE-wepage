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

  const Home=()=>{
    return(
        <>
                <div className="container cont ">
                    <div className="row">
                        <div className="col-lg-2">
                            <p className="heading">1Page</p>
                        </div>
                        <div className="col-lg-4">&nbsp;</div>
                        <div className="col-lg-6">
                            <Navbar  expand="lg" r1>
                                 <Navbar.Toggle />
                                    <Navbar.Collapse >
                                       <Nav className="nav">
                                            <Nav.Link href='' className='text-primary'>Home</Nav.Link>
                                            <Nav.Link href='' className='text-primary'>Aboutus</Nav.Link>
                                            <Nav.Link href='' className='text-primary'>OurService</Nav.Link>
                                            <Nav.Link href='' className='text-primary'>OurPortofolio</Nav.Link>
                                            <Nav.Link href='' className='text-primary'>ContactUs</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>

              
                    
                    

                </div>
    </>
    )
}
export default Home;