import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/WorkoutList.css";
import backgroundImage from '../images/image.jpg';
import Header from './Header';

function WorkoutList() {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    fetchData();
  }, [deleted]);

  const fetchData = () => {
    axios.get('http://localhost:8080/api/workouts')
      .then(response => {
        setWorkoutPlans(response.data);
      })
      .catch(error => {
        console.error('Error fetching workout plans:', error);
      });
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this workout plan?");
    if (isConfirmed) {
      axios.delete(`http://localhost:8080/api/workouts/${id}`)
        .then(response => {
          console.log('Workout plan deleted successfully.');
          setDeleted(true); 
        })
        .catch(error => {
          console.error('Error deleting workout plan:', error);
        });
    }
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
      zIndex: -1,
     }}>
    <div>
      <h5>Workout Plans</h5>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Exercises</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workoutPlans.map(workoutPlan => (
            <tr key={workoutPlan.id}>
              <td>{workoutPlan.title}</td>
              <td>{workoutPlan.description}</td>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Sets</th>
                      <th>Repetitions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workoutPlan.exercises.map(exercise => (
                      <tr key={exercise.name}>
                        <td>{exercise.name}</td>
                        <td>{exercise.sets}</td>
                        <td>{exercise.repetitions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
              <td>
              <Link to={`/update/${workoutPlan.id}`} className="update-button">Update</Link>
                <button className='deletebutton' onClick={() => handleDelete(workoutPlan.id)}>Delete</button>
                

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
}

export default WorkoutList;
