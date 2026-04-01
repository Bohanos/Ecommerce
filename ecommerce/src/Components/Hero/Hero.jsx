import React from "react";
import './Hero.css'
import { useState } from "react";


// Font icons
import { FaApple, FaBaby, FaCode, FaDotCircle, FaGamepad, FaHeartBroken, FaHome, FaLaptopHouse, FaPhoneAlt, FaTshirt, FaTv } from "react-icons/fa";

// Images
import jumia_force from "../../assets/background_files/JFORCE-2.gif";
import phone from "../../assets/background_files/phone-icon-1.png";
import shop from "../../assets/background_files/icone-seller-1.png";
import van from "../../assets/background_files/delivery-new.jpg";
import art1jpg from "../../assets/background_files/Artboard1.jpg";
import artjpg from "../../assets/background_files/Artboard.jpg";
import artpng from "../../assets/background_files/Artboard-1.png";
import art1gif from "../../assets/background_files/Artboard1.gif";
import artgif from "../../assets/background_files/Artboard.gif";
import art2gif from "../../assets/background_files/Artboard-1.gif";


const Hero = () => {
  return (
    <div className="hero">
        <div className="nav-lists">
          <ul>
            <li > 
              <a href="#"><FaLaptopHouse /> Appliances</a>
            </li>
            <li > 
              <a href="#"><FaPhoneAlt /> Phones and Tablets</a>
            </li>
            <li > 
              <a href="#"><FaHeartBroken /> Health and Beauty</a>
            </li>
            <li> <a href="#"><FaHome /> Home and Office</a></li>
            <li> <a href="#"><FaTv /> Electronics</a></li>
            <li> <a href="#"><FaTshirt /> Fashion</a></li>
            <li> <a href="#"><FaApple /> Supermarket</a></li>
            <li> <a href="#"><FaCode /> Computing</a></li>
            <li> <a href="#"><FaBaby /> Baby Products</a></li>
            <li> <a href="#"><FaGamepad /> Gaming</a></li>
            <li> <a href="#">Musical Instuments</a></li>
            <li> <a href="#"><FaDotCircle /> Other categories</a></li>
          </ul>
        </div>
        <div className="slide">
          <div className="slide-images">
            <a href=""><img src={art2gif} alt="" /></a>
          </div>
          <div className="slide-images">
            <a href=""><img src={artjpg} alt="" /></a>
          </div>
          <div className="slide-images">
            <a href=""><img src={artgif} alt="" /></a>
          </div>
          <div className="slide-images">
            <a href=""><img src={artpng} alt="" /></a>
          </div>
          <div className="slide-images">
            <a href=""><img src={art1gif} alt="" /></a>
          </div>
          <div className="slide-images">
            <a href=""><img src={art1jpg} alt="" /></a>
          </div>
        </div>
        <div className="call-to-order">
          <div className="call-sell-send">
            <div className="section">
              <div><a href="#"><img src={phone} alt="An image of a phone" /></a></div>
              <div><p><a href="">CALL TO ORDER <br />02018883300 0700-600-...</a></p></div>
            </div>
            <div className="section2">
              <div><a href=""><img src={shop} alt="An image of a shop" /></a></div>
              <div><p><a href="">Sell on Jumia</a></p></div>
            </div>
            <div className="section3">
              <div><a href=""><img src={van} alt="An image of a delivery van" /></a></div>
              <div><p><a href="">Send Your Packages</a></p></div>
            </div>
          </div>
          <div className="jumia-force">
            <a href=""><img src={jumia_force} alt="Jumia Force" /></a>
          </div>
        </div>
        <div className="overlay-appliances">
          
        </div>

        {/* Mega menu for Appliances  link */}
    </div>
  )
}

export default Hero