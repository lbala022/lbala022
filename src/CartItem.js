
const CartItem = (props) => {

  return (
    <div className="order-container">
      <div className="order-child">
        <img src={props.image} height="150" weight="100" alt="confirmation" />
      </div>
      <div className="order-child">
        <p>{props.name}</p>
        <p>{props.category}</p>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );

}

export default CartItem;