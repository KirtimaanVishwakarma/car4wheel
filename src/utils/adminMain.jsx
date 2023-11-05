/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Sidebar from '../components/admin/sidebar';
import { logout } from '../redux/actions/user';

const AdminMain = ({ children,pageName}) => {
  const dispatch=useDispatch()
  return (
    <div className="flex h-screen">
      <div className="h-screen overflow-auto min-w-[12rem] basis-[16%] text-white-0 bg-blue-950">
        <Sidebar />
      </div>
      <div className="flex flex-col h-screen grow">
        <div className="p-6 border-b-2 border-blue-950 text-blue-950">
          <div className="flex justify-between">
            <header>{pageName}</header>
            <header className='cursor-pointer' onClick={()=>dispatch(logout())}>Logout</header>
          </div>
        </div>
        <div className='p-6 overflow-y-auto'>{children}</div>
      </div>
    </div>
  );
};
 
export default AdminMain;
