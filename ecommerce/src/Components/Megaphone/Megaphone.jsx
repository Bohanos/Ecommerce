import React from "react";
import "./Megaphone.css"

const Megaphone = () =>{
    return(
        <div className="mega-phone">
            <section className="mega-columns">
                <h3>MOBILE PHONES</h3>
                <ul>
                    <li><a href="">Smartphones</a></li>
                    <li><a href="">Android Phones</a></li>
                    <li><a href="">iPhones</a></li>
                    <li><a href="">Basic Phones</a></li>
                    <li><a href="">Refurbished Phones</a></li>
                    <li><a href="">Rugged Phones</a></li>
                </ul>
            </section>
            <section className="mega-columns">
                <h3>MOBILE ACCESORIES</h3>
                <ul>
                    <li><a href="">Accessory Kits</a></li>
                    <li><a href="">Adapters</a></li>
                    <li><a href="">Batteries</a></li>
                    <li><a href="">Battery Chargers</a></li>
                </ul>
            </section>
             <section className="mega-columns">
                <h3>TOP SMARTPHONES</h3>
                <ul>
                    <li><a href="">iPhone 15 & 15 Pro Max</a></li>
                    <li><a href="">Samsung Galaxy S24 & S24 Ultra</a></li>
                    <li><a href="">Tecno Spark 20 & 20 Pro</a></li>
                    <li><a href="">Itel S23 & S23 Plus</a></li>
                </ul>
            </section>
        </div>
    )
}

export default Megaphone;