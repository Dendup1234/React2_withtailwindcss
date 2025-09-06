// Use of the useState one of the react hook rather than writing the class we write the
// import name
//useState()
import React, { useState } from "react";

function Component() {
  //Use state setup
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  // Scripts
  const updateName = () => {
    setName("Dendup");
  };
  const hideName = (e) => {
    e.target.style.display = "none";
  };
  const increament = () => {
    setAge(age + 1);
  };
  const togglestatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name:{name}</p>
      <button
        onClick={updateName}
        type="button"
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Setname
      </button>

      <p>Age:{age}</p>
      <button
        onClick={increament}
        type="button"
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Increament
      </button>

      <p>Employee:{isEmployed ? "yes" : "no"}</p>
      <button
        onClick={togglestatus}
        type="button"
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        toggle
      </button>
    </div>
  );
}

export default Component;
