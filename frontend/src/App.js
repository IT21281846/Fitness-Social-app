import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import CreateWorkoutForm from './components/CreateWorkoutForm';
import Home from './components/Home'
import WorkoutList from './components/WorkoutList';
import UpdateWorkout from './components/UpdateWorkout';

const App = () => {
  return (
    <div>
    <Router>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/create" element={<CreateWorkoutForm />}></Route>
    <Route path="/Workouts" element={<WorkoutList />}></Route>
    <Route path="/update/:id" element={<UpdateWorkout />}></Route>

    </Routes> 
     
    </Router>
    </div>
  );
};

export default App;
<Route path="/create" component={CreateWorkoutForm} />