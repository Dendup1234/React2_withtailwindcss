import { useState } from "react";
import Button from "./Button";

//Updater function to run more than one set function in the given code
// Good Practice to use the updater function
function Counter() {
  const [number, setNumber] = useState(0);
  function Increament() {
    //setNumber(number + 1);
    // Updater function
    setNumber((n) => n + 1);
    setNumber((n) => n + 1);
    setNumber((n) => n + 1);
  }

  function Decreament() {
    //setNumber(number - 1);
    setNumber((n) => n - 1);
    setNumber((n) => n - 1);
    setNumber((n) => n - 1);
  }
  function Reset() {
    setNumber(0);
  }
  return (
    <>
      <div className="flex mb-4 justify-center">
        <h1 className="text-4xl">Count: {number}</h1>
      </div>
      <div className="flex mb-4 justify-center">
        <button
          onClick={Decreament}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Decreament
        </button>

        <button
          onClick={Reset}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Reset
        </button>

        <button
          onClick={Increament}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Increament
        </button>
      </div>
    </>
  );
}
export default Counter;
