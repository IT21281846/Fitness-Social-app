import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
  return (
    <div className="header">
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/" className="button">Home</Link>
      <Link to="/create" className="button">Create Workout</Link>
        <Link to="/workouts" className="button">Workout List</Link>
      <h1 style={{ marginLeft: '10px' }}>Welcome to Workout Planner</h1>
</div>
      <h6>Plan and track workouts with ease!</h6>
      
    
    </div>
  );
};

export default Header;
