import React from "react";

function Player() {
  return (
    <div className="flex flex-row justify-center align-middle">
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="Search for a song"
          className="h-10 w-auto border-x border-y hover:scale-110 transition duration-300 ease-in-out mr-3"
        ></input>
        <button className="bg-blue-900 text-white p-1 rounded-lg  hover:scale-110 transition duration-300 ease-in-out ">
          Search
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Player;
