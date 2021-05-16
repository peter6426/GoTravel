import React from 'react';

import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
       <div className="col">
            <ul>INFO SOLUTIONS INC, By Prateek Tomar</ul>
           <br></br>
              <p> +91-7611966808 </p>
              <p> JAIPUR, </p>
              <p> RAJASTHAN, INDIA</p>
              <br></br>
          </div>
          
        </div>
       
     <hr></hr>
          <p className="col-sm">
            &copy;{new Date().getFullYear()} | All rights reserved |
            Terms Of Service | Privacy
          </p>  <hr></hr>
        </div>
     
  );
}

export default Footer;
