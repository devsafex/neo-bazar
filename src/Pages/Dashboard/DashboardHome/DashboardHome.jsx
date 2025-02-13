const DashboardHome = () => {
  return (
    <div>
      <div>
        <section className="mx-12 py-4  ">
          <div className=" grid grid-cols-1 md:grid-cols-2 w-1/2 gap-3">
            <div className=" flex items-center max-w-xs  bg-[#00C982]/10  p-4 rounded justify-between">
              {" "}
              <div className=" p-3 rounded  w-fit">
                <img
                  className=" w-14"
                  src="https://i.imgur.com/cVtkzaO.png"
                  alt=""
                />
              </div>
              <div>
                 <p className=" text-lg">Total orders</p>
                 <h1 className=" text-2xl font-thin">564</h1>
              </div>
            </div>
            <div className=" flex items-center max-w-xs  bg-[#00C982]/10  p-4 rounded justify-between">
              {" "}
              <div className=" p-3 rounded  w-fit">
                <img
                  className=" w-14"
                  src="https://i.imgur.com/ZMGiHzR.png"
                  alt=""
                />
              </div>
              <div>
                 <p className=" text-lg">Revenue</p>
                 <h1 className=" text-2xl font-thin">$65445</h1>
              </div>
            </div>
            <div className=" flex items-center max-w-xs  bg-[#00C982]/10  p-4 rounded justify-between">
              {" "}
              <div className=" p-3 rounded w-fit">
                <img
                  className=" w-14"
                  src="https://i.imgur.com/S7fkD7B.png"
                  alt=""
                />
              </div>
              <div>
                 <p className=" text-lg">Total users</p>
                 <h1 className=" text-2xl font-thin">564</h1>
              </div>
            </div>
            <div className=" flex items-center max-w-xs  bg-[#00C982]/10  p-4 rounded justify-between">
              {" "}
              <div className=" p-3 rounded  w-fit">
                <img
                  className=" w-14"
                  src="https://i.imgur.com/jguzdSq.png"
                  alt=""
                />
              </div>
              <div>
                 <p className=" text-lg">Total Products</p>
                 <h1 className=" text-2xl font-thin">4745</h1>
              </div>
            </div>
          </div>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default DashboardHome;
