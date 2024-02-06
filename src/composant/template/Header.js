/* eslint-disable jsx-a11y/anchor-is-valid */
// RightPanel.js
import React from 'react';

const Header = ({setCurrentComponent}) => {
    const handleClick = async (componentKey) => {
        setCurrentComponent(componentKey);
    }

    return(
    <header>
       <div class="header-area">
            <div class="main-header ">
                <div class="header-top top-bg d-none d-lg-block">
                   <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-lg-8">
                            <div class="header-info-left">
                                <ul>                          
                                    <li>needhelp@gotrip.com</li>
                                    <li>666 569 025077</li>
                                    <li>broklyn street new york</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="header-info-right f-right">
                                <ul class="header-social">    
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                   <li> <a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
                       </div>
                   </div>
                </div>
               <div class="header-bottom  header-sticky">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xl-2 col-lg-2 col-md-1">
                                <div class="logo">
                                  <a href="index.html"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwJod9RHUo12b0O6z4LQmZOUbkTH0r3pxsA&usqp=CAU" style={{width : 200}} alt=""/></a>
                                </div>
                            </div>
                            <div class="col-xl-10 col-lg-10 col-md-10">
                                <div class="main-menu f-right d-none d-lg-block">
                                    <nav>               
                                        <ul id="navigation">                                                                                                                                     
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="#" onClick={() => handleClick('chatBody')}>Message</a></li>
                                            <li><a href="packages.html">Package</a></li>
                                            <li><a href="blog.html">Blog</a>
                                                <ul class="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="single-blog.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Historique</a>
                                                <ul class="submenu">
                                                    <li><a href="#" onClick={() => handleClick('historiqueAnnonce')}>Historique</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#" onClick={() => handleClick('allAnnonce')}>Liste annonce</a></li>
                                            <li><a href="#" onClick={() => handleClick('recherche')}>Recherche avancé</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
       </div>
    </header>

)};

export default Header;
