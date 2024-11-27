import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id="Header">
      <div className="header_container">
      <h1 className="header_title">
        <Link to="/">slrklhiHOTEL</Link></h1>
      <div className="header_menu_navbar">
        <ul className="nav_item">
          About
          <li className="dropdown">
            <Link to="/About">About</Link>
          </li>
        </ul>
        <ul className="nav_item">
          Roomview
          <li className="dropdown">
          <Link to="/Roomview">Lesalonacces</Link>
          </li>
          <li className="dropdown">
          <Link to="/Roomview">Standard</Link>
          </li>
          <li className="dropdown">
          <Link to="/Roomview">ClubFlour
          </Link></li>
          <li className="dropdown">
          <Link to="/Roomview">Sweet</Link>
          </li>
        </ul>
        <ul className="nav_item">
          Special
          <li className="dropdown">
          <Link to="/Special">Promotion</Link>
          </li>
          <li className="dropdown">
          <Link to="/Special">Event</Link>
          </li>
          <li className="dropdown">
          <Link to="/Special">BlackFirst</Link>
          </li>
        </ul>
        <ul className="nav_item">
          Community
          <li className="dropdown">
          <Link to="/Community">Notice</Link>
          </li>
          <li className="dropdown">
          <Link to="/Community">Q&A</Link>
          </li>
        </ul>
      </div>
      <div className="header_item_menu">
        {/* Menu 버튼 클릭 시 MenuLink로 이동 */}
        <Link to="/menu">Menu</Link>
      </div>
    </div>
    </div>
  );
};

export default Header;