// src/Services.js

import React from 'react';
import './Services.css';
import ParkingCard from './ParkingCard';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Parking Management System</h1>
      <ul>
        <li>Real-time parking slot availability</li>
        <li>Automated ticket generation and tracking</li>
        <li>Customizable parking management solutions</li>
        <li>24/7 customer support</li>
        <ParkingCard/>
      </ul>
    </div>
  );
};

export default Services;
