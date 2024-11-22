import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

function Terminal () {
    return(
        <div>
            <div className="terminal-hr">
                <hr />
                <div>
                    <div className="terminal" id="terminal">
                        <div>
                            <img src="assets/People-images.png" alt="terminal-icon" />
                        </div>
                        <div className="terminal-change">
                            <h1>Meet Client Satisfaction<br/>
                                by using product</h1>
                            <p>The rise of mobile devices transforms the way we consume.<br/>
                                elevant channels such as Facebook.</p>
                        <div className="star-rating">
                             {[...Array(5)].map((_, i) => (
                                 <FontAwesomeIcon key={i} icon={faStar} className="gold-star" />
                                    ))}
                            </div>
                            <div>
                                <h2>User friendly & Customizable</h2>
                                <p>Bring to the table win-win survival strategies to ensure <br/> proactive domination. At the end of the day, 
                                    going forward, <br/>a new normal that has evolved from generation X is on the<br/> runway heading towards a streamlined cloud solution. 
                                    User <br/> generated content in real-time will have multiple touchpoints for offshoring.</p>
                                <div className="face-arrow">
                                    <div className="face-ceo">
                                        <div >
                                            <img src="assets/terminal-icon-face.png" alt="Terminal-face" />
                                        </div>
                                        <div>
                                            <h3>Zoltan Nemeth</h3>
                                            <p>CEO of Pixler Lab</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="assets/terminal-icon-arrow.png" alt="arrow-icon"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Terminal;