
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const menuList = [
    { name: 'Home', link: '/admin' },
    { name: 'Car Lists', link: '/admin/car-lists' },
    { name: 'Home', link: '' },

  ];
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col gap-2">
      <div className="border-b-2 border-white-0 text-center p-4">Dashboard</div>
      <div className='mt-4'>
        <ul className='flex flex-col gap-3'>
          {menuList?.map((ele,ind) => (
            <li key={ind} className={ ele?.link===pathname ?'shadow-[inset_4px_0px_0px_0px_#fff]':''}>
              <Link to={ele?.link ? ele?.link : '#'} className={`pl-4 w-full block ${ele?.link===pathname?'font-bold':''}`}>{ele?.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
