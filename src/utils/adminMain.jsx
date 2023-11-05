/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../components/admin/sidebar';
import { logout } from '../redux/actions/user';
import Button from '../components/forms/button';
import {FaUserCircle} from "react-icons/fa"

const AdminMain = ({ children,pageName}) => {
  const {user}=useSelector(state=>state.user)
  const dispatch=useDispatch()
  return (
    <div className="flex h-screen">
      <div className="h-screen overflow-auto min-w-[12rem] basis-[16%] text-white-0 bg-blue-950">
        <Sidebar />
      </div>
      <div className="flex flex-col h-screen grow">
        <div className="p-6 border-b-2 border-blue-950 text-blue-950">
          <div className="flex justify-between items-center">
            <header>{pageName}</header>
            <div className='flex gap-6'>

            <div className='flex gap-2 items-center'>
              <span className='capitalize'>{user?.username}</span>
              <FaUserCircle className='h-8 !w-fit text-blue-b1'/>
              </div>
            <header className='cursor-pointer border px-3 py-1 rounded border-blue-b1 text-blue-b1' onClick={()=>dispatch(logout())}>Logout</header>
            </div>
          
          </div>
        </div>
        <div className='p-6 overflow-y-auto'>{children}</div>
      </div>
    </div>
  );
};
 
export default AdminMain;
