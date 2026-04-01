import React from "react";
import "./Footer.css";
import { FaApple, FaCcMastercard, FaCcVisa, FaCreditCard, FaEnvelope, FaFacebookF, FaGooglePlay, FaHandHolding, FaHandHoldingUsd, FaInstagram, FaShieldVirus, FaStar, FaStarAndCrescent, FaTelegram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="jumia">
                <p>JUMIA</p>
                <div className="jumia-star"><FaStar style={{color: "black", fontSize: "1.7rem"}}/></div>
            </div>
            <div className="new-to-jumia">
                <h3>New to Jumia?</h3> <br/>
                <p>
                    Subscribe to our newsletter to get updates on our latest offers, you can unsubscribe at any time as described in Privacy Policy. <br/> <br/>
                    To subscribe to our newsletter, you must first read and agree to Jumia's <a href="">Privacy Policy</a> and <a href="">Cookie Notice</a>
                </p> <br/>
                <div className="agreement">
                    <input type="checkbox" /><p>I agree to Jumia’s Privacy and Cookie Policy.</p>
                </div> <br/>
                <div className="input-button">
                    <div className="input-field">
                        <span><FaEnvelope/></span>
                        <input type="text" placeholder="Enter your Email Address" />
                    </div>
                    <button>Subscribe</button>
                </div>  
            </div>
            <div className="app">
                <div className="download">
                    <div className="jumia-star2"><FaStar style={{color: "orange", fontSize: "1.7rem"}}/></div>
                    <div>
                        <p>
                            <span>DOWNLOAD JUMIA FREE APP</span> <br/>
                            Get access to exclusive offers!
                        </p>
                    </div>
                </div>
                <div className="store-google">
                    <div className="app-store">
                        <div>
                            <a href=""><FaApple style={{color: "white", fontSize: "1.7rem"}}/></a>
                        </div>
                        <div>
                            <p>
                                <a href=""> Download on the <br /> <span>App Store</span></a> 
                            </p>
                        </div>
                    </div>
                    <div className="google-play">
                         <div>
                            <a href="">
                                 <FaGooglePlay style={{color: "white", fontSize: "1.7rem"}}/>
                            </a>    
                        </div>
                        <div>
                            <p>
                                <a href="">
                                     GET IT ON <br /> <span>Google Play</span> 
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="sections">
                <p>NEED HELP?</p> <br />
                <a href="">Chat with us</a>
                <a href="">Help centre</a>
                <a href="">Contact us</a> <br />

                <p>USEFUL LINKS</p> <br />
                <a href="">Service Center</a>
                <a href="">How to shop on Jumia?</a>
                <a href="">Delivery options and timelines</a>
                <a href="">How to return a product on Jumia?</a>
                <a href="">Corporate and bulk purchases</a>
                <a href="">Report a Product</a>
                <a href="">Dispute Resolution Policy</a>
                <a href="">Returns & Refund Timeline</a>
                <a href="">Return Policy</a>
                <a href="">Pickup Stations</a>
                <a href="">Jumia Delivery</a> <br /><br />

                <p>JOIN US ON</p>
                <div className="join-icons">
                    <a href=""><FaFacebookF title="Facebook"/></a>
                    <a href=""><FaYoutube title="Youtube"/></a>
                    <a href=""><FaInstagram title="Instagram"/></a>
                    <a href=""><FaTwitter title="Twitter"/></a>
                    <a href=""><FaTiktok title="Tiktok"/></a>
                </div>
                <div className="adidas-nike">
                    <a href="">ADIDAS</a>
                    <a href="">NIKE</a>
                </div>
            </div>
            <div className="sections">
                <p>ABOUT JUMIA</p> <br />
                <a href="">About us</a>
                <a href="">Jumia careers</a>
                <a href="">Corporate Website</a>
                <a href="">Terms and Conditions</a>
                <a href="">Privacy Notice</a>
                <a href="">Jumia Payment Information Guidelines</a>
                <a href="">Cookie Notice</a>
                <a href="">Official Stores</a>
                <a href="">Flash Sales</a>
                <a href="">Black Friday</a> <br />

                <p>PRIVACY</p> <br />
                <a href="">Privacy Notice</a>
                <a href="">Cookie Notice</a>
                <a href="">Cookie Preferences</a> <br /><br /><br />

                <p>PAYMENT METHODS</p>
                 <div className="join-icons2">
                    <a href=""><FaHandHoldingUsd title="Payment on delivery"/></a>
                    <a href=""><FaCcMastercard title="Mastercard"/></a>
                    <a href=""><FaCcVisa title="Visa"/></a>
                    <a href=""><FaCreditCard title="Verve"/></a>
                </div>
                <div className="samsung">
                    <a href="">Samsung</a>
                </div>
            </div>
            <div className="sections">
                <p>MAKE MONEY WITH JUMIA</p> <br />
                <a href="">Sell on Jumia</a>
                <a href="">Vendor hub</a>
                <a href="">Become a Sales Consultant</a> <br /><br /><br />
            </div>
            <div className="sections">
                <p>JUMIA INTERNATIONAL</p><br />
                    <a href="">Egypt</a>
                    <a href="">Ghana</a>
                    <a href="">Ivory Coast</a>
                    <a href="">Kenya</a> 
                    <a href="">Morocco</a>
                    <a href="">Senegal</a>
                    <a href="">Uganda</a>
            </div>
        </div>
        <footer className="hr">
            <hr />
            <div className="shield-star">
                <div>
                    <a href=""><FaShieldVirus/> <i>PAY</i></a>
                </div>
                <div>
                    <a href=""><FaStarAndCrescent/> <i>DELIVERY</i></a>
                </div>
            </div>
            
        </footer>
    </div>
  )
}

export default Footer;  
