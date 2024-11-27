
import React from 'react';
// import './Community.css';
import {Link} from 'react-router-dom';
const Community= () => {
    return (
        <nav className="Community_container">
            <h2>Community</h2>
            <ul className='Community_list'>
                <li><Link to ="/Notice">Notice</Link></li>
                <li><Link to ="/Q&A">Q&A</Link></li>
            </ul>
         </nav>
    );
};

export default Community;