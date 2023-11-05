const Stepper = ({ children, step }) => {

  return (
    <>
      <div className="flex justify-around relative stepper-line">
        <div className="flex flex-col">
          <div className="px-3 w-fit m-auto bg-white-0">
            <div className="border border-blue-500 rounded-full w-fit  bg-white-0">
              <header className="rounded-full m-1 bg-blue-500 h-8 w-8 text-white-0 flex justify-center items-center ">
                {step}
              </header>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
export default Stepper;
