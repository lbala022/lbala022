import summary from './summary.png';

import { useNavigate } from "react-router-dom";

const Summary = () => {

  let navigate = useNavigate(); 
  const back = () =>{ 
    let path = `/payment`; 
    navigate(path);
  }
  const placeOrder = () =>{
    let path = `/confirmation`; 
    navigate(path);
  }

  return (
    <div>
      <br />
      <h1>SUMMARY</h1>
      <br />
      <img src={summary} className="linear" alt="summary" />
      <br />
      <div className="summary-container">
        <div className="summary-child">
          <h3>Contact</h3>
          <div className="summary-container">
            <div className="summary-child">
              <p>First name:</p>
              <p>Last name:</p>
              <p>Email:</p>
              <p>Phone Number:</p>
            </div>
            <div className="summary-child">
              <p>Bob</p>
              <p>Marley</p>
              <p>bob.marley@mail.com</p>
              <p>6130001111</p>
            </div>
          </div>
        </div>
        <div className="summary-child">
          <h3>Delivery</h3>
          <div className="summary-container">
            <div className="summary-child">
              <p>Country:</p>
              <p>Address:</p>
              <p>City:</p>
              <p>Province:</p>
              <p>Postal code:</p>
            </div>
            <div className="summary-child">
              <p>Canada</p>
              <p>123 Main Street</p>
              <p>Ottawa</p>
              <p>ON</p>
              <p>K1G717</p>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonHolder">
        <button type="button" className="nav-button" onClick={back}>BACK</button>
        <button type="button" className="nav-button" onClick={placeOrder}>PLACE ORDER</button>
      </div>
    </div>
  );
}

export default Summary;