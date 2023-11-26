import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contactUs";
import CarListing from "./pages/carListing";
import SpecialOffer from "./pages/specialOffer";
import Auction from "./pages/auction";
import CustomerReview from "./pages/customerReview";
import ErrorPage from "./pages/error";
import Dashboard from "./pages/admin/dashboard";
import AdminCarListing from "./pages/admin/carListing";
import AdminOfferListing from "./pages/admin/offerListing";
import AdminAuctionListing from "./pages/admin/auctionListing";
import BrandListing from "./pages/admin/brandListing";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "./redux/actions/user";
import { ProtectedRoute } from "protected-route-react";
import CarInfo from "./pages/carInfo";
import AdminReviewListing from "./pages/admin/reviewListing";
import AdminInquiry from "./pages/admin/inquiry";
// import {BASE_URL} from "./utils/apiConstant"
function App() {
  const { isAuthenticated, loading, user, message, error } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      dispatch({ type: "clearError" });
    }
    if (message) {
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/car-lists" element={<CarListing />} />
        <Route path="/car-lists/:id" element={<CarInfo />} />
        <Route path="/offers" element={<SpecialOffer />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/customer-review" element={<CustomerReview />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<ErrorPage />} />
        {/* admin routes  */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />{" "}
        <Route
          path="/admin/brand"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
              <BrandListing user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/car-list"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
              <AdminCarListing user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/offer-list"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
              <AdminOfferListing user={user} />
            </ProtectedRoute>
          }
        />{" "}
        <Route
          path="/admin/auction-list"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
              <AdminAuctionListing user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/review-list"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
              <AdminReviewListing user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/inquiry"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
              <AdminInquiry user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
