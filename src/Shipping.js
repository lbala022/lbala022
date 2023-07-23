import shipping from './shipping.png';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Shipping = () => {

  let navigate = useNavigate(); 
  const back = () =>{ 
    let path = `/order`; 
    navigate(path);
  }
  const next = () =>{ 
    let path = `/payment`; 
    navigate(path);
  }

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const save = () =>{ 
    const data = {firstName, lastName, email, phoneNumber};
    console.log(data);
  }


  return (
    <div>
      <br />
      <h1>SHIPPING</h1>
      <br />
      <img src={shipping} className="linear" alt="shipping" />
      <br />
      <div className="field">
        <form id="form">
            <h4>Contact</h4>
            <br />
            <div className="parent">
                <div className="child-left">
                    <label htmlFor="fname">First Name:</label><br />
                    <input type="text" id="fname" name="fname"/>
                </div>
                <div className="child-right">
                    <label htmlFor="lname">Last Name:</label><br />
                    <input type="text" id="lname" name="lname"/>
                </div>
            </div>
            <label>Email:</label><br />
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br />
            <label>Phone Number:</label><br />
            <input
              type="text"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br /><br />
            <h4>Delivery</h4>
            <br />
            <label htmlFor="email">Country:</label><br />
            <input type="text" id="email" name="email"/><br />
            <label htmlFor="phone">Address:</label><br />
            <input type="text" id="phone" name="phone"/><br />
            <label htmlFor="phone">Apartment, suit, etc. (optional):</label><br />
            <input type="text" id="phone" name="phone"/>
            <div className="parent">
                <div className="child-left">
                    <label htmlFor="fname">City:</label><br />
                    <input type="text" id="fname" name="fname"/>
                </div>
                <div className="child-right">
                    <label htmlFor="lname">Province:</label><br />
                    <input type="text" id="lname" name="lname"/>
                </div>
                <div className="child-three">
                    <label htmlFor="lname">Postal code:</label><br />
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

export default Shipping;