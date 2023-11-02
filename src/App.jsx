import CarItem from "./components/CarItem";
import { cars } from "./data/cars.data";
import "./components/styles.css";

function App() {
  return (
    <div className="app">
      <h1>Cars Catalog</h1>
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  );
}

export default App;
