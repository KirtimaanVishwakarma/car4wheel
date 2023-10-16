import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import About from './pages/about'
import ContactUs from './pages/contactUs'
import CarListing from './pages/carListing'
import SpecialOffer from './pages/specialOffer';
import Auction from './pages/auction';
import CustomerReview from './pages/customerReview';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/car-lists" element={<CarListing />} />
        <Route path="/offers" element={<SpecialOffer />}/>
        <Route path="/auction" element={<Auction />}/>
        <Route path="/customer-review" element={<CustomerReview/>}/>
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
      <Footer />
    </BrowserRouter>  
    
  );
}

export default App;
