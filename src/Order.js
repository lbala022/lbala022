import { Cards } from './cards';
import CartItem from './CartItem.js';

import { useNavigate } from "react-router-dom";


const Order = () => {
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/shipping`; 
    navigate(path);
  }

  return (
    <div>
      <br />
      <h1>SHOPPING CART</h1>
      <br />
      <div className="buttonHolder2">
        <button type="button" className="nav-button" onClick={routeChange}>PROCEED TO SHIPPING</button>
      </div>
      <br />
      <div>
        <h3 className="order-title">Order Summary:</h3>
        <br />
        <div>
          {Cards.filter((card) => 
            card
          ).map((card) => (
            <div key={card.id}>
              {
                <div className="order-item">
                  <CartItem
                    name={card.product_name}
                    category={card.category}
                    description={card.description}
                    price={card.priceString}
                    image={card.image}
                  /><br />
                </div>
              }
            </div>
          ))}
        </div>
        <br />
      </div>
      
    </div>
  );
}

export default Order;