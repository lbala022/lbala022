import wheyProtein from './whey-protein.jpg';
import creatine from './creatine.jpg';
import greekWarrior from './greek-warrior.jpg';

const Home = () => {

  return (
    <div className="home">
      
      <h1>SPARTACUS FITNESS</h1>
      <br />
      <div className="parent-container primal-protein">
        <div className="left-container">
          <h6 className="vertical-center">#1 RECOMMENDED PROTEIN SUPPLEMENT BY PROFESSIONALS</h6>
          <h3 className="vertical-center">PRIMAL PROTEIN</h3>
          <h5 className="vertical-center">AWAKEN YOUR HIDDEN POTENTIAL NOW</h5>
          <button className="buy-now">BUY NOW</button>
        </div>
        <div className="right-container">
          <img src={wheyProtein} height="180" weight="130" alt="primal-protein" />
        </div>
      </div>
      <br />
      <div className="parent-container greek-warrior">
        <div className="left-container">
          <h6 className="vertical-center">PROVEN THROUGH HUNDREDS OF TESTIMONIALS</h6>
          <h3 className="vertical-center">GREEK WARRIOR PROGRAM</h3>
          <h5 className="vertical-center">TRANSFORM YOUR PHYSIQUE</h5>
          <button className="buy-now">BUY NOW</button>
        </div>
        <div className="right-container">
          <img src={greekWarrior} height="180" weight="130" alt="primal-protein" />
        </div>
      </div>
      <br />
      <div className="parent-container creatine-power">
        <div className="left-container">
          <h6 className="vertical-center">GUARANTEED TO SEE BETTER RESULTS</h6>
          <h3 className="vertical-center">CREATINE POWER</h3>
          <h5 className="vertical-center">TAKE A STEP FORWARD</h5>
          <button className="buy-now">BUY NOW</button>
        </div>
        <div className="right-container">
          <img src={creatine} height="180" weight="130" alt="primal-protein" />
        </div>
      </div>
    
    </div>
  );

}

export default Home;