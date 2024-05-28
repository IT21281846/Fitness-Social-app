import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/workouts';

const WorkoutService = {
  getAllWorkoutPlans: async () => {
    return await axios.get(BASE_URL);
  },
  createWorkoutPlan: async (workoutData) => {
    return await axios.post(BASE_URL, workoutData);
  },
  updateWorkoutPlan: async (id, updatedWorkoutData) => {
    return await axios.put(`${BASE_URL}/${id}`, updatedWorkoutData);
  },
  deleteWorkoutPlan: async (id) => {
    return await axios.delete(`${BASE_URL}/${id}`);
  }
};

export default WorkoutService;
