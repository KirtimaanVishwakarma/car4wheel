/* eslint-disable react/prop-types */
import Sidebar from '../components/admin/sidebar';

const AdminMain = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="h-screen overflow-auto min-w-[12rem] basis-[16%] text-white-0 bg-blue-950">
        <Sidebar />
      </div>
      <div className="flex flex-col h-screen grow">
        <div className="p-6 border-b-2 border-blue-950 text-blue-950">
          <div className="flex justify-between">
            <header>Page Name</header>
            <header>Logout</header>
          </div>
        </div>
        <div className='p-6'>{children}</div>
      </div>
    </div>
  );
};
 
export default AdminMain;
