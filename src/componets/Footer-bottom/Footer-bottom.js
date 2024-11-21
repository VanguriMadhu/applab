import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';
function Footerbottom (){
    return(
        <div>
                <div className="footer-color">
                    <div className="container">
                    <div className="footer-top-1">
                        <h1>App<span>Lab</span></h1>
                    </div>
                    <div className="footer-nav-2">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <a href="#features">Key Features</a>
                                </li>
                                <li>
                                    <a href="#pricing">Pricing</a>
                                </li>
                                <li>
                                    <a href="#terminal">Testiminial</a>
                                </li>
                                <li>
                                    <a href="#faq">FAQ</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="footer-icons">
        <FontAwesomeIcon icon={faFacebook} size="2x" color="#3b5998" className="icons-move"/>
        <FontAwesomeIcon icon={faTwitter} size="2x" color="#00acee" className="icons-move" />
        <FontAwesomeIcon icon={faHashtag} size="2x" color="#000000" className="icons-move icons-color" />
        <FontAwesomeIcon icon={faGithub} size="2x" color="#171515" className="icons-color"/>
        <h3 className="footer-end-end">Copyright© Arifur Rahman Tushar 2019. All rights reserved</h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footerbottom;