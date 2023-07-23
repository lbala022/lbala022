import { useNavigate } from "react-router-dom";


const Navbar = () => {
  let navigate = useNavigate(); 
  const goToOrder = () =>{ 
    let path = `/order`; 
    navigate(path);
  }

  return (
    <div className="navbar">
      <a href="/">HOME</a>
      <a href="/supplements">SUPPLEMENTS</a>
      <a href="/contact">CONTACT</a>
      <button onClick={goToOrder}>SHOPPING CART</button>
    </div>
  );
}
 
export default Navbar;