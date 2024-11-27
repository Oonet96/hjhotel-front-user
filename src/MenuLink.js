import React from 'react';
import './MenuLink.css'; 
import {Link} from 'react-router-dom'


const MenuLink = () => {
    return (
      <nav className="menu_container">
        <ul className="menu_list">
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Roomview">RoomView</Link></li>
          <li><Link to="/Special">Special</Link></li>
          <li><Link to="/Reservation">Reservation</Link></li>
          <li><Link to="/Community">Community</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default MenuLink;