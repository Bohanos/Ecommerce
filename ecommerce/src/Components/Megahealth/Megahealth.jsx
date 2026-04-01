import React from "react";
import "./Megahealth.css"

const Megahealth = () =>{
    return(
        <div className="mega-health">
            <section className="mega-columns">
                <h3>MAKE UP</h3>
                <ul>
                    <li><a href="">Concealers & Color Correctors</a></li>
                    <li><a href="">Foundation</a></li>
                    <li><a href="">Powder</a></li>
                    <li><a href="">Lipstick</a></li>
                    <li><a href="">Eyeliner & Kajal</a></li>
                    <li><a href="">Mascara</a></li>
                </ul>
            </section>
            <section className="mega-columns">
                <h3>FRAGRANCES</h3>
                <ul>
                    <li><a href="">WOMEN'S</a></li>
                    <li><a href="">MEN'S</a></li>
                </ul>
            </section>
             <section className="mega-columns">
                <h3>HEALTH CARE</h3>
                <ul>
                    <li><a href="">First Aid</a></li>
                    <li><a href="">Medical Supplies & Equipment</a></li>
                    <li><a href="">Alternative Medicine</a></li>
                    <li><a href="">Feminine Care</a></li>
                    <li><a href=""></a></li>
                </ul>
            </section>
        </div>
    )
}

export default Megahealth;