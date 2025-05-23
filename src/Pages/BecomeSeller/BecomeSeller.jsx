import { Button } from "@material-tailwind/react";
import { TimelineWithIcon } from "../../components/Timeline/Timeline";
const BecomeSeller = () => {
  return (
    <div className="container mx-auto pb-12">
      <div
        style={{
          backgroundImage: "url('https://i.imgur.com/RiIUNKl.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="p-12 w-full"
      >
        {/* Content goes here */}
        <div className="text-white justify-around flex flex-col md:flex-row gap-10 md:gap-0">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-6xl leading-12 md:leading-16 lg:leading-relaxed">
              Become an NeoBazar seller today!
            </h2>
            <p className="text-xl mb-4">
              Sell on NeoBazar, most visited shopping destination.
            </p>
            <Button>Start Selling</Button>
          </div>
          <div className="">
            <img src="https://i.imgur.com/DexMECt.png" className="" alt="" />
          </div>
         

        </div>
      </div>
      {/* Header Section */}
      {/* <p className="text-lg text-gray-600 mt-4">
        Learn all about ecommerce for free and get help with seller support and
        NeoBazar.
      </p> */}

      <div className="mb-12 w-11/12 mx-auto lg:mx-0">
        <h1 className=" text-3xl mt-5 md:mt-10 lg:mt-16 md:text-4xl lg:text-5xl lg:leading-relaxed tracking-wide font-medium text-gray-800">
          Why Sell on Neo Bazar?
        </h1>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature Cards */}
        <div className="flex items-start gap-6 bg-white rounded-lg p-6">
          <img
            src="https://i.imgur.com/ehDR9au.png"
            alt="Reach"
            className="w-20 h-20"
          />
          <div>
            <h3 className="text-3xl lg:leading-relaxed xl:leading-loose font-semibold text-gray-800">
              Reach
            </h3>
            <p className="text-gray-600">
              Millions of customers on NeoBazar, the most visited shopping
              destination.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6 bg-white rounded-lg p-6">
          <img
            src="https://i.imgur.com/wuiExFu.png"
            alt="Free Registration"
            className="w-20 h-20"
          />
          <div className="">
            <h3 className="text-3xl lg:leading-relaxed xl:leading-loose font-semibold text-gray-800">
              Free Registration
            </h3>
            <p className="text-gray-600">
              Account registration & listing items for sale is free.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6 bg-white rounded-lg p-6">
          <img
            src="https://i.imgur.com/YNOTfRb.png"
            alt="Reliable Shipping"
            className="w-20 h-20"
          />
          <div>
            <h3 className="text-3xl lg:leading-relaxed xl:leading-loose font-semibold text-gray-800">
              Reliable Shipping
            </h3>
            <p className="text-gray-600">
              Fast, reliable, and hassle-free delivery through Neo Bazar&apos;s
              logistics network.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6 bg-white rounded-lg p-6">
          <img
            src="https://i.imgur.com/YhKcorA.png"
            alt="Timely Payments"
            className="w-20 h-20"
          />
          <div>
            <h3 className="text-3xl lg:leading-relaxed xl:leading-loose font-semibold text-gray-800">
              Timely Payments
            </h3>
            <p className="text-gray-600">
              Funds are safely deposited directly into your bank account on a
              weekly basis.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6 bg-white rounded-lg p-6">
          <img
            src="https://i.imgur.com/2fDYQT0.png"
            alt="Marketing Tools"
            className="w-20 h-20"
          />
          <div>
            <h3 className="text-3xl lg:leading-relaxed xl:leading-loose font-semibold text-gray-800">
              Marketing Tools
            </h3>
            <p className="text-gray-600">
              Find new customers & grow more with advertising and our range of
              marketing tools.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6 bg-white rounded-lg p-6">
          <img
            src="https://i.imgur.com/PAL7bx0.png"
            alt="Support & Training"
            className="w-20 h-20"
          />
          <div>
            <h3 className="text-3xl lg:leading-relaxed xl:leading-loose font-semibold text-gray-800">
              Support & Training
            </h3>
            <p className="text-gray-600">
              Learn all about ecommerce for free and get help with seller
              support and NeoBazar University.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h1 className=" text-3xl mt-5 text-center md:mt-10 lg:mt-16 md:text-4xl lg:text-5xl lg:leading-relaxed tracking-wide font-medium text-gray-800">
          5 Simple Steps to Start Selling
        </h1>
      </div>
      <TimelineWithIcon></TimelineWithIcon>
    </div>
  );
};

export default BecomeSeller;
