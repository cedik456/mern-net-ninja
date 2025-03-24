import axios from "axios";
import React, { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    e.preventDefault();
    try {
      const workout = { title, load, reps };

      const response = await axios.get("http://localhost:4000/api/workouts");

      //   if (!response.ok) {
      //     setError(json.error)
      //   }
      console.log("Workout Added");
      setTitle("");
      setLoad("");
      setReps("");
    } catch (error) {
      console.log(error);
      console.log("No Workout Added");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mt-16 shadow-lg w-[400px] h-[500px] p-6 rounded-sm"
    >
      <h3 className="text-center mb-8 text-xl">Add a New Workout</h3>
      <div className="flex flex-col gap-4">
        <input
          placeholder="Exercise Title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="p-2 border border-black rounded-sm"
        />

        <input
          placeholder="Load in kg:"
          type="text"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
          className="p-2 border border-black rounded-sm"
        />

        <input
          placeholder="Reps:"
          type="text"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          className="p-2  border border-black rounded-sm"
        />
        <button className="p-3 bg-black text-white rounded-md font-semibold cursor-pointer hover:opacity-80 active:opacity-60">
          Add workout
        </button>
        {error && (
          <div className="text-red-500 text-base text-center">{error}</div>
        )}
      </div>
    </form>
  );
};

export default WorkoutForm;
