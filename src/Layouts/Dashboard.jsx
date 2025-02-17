import { NavLink, Outlet } from "react-router-dom";
import Logo from "../Shaired/Logo";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { LuListTodo } from "react-icons/lu";
import { MdCategory, MdOutlinePlaylistAdd } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";
import { FaShirt, FaUserGroup } from "react-icons/fa6";
import useRole from "../hooks/useRole";
import "./dashboard.css";
const Dashboard = () => {
  const userRole = useRole();
  return (
    <div>
      <div className=" h-screen w-full lg:grid lg:grid-cols-12">
        {/* dashboard side nav bar  */}
        <div className=" lg:col-span-3 xl:col-span-2  bg-[#00C982]/10 p-4 hidden lg:block">
          <div className=" ">
            <Logo />
          </div>
          <div className=" " id="navlinks">
            {userRole === "admin" && (
              <div className=" mt-8 flex flex-col gap-4">
                <NavLink
                  to="dashboard-home"
                  className="flex items-center gap-2 text-lg py-1 px-3"
                >
                  <RiDashboardHorizontalFill className=" text-2xl nav-icons text-[#00C982]" />{" "}
                  Dashboard{" "}
                </NavLink>
                <NavLink
                  to="products"
                  className="flex items-center gap-2 text-lg py-1 px-3 rounded"
                >
                  <LuListTodo className=" text-2xl nav-icons text-[#00C982]" />{" "}
                  Products{" "}
                </NavLink>
                <NavLink
                  to="category"
                  className="flex items-center gap-2 text-lg py-1 px-3 rounded"
                >
                  <MdCategory className=" text-2xl nav-icons text-[#00C982]" />{" "}
                  Category{" "}
                </NavLink>
                <NavLink
                  to="my-products"
                  className="flex items-center gap-2 text-lg py-1 px-3 rounded"
                >
                  <FaShirt className=" text-2xl nav-icons text-[#00C982]" />
                  My Products{" "}
                </NavLink>
                <NavLink
                  to="add-products"
                  className="flex items-center gap-2 text-lg py-1 px-3 rounded"
                >
                  <MdOutlinePlaylistAdd className=" text-2xl nav-icons text-[#00C982]" />
                  Add Products{" "}
                </NavLink>
                <NavLink
                  to="orders"
                  className="flex items-center gap-2 text-lg py-1 px-3 rounded"
                >
                  <IoBagCheck className=" text-2xl nav-icons text-[#00C982]" />{" "}
                  Orders{" "}
                </NavLink>
                <NavLink
                  to="users"
                  className="flex items-center gap-2 text-lg py-1 px-3 rounded"
                >
                  <FaUserGroup className=" text-2xl nav-icons text-[#00C982]" />{" "}
                  Users
                </NavLink>
              </div>
            )}
            {userRole === "seller" && (
              <div className=" mt-8  flex flex-col gap-4">
                <NavLink className="flex items-center gap-2 text-lg py-1 px-3">
                  <RiDashboardHorizontalFill className=" text-2xl nav-icons text-[#00C982]" />{" "}
                  Dashboard{" "}
                </NavLink>
                <NavLink className="flex items-center gap-2 text-lg py-1 px-3 rounded">
                  <LuListTodo className=" text-2xl nav-icons text-[#00C982]" />
                  My Products{" "}
                </NavLink>
                <NavLink className="flex items-center gap-2 text-lg py-1 px-3 rounded">
                  <MdOutlinePlaylistAdd className=" text-2xl nav-icons text-[#00C982]" />
                  Add Products{" "}
                </NavLink>

                <NavLink className="flex items-center gap-2 text-lg py-1 px-3 rounded">
                  <IoBagCheck className=" text-2xl nav-icons text-[#00C982]" />{" "}
                  Orders{" "}
                </NavLink>
              </div>
            )}
          </div>
        </div>

        {/* Dashboard contents  */}
        <div className=" lg:col-span-9 xl:col-span-10  overflow-y-auto h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
