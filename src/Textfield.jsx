import React, { useState } from "react";
function Textfield() {
  const [name, setName] = useState("Guest");

  function onChangeName(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <input value={name} onChange={onChangeName} />
      <p>Name:{name}</p>
    </div>
  );
}
export default Textfield;
