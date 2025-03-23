import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="container mx-auto py-8">
      <h1 className="text-xl">Workouts</h1>
      <ul className="text-base">
        {workouts &&
          workouts.map((workout) => <li key={workout._id}>{workout.title}</li>)}
      </ul>
    </div>
  );
};

export default Home;
