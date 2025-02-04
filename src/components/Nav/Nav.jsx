import { IoMdCart, IoMdSearch } from "react-icons/io";
import Logo from "../../Shaired/Logo";
import { IconButton } from "@material-tailwind/react";

const Nav = () => {
  return (
    <div>
      <div className=" container mx-auto flex items-center justify-between py-2">
        <div>
          <Logo />
        </div>
        <div>
          <div className=" relative">
            <IoMdSearch  className=" text-2xl absolute top-1 md:top-2 right-2" />
          <input type="text" placeholder="Search..." className=" border py-1 pr-8 w-full md:w-96 md:py-2  px-3 md:px-5 rounded" />
          </div>
        </div>
        <div>
          <IconButton variant="text" className="  rounded-full md:border-2  border-[#00C982]  select-none h-10 w-10  cursor-pointer">
            <IoMdCart className="  text-2xl text-[#00C982]" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Nav;
