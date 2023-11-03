import CarItem from "./components/CarItem/CarItem";
import CarForm from "./components/CarForm/CarForm";
import { cars as carsData } from "./data/cars.data";
import "./components/CarItem/styles.css";
import { useState } from "react";

function App() {
  const [cars, setCars] = useState(carsData);

  return (
    <div className="app">
      <h1>Cars Catalog</h1>
      <CarForm setCars={setCars} />
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  );
}

export default App;
