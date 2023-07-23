import confirmation from './confirmation.png';

import { useNavigate } from "react-router-dom";

const Confirmation = () => {

  let navigate = useNavigate(); 
  const back = () =>{ 
    let path = `/summary`; 
    navigate(path);
  }
  const returnHome = () =>{
    let path = `/`; 
    navigate(path);
  }

  return (
    <div>
      <br />
      <h1>CONFIRMATION</h1>
      <br />
      <img src={confirmation} className="linear" alt="confirmation" />
      <br />
      <div className="confirmation">
        <p className="message">Your order has been shipped. Please see confirmation with shipment tracking information at bob.marley@mail.com.</p>
        <br />
        <div className="buttonHolder">
          <button type="button" className="nav-button" onClick={back}>BACK</button>
          <button type="button" className="nav-button" onClick={returnHome}>RETURN HOME</button>
        </div>
      </div>

    </div>
  );
}

export default Confirmation;