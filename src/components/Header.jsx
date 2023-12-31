import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import CallIcon from "../assets/hotline-icon.svg";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineTags } from "react-icons/ai";
import { LiaUserCircle } from "react-icons/lia";
import { CgMenuRightAlt } from "react-icons/cg";
import MenuDrawer from "./menuDrawer";
import FormWrapper from "./forms/formWrapper";
import Modal from "./modal";
import Button from "./forms/button";
import { logInForm } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/actions/user";
import Loader from "../assets/loader/loader";

const Header = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const [inputObj, setInputObj] = useState({});

  const navbarMenu = [
    { name: "Home", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "CAR LISTING", link: "/car-lists" },
    { name: "SPACIAL OFFER", link: "/offers" },
    { name: "AUCTION", link: "/auction" },
    { name: "CUSTOMER REVIEW", link: "/customer-review" },
    { name: "CONTACT US", link: "/contact-us" },
  ];
  const { pathname } = useLocation();
  const modalHandler = () => {
    setModal(!modal);
  };
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(inputObj.email, inputObj.password));
  };
  useEffect(() => {
    if (isAuthenticated) {
      setModal(false);
    }
  }, [dispatch, isAuthenticated]);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
        <img src={Logo} alt="logo" />
        <div className="hidden lg:!block relative w-2/5 h-12">
          <input
            type="search"
            className=" p-2.5 w-full h-full text-sm rounded-lg outline-none border border-gray-300 dark:placeholder-gray-400"
            placeholder="Search for city or address"
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 h-full  px-4 text-sm font-medium text-white-0 bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
        <div className="hidden lg:!flex items-center gap-4 text-sm font-medium">
          <div className="flex gap-1 items-center">
            <AiOutlineTags className="h-6 w-6" />
            <span>SELL WITH US</span>
          </div>
          {isAuthenticated ? (
            <Link to="/admin">Dashboard</Link>
          ) : (
            <div
              className="flex gap-1 items-center cursor-pointer"
              onClick={modalHandler}
            >
              <LiaUserCircle className="h-6 w-6" /> <span>LOG IN</span>
            </div>
          )}
        </div>
        <div className="lg:!hidden " onClick={() => setOpen(true)}>
          <CgMenuRightAlt className="h-7 w-7 cursor-pointer" />
        </div>
      </div>
      <div className="hidden lg:!flex justify-between px-3 py-2 border-b border-gray-200">
        <ul className="flex items-center gap-4">
          {navbarMenu.map((ele, i) => (
            <li
              key={i}
              className={`h-full relative flex items-center font-semibold tracking-wider text-sm px-4 ${
                pathname === ele?.link && "custom-underline text-blue-500"
              }`}
            >
              <Link to={ele.link ? ele.link : "#"}>{ele.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <img src={CallIcon} alt="" />
          <div className="">
            <header>To More Inquiry</header>
            <header>
              <a href="tel:+917985036925">+91 7985036925</a>
            </header>
          </div>
        </div>
      </div>
      {modal && (
        <Modal setModal={modalHandler}>
          <div className="p-4">
            <div className="text-center p-4 mb-4">
              <h1 className="text-2xl font-semibold">Log In</h1>
              <p>
                {" "}
                Don't have an account?{" "}
                <span className="font-bold cursor-pointer">Sign Up</span>
              </p>
            </div>
            <form action="" onSubmit={submitHandler}>
              <div>
                <FormWrapper formObj={logInForm} setInputObj={setInputObj} />
              </div>
              <div className="mt-5">
                <Button type="submit" btnClass="primary" name="Log In" />
              </div>
            </form>
          </div>
        </Modal>
      )}
      <MenuDrawer setOpen={setOpen} open={open} />
    </>
  );
};

export default Header;
