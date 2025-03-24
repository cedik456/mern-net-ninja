import React, { useEffect, useState } from "react";
import axios from "axios";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkout] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/workouts");
        setWorkout(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="container mx-auto py-8 flex gap-16 justify-between">
      <div className="h-40 w-full">
        <h1 className="text-xl mb-4">List of Exercises</h1>
        <ul className="text-base flex flex-col">
          {/* {workouts &&
            workouts.map((workout) => (
              <li key={workout._id}>{workout.title}</li>
            ))} */}
          <li className="p-6 shadow-md rounded-md ">Situps</li>
          {/* <li className="p-6 shadow-md rounded-md ">Lateral Raises</li>
          <li className="p-6 shadow-md rounded-md ">Bench Press</li> */}
        </ul>
      </div>
      <div className="flex justify-center">
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
