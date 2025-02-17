import {
    Timeline,
    TimelineItem,
   
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
  import { SiGnuprivacyguard } from "react-icons/si";
  import { IoPersonAdd } from "react-icons/io5";
  import { FaAddressBook, FaAddressCard } from "react-icons/fa6";
  import { RiFileList3Fill } from "react-icons/ri";
  
  export function TimelineWithIcon() {
    return (
      <div className="w-full max-w-7xl mx-auto relative py-10 px-4">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-16 w-[2px] h-full bg-gray-600 hidden lg:block"></div>
  
        <Timeline className="grid lg:grid-cols-5 grid-cols-1 gap-10">
          {/* Timeline Item 1 */}
          <TimelineItem className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <TimelineIcon className="p-3 bg-[#00C982] text-white rounded-full shadow-md">
              <SiGnuprivacyguard className="h-8 w-8" />
            </TimelineIcon>
            <TimelineHeader>
              <Typography variant="h6" color="blue-gray" className="mt-4 font-bold">
                Signup for Free
              </Typography>
            </TimelineHeader>
            <TimelineBody className="mt-2">
              <Typography className="font-normal text-gray-600">
                Create your account through our website or mobile app with just your phone number.
              </Typography>
            </TimelineBody>
          </TimelineItem>
  
          {/* Timeline Item 2 */}
          <TimelineItem className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <TimelineIcon className="p-3 bg-[#00C982] text-white rounded-full shadow-md">
              <IoPersonAdd className="h-8 w-8" />
            </TimelineIcon>
            <TimelineHeader>
              <Typography variant="h6" color="blue-gray" className="mt-4 font-bold">
                Add Profile Information
              </Typography>
            </TimelineHeader>
            <TimelineBody className="mt-2">
              <Typography className="font-normal text-gray-600">
                Complete your profile by providing your email and store name so that we can identify you.
              </Typography>
            </TimelineBody>
          </TimelineItem>
  
          {/* Timeline Item 3 */}
          <TimelineItem className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <TimelineIcon className="p-3 bg-[#00C982] text-white rounded-full shadow-md">
              <FaAddressBook className="h-8 w-8" />
            </TimelineIcon>
            <TimelineHeader>
              <Typography variant="h6" color="blue-gray" className="mt-4 font-bold">
                Add Address Information
              </Typography>
            </TimelineHeader>
            <TimelineBody className="mt-2">
              <Typography className="font-normal text-gray-600">
                Provide all address details of your business.
              </Typography>
            </TimelineBody>
          </TimelineItem>
  
          {/* Timeline Item 4 */}
          <TimelineItem className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <TimelineIcon className="p-3 bg-[#00C982] text-white rounded-full shadow-md">
              <FaAddressCard className="h-8 w-8" />
            </TimelineIcon>
            <TimelineHeader>
              <Typography variant="h6" color="blue-gray" className="mt-4 font-bold">
                Add ID & Bank Information
              </Typography>
            </TimelineHeader>
            <TimelineBody className="mt-2">
              <Typography className="font-normal text-gray-600">
                Add your ID & business details, including necessary bank information for payments.
              </Typography>
            </TimelineBody>
          </TimelineItem>
  
          {/* Timeline Item 5 */}
          <TimelineItem className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <TimelineIcon className="p-3 bg-[#00C982] text-white rounded-full shadow-md">
              <RiFileList3Fill className="h-8 w-8" />
            </TimelineIcon>
            <TimelineHeader>
              <Typography variant="h6" color="blue-gray" className="mt-4 font-bold">
                List Products
              </Typography>
            </TimelineHeader>
            <TimelineBody className="mt-2">
              <Typography className="font-normal text-gray-600">
                Add products to your store via the seller center. Start selling once your products go live after quality control.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
  