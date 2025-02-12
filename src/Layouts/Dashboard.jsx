import { NavLink } from "react-router-dom";
import Logo from "../Shaired/Logo";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { LuListTodo } from "react-icons/lu";
import { MdCategory, MdOutlinePlaylistAdd } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";
import { FaShirt, FaUserGroup } from "react-icons/fa6";

const Dashboard = () => {
      const userRole = "admin"
  return (
    <div>
      <div className=" h-screen w-full grid grid-cols-12">
        {/* dashboard side nav bar  */}
        <div className=" col-span-2 h-full bg-[#00C982]/10 p-4 ">
         <div className=" "><Logo/></div>
         {userRole==="admin" && <div className=" mt-8">
            <NavLink className="flex items-center gap-2 text-lg py-1 px-3"><RiDashboardHorizontalFill  className=" text-2xl text-[#00C982]"/> Dashboard </NavLink>
            <NavLink className="flex items-center gap-2 text-lg py-1 px-3 rounded"><LuListTodo className=" text-2xl text-[#00C982]"/> Products </NavLink>
            <NavLink className="flex items-center gap-2 text-lg py-1 px-3 rounded"><MdCategory className=" text-2xl text-[#00C982]"/> Category </NavLink>
            <NavLink className="flex items-center gap-2 text-lg py-1 px-3 rounded"><FaShirt className=" text-2xl text-[#00C982]"/>My Products </NavLink>
            <NavLink className="flex items-center gap-2 text-lg py-1 px-3 rounded"><MdOutlinePlaylistAdd className=" text-2xl text-[#00C982]"/>Add Products </NavLink>
            <NavLink className="flex items-center gap-2 text-lg py-1 px-3 rounded"><IoBagCheck className=" text-2xl text-[#00C982]"/> Orders </NavLink>
            <NavLink className="flex items-center gap-2 text-lg py-1 px-3 rounded"><FaUserGroup className=" text-2xl text-[#00C982]"/> Users</NavLink>
         </div>}
         {userRole==="seller" && <div className=" mt-8">
            <NavLink className="flex items-center gap-2 text-lg py-1 px-3"><RiDashboardHorizontalFill  className=" text-2xl text-[#00C982]"/> Dashboard </NavLink>
            <NavLink className="flex items-center gap-2 text-lg py-1 px-3 rounded"><LuListTodo className=" text-2xl text-[#00C982]"/>My Products </NavLink>
            <NavLink className="flex items-center gap-2 text-lg py-1 px-3 rounded"><MdOutlinePlaylistAdd className=" text-2xl text-[#00C982]"/>Add Products </NavLink>
            
            <NavLink className="flex items-center gap-2 text-lg py-1 px-3 rounded"><IoBagCheck className=" text-2xl text-[#00C982]"/> Orders </NavLink>
         </div>}
        </div>

        {/* Dashboard contents  */}
        <div className=" col-span-10 h-full"></div>
      </div>
    </div>
  );
};

export default Dashboard;
