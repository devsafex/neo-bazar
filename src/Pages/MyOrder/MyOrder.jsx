import { Button, Checkbox, Spinner, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass, FaBars,  } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const MyOrder = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetch("/my-orders.json")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="container mx-auto w-full mt-8 px-4">
      <div className="grid grid-cols-12 gap-3">
       
        {/* Hamburger Button for Filters on Mobile & Tablet */}
        <div className="md:hidden col-span-12 flex justify-start gap-3 items-center mb-4">
          <IconButton onClick={() => setShowFilters(!showFilters)} className="bg-[#00C982] text-white">
            {showFilters ? <FaTimes size={20} /> : <FaBars size={20} />}
          </IconButton>
          {!showFilters && <h1 className="text-xl font-bold">Filter Options</h1>}
          
        </div>

        {/* Sidebar - Filters (Visible on Large Screens, Toggle on Small Screens) */}
        <div
          className={`bg-[#00C982]/5 col-span-12 md:col-span-3 lg:col-span-2 p-3 min-h-52 transition-all duration-300 ${
            showFilters ? "block" : "hidden md:block"
          }`}
        >
          <h3 className="text-2xl font-semibold mb-2">Filters</h3>
          <h4 className="text-gray-500 text-lg mb-2">Order Status</h4>
          <div className="flex flex-col space-y-2">
            {["On The Way", "Delivered", "Cancelled", "Returned"].map((status, index) => (
              <div key={index} className="flex items-center gap-2">
                <Checkbox /> <p>{status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content - Order List */}
        <div className="col-span-12 md:col-span-9 lg:col-span-10 mt-4 p-3  min-h-screen">
          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="e.g. product name"
              className="border-2 border-[#00C982] w-full rounded-l-lg p-2"
            />
            <Button onClick={() => setLoading(true)} className="flex bg-[#00C982] rounded-r-lg rounded-l-none items-center gap-1">
              {loading ? <Spinner className="border-[#00C982] text-white" /> : <FaMagnifyingGlass />} Search
            </Button>
          </div>

          {/* Order List */}
          <div className="mt-4">
            {orders.map((order, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-between rounded-lg border-[#00C982]/10 border-2 p-4 mb-3 bg-white gap-4"
              >
                {/* Order Image & Details */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img src={order.img} alt={order.item_name} className="w-16 h-16 rounded-md object-cover" />
                  <div>
                    <p className="text-gray-900 font-medium">{order.item_name}</p>
                    <p className="text-sm text-gray-500">Color: {order.color}</p>
                  </div>
                </div>

                {/* Price */}
               

                {/* <p className="text-lg font-semibold  border-2 text-gray-900">{order.price}</p> */}
               

                {/* Status */}
                <div className="flex flex-col justify-center items-center">
                <p className="text-lg font-semibold   text-gray-900">{order.price}</p>
                <div className="flex  items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      order.status === "Cancelled"
                        ? "bg-red-500"
                        : order.status === "Delivered"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  ></span>
                  <p className="text-sm text-gray-700">{order.status} on {order.date}</p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
