import React from "react";
import "./Adverts.css";
import awoof from "../../assets/background_files/awoof.png";
import buy from "../../assets/background_files/buy2-1.jpg";
import clearance from "../../assets/background_files/clearance.png";
import trend from "../../assets/background_files/trend.gif";
import jumiadev from "../../assets/background_files/jumiadev.png";
import men from "../../assets/background_files/men.jpg";
import popular from "../../assets/background_files/popular_picks.gif";


const Advert = () => {
    return(
        <div className="adverts">
            <div className="ads">
                <a href="">
                   <img src={awoof} alt="Awoof deals" />
                   <p>Awoof Deals</p> 
                </a>
            </div>
            <div className="ads">
                <a href="">
                   <img src={buy} alt="Buy 2, get 1 free" />
                   <p>Up to 50% Off</p> 
                </a>
            </div>
            <div className="ads">
                <a href="">
                   <img src={trend} alt="Trendyol gif" />
                   <p>Petite Fashion</p> 
                </a>
            </div>
            <div className="ads">
                <a href="">
                   <img src={clearance} alt="An image written clearance" />
                   <p>Up to 80% Off</p> 
                </a>
            </div>
            <div className="ads">
                <a href="">
                   <img src={popular} alt="a gif of play staion5, blender, smart wrist watch etc. " />
                   <p>Top Picks For You</p> 
                </a>
            </div>
            <div className="ads">
                <a href="">
                   <img src={men} alt="an image of a man wearing a cloth" />
                   <p>Men's Fashion</p> 
                </a>
            </div>
            <div className="ads">
                <a href="">
                   <img src={jumiadev} alt="Jumia's delivery van" />
                   <p>Send Packages Securely</p> 
                </a>
            </div>
        </div>
    )
}
export default Advert;