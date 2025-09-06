import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");
  function onChangeColor(e) {
    setColor(e.target.value);
  }
  return (
    <>
      <div className="flex justify-center my-10">
        <h1 className="text-8xl font-bold">Color Picker</h1>
      </div>
      <div className="flex justify-center my-10">
        <div
          className="w-1/2 border-2 h-60"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <div className="flex mb-4 p-7 justify-center">
        <label>Color:{color}</label>
        <input type="color" value={color} onChange={onChangeColor}></input>
      </div>
    </>
  );
}

export default ColorPicker;
