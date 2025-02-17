import { Button, Checkbox, Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
const MyOrder = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  console.log(orders);
  const handleClick = () => {
    setLoading(true);
  };

  useEffect(() => {
    fetch("/my-orders.json")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="container lg:w-11/12  mx-auto w-full mt-8">
      {/* <h2 className="text-2xl font-light">Orders History and Status</h2> */}
      <div className="grid grid-cols-12 gap-3">
        {/* side container */}
        <div className="bg-[#00C982]/5 col-span-5 md:col-span-3 lg:col-span-2 mt-4  p-3 min-h-52">
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
        <div className="col-span-7 overflow-x-scroll  md:col-span-9 lg:col-span-10 mt-4 p-3 border-2 min-h-screen">
          {/* search container  */}
          <div className="flex   items-center">
            <input
              type="text"
              placeholder="e.g. product name"
              className="border-2 min-w-4xl border-[#00C982] w-full rounded-l-lg p-2 "
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
          <div className="mt-2 px-4">
            <div className="">
              {/* Order List */}
              <div className="w-full">
                {orders.map((order, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center justify-between  rounded-lg border-[#00C982]/10 border-2 p-4 mb-3 bg-white  gap-4"
                  >
                    {/* Left Section (Image & Details) */}
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <img
                        src={order.img}
                        alt={order.item_name}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <div>
                        <p className="text-gray-900 font-medium">
                          {order.item_name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Color: {order.color}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <p className="text-lg font-semibold text-gray-900">
                      {order.price}
                    </p>

                    {/* Status */}
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-3 h-3 rounded-full ${
                          order.status === "Cancelled"
                            ? "bg-red-500"
                            : order.status === "Delivered"
                            ? "bg-green-500"
                            : "bg-yellow-500"
                        }`}
                      ></span>
                      <p className="text-sm text-gray-700">
                        {order.status} on {order.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
