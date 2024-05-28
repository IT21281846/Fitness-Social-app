import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import "../styles/Home.css";
import backgroundImage from '../images/image.jpg';
import Header from './Header';

function Home() {

  const [workoutPlans, setWorkoutPlans] = useState([]);

  useEffect(() => {
    fetchData();
  }, );

  const fetchData = () => {
    axios.get('http://localhost:8080/api/workouts')
      .then(response => {
        setWorkoutPlans(response.data);
      })
      .catch(error => {
        console.error('Error fetching workout plans:', error);
      });
  };



  return (
    <div>
      <div>
        <Header/>
      </div>
    <div className="app"  style={{
     backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Ensures the background stays behind other content
    }}>
    <div>

  {workoutPlans.map(workoutPlan => (
    <div className="card" key={workoutPlan.id}>
      <h2 style={{ fontSize: '40px',fontWeight: 'bold' }}>{workoutPlan.title}</h2>
      <textarea className='textarea' style={{ border: 'none' }}>{workoutPlan.description}</textarea>
      <div>
        {workoutPlan.exercises.map(exercise => (
          <div key={exercise.name}>
            <span style={{ fontSize: '24px' }}>Name: {exercise.name}</span><br />
            <span style={{ fontSize: '20px' }}>Sets: {exercise.sets}</span><br />
            <span style={{ fontSize: '20px' }}>Repetitions: {exercise.repetitions}</span><br />
            <br />
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

    </div>
    </div>
  );
}

export default Home;
