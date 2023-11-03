import { useState } from "react";
import "./styles.css";

const CarForm = ({ setCars }) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();

  const createCar = (e) => {
    e.preventDefault();
    setCars((prev) => [...prev, { id: prev.length + 1, name, price, image }]);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <br />
      <input
        type="text"
        placeholder="Image"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <br />
      <button onClick={(e) => createCar(e)}>Create</button>
    </form>
  );
};

export default CarForm;
