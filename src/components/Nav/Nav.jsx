import { IoMdCart, IoMdSearch } from "react-icons/io";
import Logo from "../../Shaired/Logo";
import { IconButton } from "@material-tailwind/react";
import Navlinks from "./Navlinks";
import useAuth from "../../hooks/useAuth";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";

const Nav = () => {
  const {user} = useAuth()
  return (
    <div className=" " id="nav-top">
      <div className=" bg-[#00C982] fixed w-full z-50">
        <div className=" container w-11/12 gap-2  lg:w-full mx-auto flex items-center justify-between py-2">
          <div>
            <Logo whiteLogo />
          </div>
          <div>
            <div className=" relative text-white">
              <IoMdSearch className=" text-2xl absolute top-1 md:top-2 right-2" />
              <input
                type="text"
                placeholder="Search..."
                className=" focus:outline-0 border py-1 md:pr-8 pr-8 w-full md:w-96 md:py-2  px-2 md:px-5 rounded"
              />
            </div>
          </div>
          <div className=" space-x-2 flex items-center">
            <IconButton
              variant="text"
              className="  rounded-full md:border-2  border-white  select-none h-10 w-10  cursor-pointer"
            >
              <IoMdCart className="  text-2xl text-white" />
            </IconButton>
            {user&&<ProfileDropdown/>}
          </div>
        </div>
      </div>
      <div className=" pt-16">
      <Navlinks></Navlinks>
      </div>
    </div>
  );
};

export default Nav;
