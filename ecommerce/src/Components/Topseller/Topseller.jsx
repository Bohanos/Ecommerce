import React from "react";
import "./Topseller.css"
import { FaGreaterThan } from "react-icons/fa";
import nexus from "../../assets/background_files/nexus.jpg";
import infinix from "../../assets/background_files/infinix.jpg";
import fryer from "../../assets/background_files/fryer.jpg";
import oraimo from "../../assets/background_files/oraimo.jpg";
import nivea from "../../assets/background_files/nivea.jpg";
import samsung from "../../assets/background_files/samsungA07.jpg";

const Topseller = () => {
    return(
        <section className="top-seller">
            <div className="top-header">
                <p>Top Seller</p>
                <a href="">See All <FaGreaterThan/></a>
            </div>
            <div className="top-images">
                <div className="images">
                    <a href=""><img src={nexus} alt="" /></a>
                    <p>
                        <a href="">Nexus 50Litres Bedside... <br /> &#x20A6;99,999 <br /> <span>&#x20A6;131,470</span></a>
                    </p>
               </div>
                <div className="images">
                    <a href=""><img src={infinix} alt="" /></a>
                    <p>
                        <a href="">Infinix Smart 10 Plus 6.7"... <br /> &#x20A6;142,975 <br /> <span>&#x20A6;153,154</span></a>
                    </p>
               </div>
               <div className="images">
                    <a href=""><img src={fryer} alt="" /></a>
                    <p>
                        <a href="">SILVER CREST 8L Extra L... <br /> &#x20A6;34,999 <br /> <span>&#x20A6;44,000</span></a>
                    </p>
               </div>
               <div className="images">
                    <a href=""><img src={nivea} alt="" /></a>
                    <p>
                        <a href="">NIVEA Radiant and Beauty... <br /> &#x20A6;7,684 <br /> <span>&#x20A6;11,635</span></a>
                    </p>
               </div>
               <div className="images">
                    <a href=""><img src={oraimo} alt="" /></a>
                    <p>
                        <a href="">Oraimo Traveler 15 powe... <br /> &#x20A6;14,303 <br /> <span>&#x20A6;27,930</span></a>
                    </p>
               </div>
               <div className="images">
                    <a href=""><img src={samsung} alt="" /></a>
                    <p>
                        <a href="">Oraimo Traveler 15 powe... <br /> &#x20A6;136,689 <br /> <span>&#x20A6;137,707</span></a>
                    </p>
               </div>
            </div>
        </section>
    )
}

export default Topseller