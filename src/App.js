import Navbar from './Navbar.js';
import Home from './Home.js';
import Supplements from './Supplements.js';
import Contact from './Contact.js';
import CommentConfirmation from './CommentConfirmation.js';
import Order from './Order.js';
import Shipping from './Shipping.js';
import Payment from './Payment.js';
import Summary from './Summary.js';
import Confirmation from './Confirmation.js';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/supplements" element={<Supplements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/comment-confirmation" element={<CommentConfirmation />} />
            <Route path="/order" element={<Order />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
