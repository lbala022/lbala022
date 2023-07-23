import payment from './payment.png';

import { useNavigate } from "react-router-dom";

const Payment = () => {

  let navigate = useNavigate(); 
  const back = () =>{ 
    let path = `/shipping`; 
    navigate(path);
  }
  const next = () =>{ 
    let path = `/summary`; 
    navigate(path);
  }

  return (
    <div>
      <br />
      <h1>PAYMENT</h1>
      <br />
      <img src={payment} className="linear" alt="payment" />
      <br />
      <div className="field">
        <form id="form">
            <h4>Payment</h4>
            <br />
            <label htmlFor="email">Name:</label><br />
            <input type="text" id="email" name="email"/><br />
            <label htmlFor="phone">Credit Card Number:</label><br />
            <input type="text" id="phone" name="phone"/>
            <div className="parent">
                <div className="child-left">
                    <label htmlFor="fname">Expiration:</label><br />
                    <input type="date" id="fname" name="fname"/>
                </div>
                <div className="child-right">
                    <label htmlFor="lname">CCV:</label><br />
                    <input type="text" id="lname" name="lname"/>
                </div>
            </div>
            <br />
            <div className="buttonHolder">
                <button type="button" className="nav-button" onClick={back}>BACK</button>
                <button type="button" className="nav-button" onClick={next}>NEXT</button>
            </div>
        </form>
        <br />
      </div>

      
    </div>
  );
}

export default Payment;