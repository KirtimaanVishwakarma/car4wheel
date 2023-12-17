import BreadCrumb from "../components/breadcrumb";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

const HeroSection = ({ label, heroText, content }) => {
  const location = useLocation();
  let pageName = location.pathname;
  const items = [
    {
      href: "/",
      title: (
        <>
          <HomeOutlined />
          <span>Home</span>
        </>
      ),
    },
    {
      href: "",
      title: (
        <>
          <UserOutlined />
          <span>{pageName.slice(1)}</span>
        </>
      ),
    },
  ];
  return (
    <div className="ps-4 lg:!px-14  bg-white-0 bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
      <div className="lg:!py-14 pb-8 pt-4">
        <BreadCrumb items={items} className="" />

        <div className="flex lg:gap-36  h-full">
          <div className="w-full flex flex-col  lg:!gap-2  ">
            <header className="lg:!text-2xl lg:font-bold text-lg text-blue-400 tracking-[4px]">
              {label}
            </header>
            <header className="font-bold text-4xl leading-tight tracking-wider text-blue-900">
              {heroText}
            </header>
            <div className= "text-xl leading-9 text-slate text-slate-500">{content}</div>
            {/* <div className="flex">
              <header>rating1 </header>
              <header>rating2</header>
            </div> */}
          </div>
          <div className="hidden lg:!w-full lg:!block">
            <img
              src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-banner-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
