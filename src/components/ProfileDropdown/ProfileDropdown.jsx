import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import useAuth from "../../hooks/useAuth";
import { FaBox, FaCartShopping, FaInbox } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { HiLogout } from "react-icons/hi";

const ProfileDropdown = () => {
  const { user,logOut } = useAuth();
  return (
    <div>
      <Menu>
        <MenuHandler>
          <Avatar
            variant="circular"
            alt={user?.displayName}
            className="cursor-pointer w-10 h-10 border-2 border-white"
            src={user?.photoURL || "https://i.imgur.com/YoviWA4.png"}
          />
        </MenuHandler>
        <MenuList className=" border-none">
          <MenuItem className="flex items-center gap-2">
            <FaUserCircle className=" text-lg  text-gray-400" />
            <Typography variant="small" className="font-medium">
              My profile
            </Typography>
          </MenuItem>
          <MenuItem className="flex items-center gap-2">
            <FaCartShopping className=" text-lg  text-gray-400" />
            <Typography variant="small" className="font-medium">
              Cart
            </Typography>
          </MenuItem>
          <MenuItem className="flex items-center gap-2">
            <FaBox className=" text-lg  text-gray-400" />
            <Typography variant="small" className="font-medium">
              My orders
            </Typography>
          </MenuItem>
          <MenuItem className="flex items-center gap-2">
            <FaInbox className=" text-lg  text-gray-400" />
            <Typography variant="small" className="font-medium">
              Inbox
            </Typography>
          </MenuItem>
          <hr className="my-2 border-gray-400" />
          <MenuItem onClick={logOut} className="flex items-center gap-2 ">
          <HiLogout className=" text-lg  text-red-500" />
            <Typography variant="small" className="font-medium">
              Sign Out
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default ProfileDropdown;
