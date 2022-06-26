import React from "react";
import img from '../../js/img'


function Footer(){
    return(
        <footer className="footer">
        <div className="footer__logo">
          <img src={img.logo} alt="logo" className="footer__logo" />
        </div>
            <div className="footer__location">
              <img src={img.location} alt="" className="footer__icon" />
              <p className="footer__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et
                dolore magna aliqua</p>
            </div>
            <div className="footer__info">
                <p className="footer__contact"><img src={img.phone} alt="phone" /><span>+1-543-123-4567</span></p>
                <p className="footer__contact"><img src={img.email} alt="email" /><span>example@fylo.com</span></p>
            </div>
            <div className="footer__links">
            <a href="#">About Us</a>
            <a href="#">Jobs</a>
            <a href="#">Press</a>
            <a href="#">Blog</a>
            </div>
            <div className="footer__more-links">
            <a href="#">Contact Us</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            </div>
            <div className="footer__social">
            <img src={img.facebook} alt="facebook" className="footer__media" />
            <img src={img.twitter} alt="twitter" className="footer__media" />
            <img src={img.instagram} alt="instagram" className="footer__media" />
            </div>
        <p className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Luis Miguel Castro Curequia</a>.
        </p>
      </footer>
    )
}

export default Footer;