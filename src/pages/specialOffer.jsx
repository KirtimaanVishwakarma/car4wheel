import HeroSection from "../components/heroSection";
import SpecialOfferCard from "../components/specialOfferCard";
import { offerForm } from "../utils/constant.js";
import Button from "../components/forms/button";
import FormWrapper from "../components/forms/formWrapper";
import Main from "../utils/main";
import { useEffect } from "react";
import { getOfferList } from "../redux/actions/offerAction.js";
import { useDispatch, useSelector } from "react-redux";
const SpecialOffer = () => {
  const filterForm = [
    {
      header: "Brand",
      placeholder: "Select Brand",
      options: ["Maruti", "Tata"],
    },
    {
      header: "Model",
      placeholder: "Select Modal",
      options: ["Baleno", "breeza"],
    },
    {
      header: "Engine",
      placeholder: "Enter Engine Type",
      options: ["1500cc", "1800cc", "2500cc"],
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOfferList());
  }, [dispatch]);
  const { loading, offerList } = useSelector((state) => state.offer);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main>
      <div className="relative">
        <HeroSection />

        <div className="border w-[90%]  right-5 rounded-2xl p-5 absolute lg:w-[95%] top-[90%] bg-white-0 shadow lg:top-[82%] lg:left-8">
          <div className="h-full flex flex-col lg:flex-row lg:flex-1 gap-2 justify-between w-full">
            {/* {filterForm.map((ele, i) => (
              <div key={i} className="flex-1">
                <OfferForm
                  header={ele.header}
                  placeholder={ele.placeholder}
                  options={ele.options}
                />
              </div>
            ))} */}
            <div className="w-full flex-[75]">
              <FormWrapper formObj={offerForm} />
            </div>
            <div className="w-full  flex justify-center items-center flex-[25]">
              <Button className={"lg:mt-[9%] mt-0"} />
            </div>
          </div>
        </div>
      </div>
      <div className="block mt-52 lg:mt-26 mb-10 lg:my-[11rem] mx-4  lg:mx-14">
        <h1 className="ps-4 mb-4 mt-4 text-gray-500">
          Showing 2,928 car available in stock
        </h1>
        <div className="grid lg:grid-cols-3 gap-8">
          {offerList &&
            offerList?.list?.map((ele) => (
              <SpecialOfferCard key={ele._id} item={ele} />
            ))}
        </div>
      </div>
    </Main>
  );
};

export default SpecialOffer;
