import React from 'react';
import {  Container,Nav, Navbar, NavDropdown, NavLink, Offcanvas } from 'react-bootstrap';
import imageOne from '../../../Images/imageOne.jpg'
import imageTwo from '../../../Images/imageTwo.jpg'
import imageThree from '../../../Images/imageThree.jpg'
import imageFour from '../../../Images/imageFour.jpg'
import imageFive from '../../../Images/imageFive.jpg'
import imageSix from '../../../Images/imageSix.jpg'
import { Link } from 'react-router-dom';
import './Navigation.css'
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user,logOut } = useAuth();
    return (
        <div >
            <Navbar style={{backgroundColor:'black'}} expand={false}>
            <Container fluid>
                <Navbar.Brand className='text-white ms-5 fs-2' href="#">TOP TAKES</Navbar.Brand>
                <Navbar.Toggle style={{backgroundColor:"rgba(26, 25, 25, 0.835)"}}  aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                
                >
                <Offcanvas.Header closeButton className='bg-dark'>
                    <Offcanvas.Title className='text-white' id="offcanvasNavbarLabel"><span className='d-flex mt-4'>Top Takes</span></Offcanvas.Title>
                    
                </Offcanvas.Header>
                <Offcanvas.Body className='bg-dark'>
                <p className='text-white'>The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion.</p>
                <br />
                <br />
                <h3 className='text-white'>Latest photos</h3>
                <div class="row row-cols-2 row-cols-md-3 g-4 mt-3 mb-5">
                    <div class="col">
                        <div class="card">
                        <img style={{height:'120px'}} src={imageOne} class="card-img-top" alt="..."/>
                        
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img style={{height:'120px'}} src={imageTwo} class="card-img-top" alt="..."/>
                       
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img style={{height:'120px'}} src={imageThree} class="card-img-top" alt="..."/>
                        
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img style={{height:'120px'}} src={imageFour} class="card-img-top" alt="..."/>
                        
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img style={{height:'120px'}} src={imageFive} class="card-img-top" alt="..."/>
                       
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img style={{height:'120px'}} src={imageSix} class="card-img-top" alt="..."/>
                        
                        </div>
                    </div>
                    </div>

                
                    <Nav className="justify-content-end flex-grow-1 pe-3 mb-5">
                    <h3 className='text-white mb-3'>Explore</h3>
                        <Link className='text-white text-decoration-none' to="/home">Home</Link>
                        <Link className='text-white text-decoration-none' to="/gallery">Gallery</Link>
                        <Link className='text-white text-decoration-none' to="/booking">Booking</Link>
                        
                       
                    <NavDropdown title="Categories" id="offcanvasNavbarDropdown">
                        <NavDropdown.Item    href="#action3" >Fashion</NavDropdown.Item>
                        <hr/>
                        <NavDropdown.Item  href="#action4">Lifestyle </NavDropdown.Item>
                        <hr/>
                        <NavDropdown.Item  href="#action4">Nature</NavDropdown.Item>
                        <hr />
                        <NavDropdown.Item  href="#action4">Portraits </NavDropdown.Item>
                        
                        
                    </NavDropdown>
                    </Nav>
                    <h5 className="text-white me-2 mb-2 mt-2" style={{textShadow:"1px 1px rgb(83, 80, 80)"}}>{user.displayName}</h5>
                        {
                            user.email ? 
                            <div className="d-flex">
                              
                              <button style={{backgroundColor:'black',color: "#ffd8cd"}}className="rounded py-2 px-3  py-sm-2 px-sm-3" onClick={logOut}>Sign Out</button>
                            </div>
                            :
                            <Link to='/login' className='btn btn-outline-secondary text-white' >Login</Link> 
                        }
                   
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;