import React from 'react';
import '../../App.css';

function Pricing() {
  return(
    <div>
      <div className="container">
  <div className="price-1" id='pricing'>
    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Monthly</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Annually</button>
      </li>
    </ul>
    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
        <div className='pricing-flex'>
        <div className="box-size">
          <div className="price-border">
            <div className="pricing-details">
              <h1>$0<span>/month</span></h1>
              <h2>Business Class</h2>
              <p>For small teams or office</p>
              <hr/>
            </div>
            <div className="features">
              <p>Drag & Drop Builder</p>
              <p>1,000's of Templates</p>
              <p>Blog Support Tools</p>
              <p>eCommerce Store</p>
              <a href="#">Start free trail</a>
            </div>
          </div>
          <div className="price-border">
            <div className="pricing-details">
              <h1>$99<span>/month</span></h1>
              <h2>Pro Master</h2>
              <p>For Best Opportunities</p>
              <hr/>
            </div>
            <div className="features">
              <p>Drag & Drop Builder</p>
              <p>1,000's of Templates</p>
              <p>Blog Support Tools</p>
              <p>eCommerce Store</p>
              <a href="#">Subscribe Now</a>
              <p className="last-p">Or Start 14 days trail</p>
            </div>
          </div>
        </div>
        </div>
        
      </div>
      <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
        <div className='pricing-flex'>
          <div className="box-size">
            <div className="price-border">
              <div className="pricing-details">
                <h1>$99<span>/annually</span></h1>
                <h2>Business Class</h2>
                <p>For small teams or office</p>
                <hr/>
              </div>
              <div className="features">
                <p>Drag & Drop Builder</p>
                <p>1,000's of Templates</p>
                <p>Blog Support Tools</p>
                <p>eCommerce Store</p>
                <a href="#">Try Now</a>
              </div>
            </div>
            <div className="price-border">
              <div className="pricing-details">
                <h1>$1,199<span>/annually</span></h1>
                <h2>Pro Masters</h2>
                <p>For Best Opportunities</p>
                <hr/>
              </div>
              <div className="features">
                <p>Drag & Drop Builder</p>
                <p>1,000's of Templates</p>
                <p>Blog Support Tools</p>
                <p>eCommerce Store</p>
                <a href="#">Subscribe Now</a>
                <p className="last-p">Or Start 14 days trail</p>
              </div>
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

export default Pricing;
