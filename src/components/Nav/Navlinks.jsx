import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const Navlinks = () => {
  const { user } = useAuth();

  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row text-black lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Help
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          My orders
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
<<<<<<<<< Temporary merge branch 1
        <Link to="" className="flex items-center">
=========
        <Link to={'become-seller'} className="flex items-center">
>>>>>>>>> Temporary merge branch 2
          Become a seller
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/dashboard" className="flex items-center">
          Dashboard
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="">
      <Navbar className="sticky top-0 z-10 h-max max-w-full py-0  shadow-none border-b bg-[#00C982]/10 rounded-none px-4  lg:px-8 md:py-1">
        <div className="flex items-center justify-between text-blue-gray-900 container mx-auto">
          <Typography
            as="a"
            href="#"
            className="mr-4 text-2xl font-bold cursor-pointer py-1.5  text-black"
          >
            Neo bazar
          </Typography>
          <div className="flex items-center gap-4">
            <div className=" hidden lg:block">{navList}</div>
            {!user && (
              <div className="flex items-center gap-x-1">
                <Link to={"/login"}>
                  <Button fullWidth variant="text" size="sm" className="">
                    <span>Log In</span>
                  </Button>
                </Link>
                <Link to={"/signup"}>
                  <Button fullWidth size="sm" className=" bg-[#00C982] rounded">
                    <span>Sign Up</span>
                  </Button>
                </Link>
              </div>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          {!user && (
            <div className="flex items-center gap-x-1">
              <Link to={"/login"}>
                <Button fullWidth variant="text" size="sm" className="">
                  <span>Log In</span>
                </Button>
              </Link>
              <Link to={"/signup"}>
                <Button fullWidth size="sm" className=" bg-[#00C982] rounded">
                  <span>Sign Up</span>
                </Button>
              </Link>
            </div>
          )}
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Navlinks;
