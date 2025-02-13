import { Button, Checkbox, Spinner } from "@material-tailwind/react";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
const MyOrder = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
  };
  return (
    <div className="container lg:w-11/12  mx-auto w-full mt-8">
      {/* <h2 className="text-2xl font-light">Orders History and Status</h2> */}
      <div className="grid grid-cols-12 gap-3">
        {/* side container */}
        <div className="md:col-span-3 lg:col-span-2 mt-4 border-2 p-3 min-h-52">
          <h3 className=" text-2xl font-semibold mb-2">Filters</h3>
          <h4 className="text-gray-500 text-lg mb-2">Order Status</h4>
          <div className="flex flex-col ">
            <div className="flex justify-start   items-center">
              <Checkbox /> <p>On The Way</p>{" "}
            </div>
            <div className="flex gap-1 justify-start  items-center">
              <Checkbox /> <p>Delivered</p>{" "}
            </div>
            <div className="flex gap-1 justify-start  items-center">
              <Checkbox /> <p>Cancelled</p>{" "}
            </div>
            <div className="flex gap-1 justify-start  items-center">
              <Checkbox /> <p>Returned</p>{" "}
            </div>
          </div>
        </div>
        {/* min box  */}
        <div className="md:col-span-9 lg:col-span-10 mt-4 p-3 border-2 min-h-screen">
          {/* search container  */}
          <div className="flex  items-center">
            <input
              type="text"
              className="border-2 border-[#00C982] w-full rounded-l-lg p-2 "
            />
            <Button
              onClick={handleClick}
              className="flex bg-[#00C982] rounded-r-lg rounded-l-none  items-center gap-1"
            >
              {loading ? (
                <div className="w-16 h-4 flex items-center justify-center gap-1">
                  <Spinner className="border-[#00C982] text-white " />
                </div>
              ) : (
                <>
                  <FaMagnifyingGlass /> Search
                </>
              )}
            </Button>
          </div>
          {/* order history  */}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
