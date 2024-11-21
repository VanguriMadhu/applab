import React from "react";

import './Footer-top.css';

function Footertop (){
    return(
        <div>
            <div className="fluid-last">
                <div className="container">
                    <div className="footer-top-h">
                        <h1>Download our App now !</h1>
                    <p>The rise of mobile devices transforms the way we consume information entirely<br/>
                    and the world's most elevant channels such as Facebook.</p>
                    </div>
                    <div className="footer-button-top">
                        <a href="#"><img src="assets/playstore.png" alt="playstore-icon" className="ft-pad"/></a>
                        <a href="#"><img src="assets/appstore.png" alt="appstore-icon" className="ft-pad-1"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footertop;