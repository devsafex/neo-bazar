import { IoMdCart, IoMdSearch } from "react-icons/io";
import Logo from "../../Shaired/Logo";
import { IconButton } from "@material-tailwind/react";

const Nav = () => {
  return (
    <div className=" bg-[#00C982]">
      <div className=" container mx-auto flex items-center justify-between py-2">
        <div>
          <Logo whiteLogo />
        </div>
        <div>
          <div className=" relative text-white">
            <IoMdSearch  className=" text-2xl absolute top-1 md:top-2 right-2" />
          <input type="text" placeholder="Search..." className=" focus:outline-0 border py-1 pr-8 w-full md:w-96 md:py-2  px-3 md:px-5 rounded" />
          </div>
        </div>
        <div>
          <IconButton variant="text" className="  rounded-full md:border-2  border-white  select-none h-10 w-10  cursor-pointer">
            <IoMdCart className="  text-2xl text-white" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Nav;
