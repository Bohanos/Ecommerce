import React from 'react'
import './Nav.css'
import { FaArrowDown, FaCartArrowDown, FaQuestionCircle, FaRegUser, FaStar} from 'react-icons/fa'


const Nav = () => {

  return (
    <div className='nav-bar'>
      <div className='logo'>
        <div> <a href=""><p>JUMIA</p></a></div>
        <div className="jumia-star3"><a href=""><FaStar/></a></div>
      </div>
      <div className='search'>
        <input type="text" placeholder='Search products, brands, and categories'/>
        <a href="">Search</a>
      </div>    
      <div className='nav-links'>
        <a  href="" style={{color:"black"}}> <FaRegUser style={{color:"black"}}/>Account <FaArrowDown/></a>
        <a href="" style={{color:"black"}}> <FaQuestionCircle style={{color:"black"}}/>Help <FaArrowDown/></a>
        <a href="" style={{color:"black"}}> <FaCartArrowDown style={{color:"black"}}/>Cart</a>
      </div>
    </div>
  )
}

export default Nav
