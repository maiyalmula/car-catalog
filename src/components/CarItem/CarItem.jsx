import "./styles.css";

function CarItem({ car }) {
  return (
    <div key={car.id} className="item">
      <img src={car.image} alt="" />
      <div className="item-info">
        <h2>{car.name}</h2>
        <p>{car.price}</p>
      </div>
    </div>
  );
}
export default CarItem;
