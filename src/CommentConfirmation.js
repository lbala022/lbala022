import { useNavigate } from "react-router-dom";

const CommentConfirmation = () => {

  let navigate = useNavigate(); 
  const returnHome = () =>{
    let path = `/`; 
    navigate(path);
  }

  return (
    <div>
      <br />
      <h1>COMMENT DELIVERED</h1>
      <br />
      <div className="confirmation">
        <p className="message">Your comment was sent. Please await our reply at bob.marley@mail.com.</p>
        <br />
        <div className="buttonHolder">
          <button type="button" className="nav-button" onClick={returnHome}>RETURN HOME</button>
        </div>
      </div>
    </div>
  );

}

export default CommentConfirmation;