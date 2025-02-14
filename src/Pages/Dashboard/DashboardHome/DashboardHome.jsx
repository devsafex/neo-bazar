import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { RecentOrders } from "../../../components/RecentOrders/RecentOrders";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];
const DashboardHome = () => {
  return (
    <div>
      <div className="mx-12 py-4">
        <section className=" flex justify-between">
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
          <div>
            <div>
              <BarChart width={730} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#00C982" />
                <Bar dataKey="uv" fill="red" />
              </BarChart>
            </div>
          </div>
        </section>
        <section>
          <h1 className=" text-2xl mt-4">Recent Orders</h1>
          <div>
            <RecentOrders/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardHome;
