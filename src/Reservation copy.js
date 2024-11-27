
import React from 'react';
// import './Reservation.css';
import {Link} from 'react-router-dom';
const Reservation= () => {
    return (
        <nav className="Reservation_container">
            <h2>Reservation</h2>
            <ul className='Reservation_list'>
                <li><Link to ="/ReservationNow">Notice</Link></li>
                <li><Link to ="/ReservationShow">Q&A</Link></li>
            </ul>
        </nav>
    );
};

export default Reservation;