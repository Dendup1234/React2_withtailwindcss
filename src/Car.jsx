import { useState } from "react";

function Car() {
  const [car, setCar] = useState({ name: "Car1", model: "Model1", year: 2024 });

  const onChangeName = (e) =>
    setCar((prev) => ({ ...prev, name: e.target.value }));

  const onChangeModel = (e) =>
    setCar((prev) => ({ ...prev, model: e.target.value }));

  const onChangeYear = (e) =>
    setCar((prev) => ({ ...prev, year: Number(e.target.value) })); // cast to number

  return (
    <div>
      <p>
        Car is {car.name}, {car.model}, {car.year}
      </p>

      <input type="text" value={car.name} onChange={onChangeName} />
      <br />

      <input type="text" value={car.model} onChange={onChangeModel} />
      <br />

      <input type="number" value={car.year} onChange={onChangeYear} />
      <br />
    </div>
  );
}

export default Car;
