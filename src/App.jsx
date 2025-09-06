import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Flex from "./Flex";
import Usergreeting from "./Usergreeting";
import List from "./List";
import Button from "./Button";
import Component from "./Component";
import Textfield from "./Textfield";
import ColorPicker from "./ColorPicker";
function App() {
  const fruits = [
    { id: 1, name: "Apple", cal: 23 },
    { id: 2, name: "Banana", cal: 123 },
    { id: 3, name: "WaterMelon", cal: 56 },
    { id: 4, name: "Orange", cal: 145 },
    { id: 5, name: "Apple", cal: 70 },
    { id: 6, name: "Banana", cal: 24 },
  ];
  const vegetable = [
    { id: 1, name: "Potatoes", cal: 93 },
    { id: 2, name: "Brocali", cal: 123 },
    { id: 3, name: "WaterMelon", cal: 56 },
    { id: 4, name: "Orange", cal: 145 },
    { id: 5, name: "Apple", cal: 70 },
    { id: 6, name: "Banana", cal: 24 },
  ];
  return <ColorPicker></ColorPicker>;
}

export default App;
