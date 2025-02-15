import {
    Timeline,
    TimelineItem,
   
    TimelineHeader,
    TimelineIcon,
    
    Typography,
  } from "@material-tailwind/react";
  import { SiGnuprivacyguard } from "react-icons/si";
  import { IoPersonAdd } from "react-icons/io5";
  import { FaAddressBook, FaAddressCard } from "react-icons/fa6";
  import { RiFileList3Fill } from "react-icons/ri";
  
  export function TimelineWithIcon() {
    return (
      <div className="w-full max-w-7xl mx-auto relative px-4">
        {/* Vertical Line */}
        <div className="absolute w-10/12 left-25 top-7 h-[2px] bg-[#00C982] hidden lg:block"></div>
  
        <Timeline className="grid lg:grid-cols-5 grid-cols-1 gap-10">
          {/* Timeline Item 1 */}
          <TimelineItem className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <TimelineIcon className="p-3 bg-[#00C982] text-white rounded-full shadow-md mx-auto">
              <SiGnuprivacyguard className="h-8 w-8" />
            </TimelineIcon>
            <TimelineHeader className="w-full mt-3">
              <Typography variant="h6" color="blue-gray" className="mt-4 font-bold w-full text-center">
                Signup for Free
              </Typography>
            </TimelineHeader>
            <p className="mt-2 w-full gap-0">
              <Typography className="font-normal text-gray-600 text-justify">
                Create your account through our website or mobile app with just your phone number.
              </Typography>
            </p>
          </TimelineItem>
  
          {/* Timeline Item 2 */}
          <TimelineItem className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <TimelineIcon className="p-3 mx-auto bg-[#00C982] text-white rounded-full shadow-md">
              <IoPersonAdd className="h-8 w-8" />
            </TimelineIcon>
            <TimelineHeader className="w-full mt-3">
              <Typography variant="h6" color="blue-gray" className="mt-4 font-bold w-full text-center">
                Add Profile Information
              </Typography>
            </TimelineHeader>
            <p className="mt-2">
              <Typography className="font-normal text-gray-600 text-justify">
                Complete your profile by providing your email and store name so that we can identify you.
              </Typography>
            </p>
          </TimelineItem>
  
          {/* Timeline Item 3 */}
          <TimelineItem className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <TimelineIcon className="p-3 mx-auto bg-[#00C982] text-white rounded-full shadow-md">
              <FaAddressBook className="h-8 w-8" />
            </TimelineIcon>
            <TimelineHeader className="w-full mt-3">
              <Typography variant="h6" color="blue-gray" className="mt-4 font-bold w-full text-center">
                Add Address Information
              </Typography>
            </TimelineHeader>
            <p className="mt-2">
              <Typography className="font-normal text-gray-600 text-justify">
                Provide all address details of your business.
              </Typography>
            </p>
          </TimelineItem>
  
          {/* Timeline Item 4 */}
          <TimelineItem className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <TimelineIcon className="p-3 mx-auto bg-[#00C982] text-white rounded-full shadow-md">
              <FaAddressCard className="h-8 w-8" />
            </TimelineIcon>
            <TimelineHeader className="w-full mt-3">
              <Typography variant="h6" color="blue-gray" className="mt-4 font-bold w-full text-center">
                Add ID & Bank Information
              </Typography>
            </TimelineHeader>
            <p className="mt-2">
              <Typography className="font-normal text-gray-600 text-justify">
                Add your ID & business details, including necessary bank information for payments.
              </Typography>
            </p>
          </TimelineItem>
  
          {/* Timeline Item 5 */}
          <TimelineItem className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <TimelineIcon className="p-3 mx-auto bg-[#00C982] text-white rounded-full shadow-md">
              <RiFileList3Fill className="h-8 w-8" />
            </TimelineIcon>
            <TimelineHeader className="w-full mt-3">
              <Typography variant="h6" color="blue-gray" className="mt-4 font-bold w-full text-center">
                List Products
              </Typography>
            </TimelineHeader>
            <p className="mt-2">
              <Typography className="font-normal text-gray-600 text-justify">
                Add products to your store via the seller center. Start selling once your products go live after quality control.
              </Typography>
            </p>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
  