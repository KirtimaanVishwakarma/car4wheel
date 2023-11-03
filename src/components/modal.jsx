/* eslint-disable react/prop-types */

const Modal = ({ children, setModal,heading}) => {
  return (
    <div className="fixed h-screen w-full z-50 left-0 top-0 flex justify-center items-center bg-gray-400 bg-opacity-40">
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={setModal}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">{heading}</h3>
        {children}
      </div>
    </div>
  );
};

export default Modal;
