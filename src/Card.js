
const Card = (props) => {

  return (
    <div className="card">
      <img src={props.image} height="150" weight="100" alt="card" />
      <h2>{props.name}</h2>
      <p className="product-line">{props.category}</p>
      <p className="product-line">{props.description}</p>
      <p className="product-line">{props.price}</p>
      <button className="buyButton">BUY NOW</button>
    </div>
  );

}

export default Card;