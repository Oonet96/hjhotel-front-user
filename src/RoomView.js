
import React from 'react';
// import './RoomView.css';
import {Link }  from "react-router-dom";

const RoomView= () => {
    return (
        <nav className="RoomView_container">
            <h2>RoomView</h2>
            <ul className='RoomViewt_list'>
                <li><Link to ="/Notice">Notice</Link></li>
                <li><Link to ="/Q&A">Q&A</Link></li>
            </ul>
         </nav>
    );
};

export default RoomView;