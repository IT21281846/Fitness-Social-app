import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../images/image.jpg';
import "../styles/CreateWorkoutForm.css";
import Header from './Header';

const CreateWorkoutForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [exercises, setExercises] = useState([]);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseSets, setExerciseSets] = useState('');
  const [exerciseRepetitions, setExerciseRepetitions] = useState('');
  const history = useNavigate();

  const addExercise = () => {
    const newExercise = {
      name: exerciseName,
      sets: parseInt(exerciseSets),
      repetitions: parseInt(exerciseRepetitions)
    };
    setExercises([...exercises, newExercise]);
    setExerciseName('');
    setExerciseSets('');
    setExerciseRepetitions('');
  };

  const sendData = (e) => {
    e.preventDefault();
    const newWorkout = {
      title,
      description,
      exercises
    };
    axios.post("http://localhost:8080/api/workouts", newWorkout)
      .then(() => {
        alert("Successfully Added");
        history("/");
      })
      .catch((err) => {
        alert(err);
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
  zIndex: -1,
     }}>
      <h5>Create Workout Plan</h5>
      <form onSubmit={sendData}>
        <div className='field1'>
        <input type="text" className='title' style={{ width: '600px' }}  placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='textarea'>
          <textarea class="textarea" placeholder="Descrpition" id="discription" rows="5"onChange={(e)=>{setDescription(e.target.value);}}></textarea>
        </div>
        
        <div className='field2'>
          <h3>Add Exercise</h3>
          <input type="text" placeholder="Name" value={exerciseName} onChange={(e) => setExerciseName(e.target.value)} />
          <input type="text" placeholder="Sets" value={exerciseSets} onChange={(e) => setExerciseSets(e.target.value)} />
          <input type="text" placeholder="Repetitions" value={exerciseRepetitions} onChange={(e) => setExerciseRepetitions(e.target.value)} />
          <button type="button" onClick={addExercise}>Add Exercise</button>
        </div>
        
          <div  className='field3'>
          <table className="exercise-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Sets</th>
                <th>Repetitions</th>
              </tr>
            </thead>
            <tbody>
            {exercises.map((exercise, index) => (
              <tr key={index}>
                <td><p>{exercise.name}</p></td>
                <td><p>{exercise.sets}</p></td>
                <td><p>{exercise.repetitions}</p></td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        
        <button type="submit">Create</button>
      </form>
    </div>
    </div>
  );
};

export default CreateWorkoutForm;
