import { useNavigate } from "react-router-dom";

const Contact = () => {

  let navigate = useNavigate(); 
  const submit = () =>{ 
    let path = `/comment-confirmation`; 
    navigate(path);
  }

  return (
    <div>
      <br />
      <h1>CONTACT</h1>
      <br />
      <h4 className="contact-text">Please write your questions or comments below and we will get back to you as soon as possible.</h4>
      <br />
      <div className="field">
        <form id="form">
            <label htmlFor="email">Name:</label><br />
            <input type="text" id="email" name="email"/><br />
            <label htmlFor="phone">Email:</label><br />
            <input type="text" id="phone" name="phone"/>
            <label htmlFor="phone">Comment:</label><br />
            <textarea rows="10" cols="111" name="comment"></textarea>
            <br /><br />
            <div className="buttonHolder">
                <button type="button" className="nav-button" onClick={submit}>SUBMIT</button>
            </div>
        </form>
        <br />
      </div>
    </div>
  );

}

export default Contact;