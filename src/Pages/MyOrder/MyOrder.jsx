const MyOrder = () => {
  return (
    <div className="container lg:w-11/12 mx-auto w-full mt-8">
      {/* <h2 className="text-2xl font-light">Orders History and Status</h2> */}
      <div className="grid grid-cols-12">
        {/* side container */}
        <div className="col-span-2 mt-4 p-3 min-h-52">
          <h3 className=" text-2xl font-semibold mb-2">Filters</h3>
          <h4 className="text-gray-500 text-lg mb-2">Order Status</h4>
        </div>
        {/* min box  */}
        <div className=" col-span-10"> </div>
      </div>
    </div>
  );
};

export default MyOrder;
