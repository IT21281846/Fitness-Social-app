import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import "../styles/UpdateWorkout.css";
import backgroundImage from '../images/image.jpg';
import Header from './Header';

const WorkoutUpdate = () => {
  const [workoutPlan, setWorkoutPlan] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [exercises, setExercises] = useState([]);

  const id = useParams().id;

  const history = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/workouts/${id}`)
        .then(response => {
          setWorkoutPlan(response.data);
          setTitle(response.data.title);
          setDescription(response.data.description);
          setExercises(response.data.exercises);
        })
        .catch(error => {
          console.error('Error fetching workout plan:', error);
        });
    }
  }, [id]);

  const handleUpdate = () => {
    const updatedWorkoutPlan = {
      id: workoutPlan.id,
      title,
      description,
      exercises
    };

    axios.put(`http://localhost:8080/api/workouts/update/${id}`, updatedWorkoutPlan)
      .then(response => {
        console.log('Workout plan updated successfully:', response.data);
        alert("Workout plan updated successfully!");
        history("/Workouts");
      })
      .catch(error => {
        console.error('Error updating workout plan:', error);
      });
  };

  return (
    <div>
      <div>
      
      </div>
    <div className="app"  style={{
      backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
     }}>
      <h7>Update Workout Plan</h7>
      <div className='data'>
        
      
      
      <label>Title:</label>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} style={{ width: '300px' }} />
      <label>Description:</label>
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} style={{ width: '300px' }} />
      <h3>Exercises:</h3>
      {exercises.map((exercise, index) => (
        <div key={index}>
          <p><strong>Name:</strong> {exercise.name}</p>
          <p><strong>Sets:</strong> {exercise.sets}</p>
          <p><strong>Repetitions:</strong> {exercise.repetitions}</p>
        </div>
      ))}
      <button onClick={handleUpdate}>Update Workout Plan</button>
      </div>
    </div>
    </div>
  );
};

export default WorkoutUpdate;
