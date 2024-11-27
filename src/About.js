
import React from 'react';
import './About.css';
import {Link} from 'react-router-dom';
const About= () =>  {
    return (
        
      <nav className="About_container">
            <h2>About</h2>
            <ul className='About_list'>
                <li><Link to ="/Notice">Notice</Link></li>
                <li><Link to ="/Q&A">Q&A</Link></li>
            </ul>
         </nav>
    );
};

export default About;