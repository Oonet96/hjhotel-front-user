
import React from 'react';
// import './Special.css';
import {Link} from "react-router-dom";
const Special= () => {
    return (
        <nav className="Special_container">
        <h2>Special</h2>
        <ul className='Special_list'>
            <li><Link to ="/Special">event</Link></li>
            <li><Link to ="/Special">Q&A</Link></li>
        </ul>
     </nav>
    );
};

export default Special;