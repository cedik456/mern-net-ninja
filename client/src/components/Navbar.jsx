import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="shadow-md">
      <div className="container mx-auto py-8">
        <div className="container flex justify-between">
          <Link to="/">
            <h1 className="text-xl">Workout Buddy</h1>
          </Link>
          <Link to="about">
            <h1 className="text-base">About</h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
