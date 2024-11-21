import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header () {
    return(
        <div>
            <div className="background-bg">
            <div className="container header-bg">
                <div className="layerturn-up">
                    <div className="badge-up">
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                    <div className="badge-one">
                        <p>#1 Editiors Choice App of 2020</p>
                    </div>
                </div>
                <div className="header-middle">
                    <h1>Best app for your <br />
                    modern lifestyle</h1>
                    <p>Increase productivity with a simple to-do app. app for <br />
                    managing your personal budgets.</p>
                    <a href="www.google.com" className="button-try-one">Try for free</a>
                    <a href="www.google.com" className="side-click">Watch demo vedio</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header;