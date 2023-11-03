import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import ContactUs from './pages/contactUs';
import CarListing from './pages/carListing';
import SpecialOffer from './pages/specialOffer';
import Auction from './pages/auction';
import CustomerReview from './pages/customerReview';
import ErrorPage from './pages/error';
import Dashboard from './pages/admin/dashboard';
import AdminCarListing from './pages/admin/carListing';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from './redux/actions/user';
// import {BASE_URL} from "./utils/apiConstant"
function App() {
  const { isAuthenticated, loading, user, message, error } =
    useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(error){
      dispatch({type:'clearError'})
    }if(message){
      dispatch({type:'clearMessage'})
    }
  },[dispatch,error,message])
  useEffect(() => {
    console.log("check");
    dispatch(getProfile());
  }, [dispatch]);
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/car-lists" element={<CarListing />} />
        <Route path="/offers" element={<SpecialOffer />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/customer-review" element={<CustomerReview />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<ErrorPage />} />

        {/* admin routes  */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/car-lists" element={<AdminCarListing />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
