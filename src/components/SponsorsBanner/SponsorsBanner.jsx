import { useEffect, useState } from "react";
import Button from "../../Shaired/Button";
import CountDown from "../../Shaired/CountDown";

const SponsorsBanner = () => {
  const [sponsorData, setSponsorData] = useState({});

  useEffect(() => {
    fetch("/sponsor.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSponsorData(data);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className="bg-[#00C982]/5">
        <div className="container mx-auto my-10 md:my-16 lg:my-20 flex items-center justify-between p-10 relative overflow-hidden">
      {/* Left Side - Image Section */}
      <div className="relative w-3/5 flex items-center">
        <img src={sponsorData.img} alt="Sponsor" className="w-full h-auto" />
      </div>
      
      {/* Right Side - Text and Button */}
      <div className="w-2/5 pl-10">
        <p className="text-gray-500 text-sm uppercase tracking-widest mb-4 relative e after:content-[''] after:w-12 after:h-[4px] after:bg-orange-500/60 after:rounded-2xl after:mb-1 after:inline-block after:ml-2 after:align-middle">Happy Sunday</p>
        <h2 className="text-xl md:text-3xl lg:text-7xl font-bold text-orange-500/60">40% <br></br> <span className="text-orange-500/60">OFF</span></h2>
        <p className="text-xl font-semibold text-gray-800 mt-1">All Modern Furnitures</p>
        {/* Countdown Timer Placeholder */}
        <CountDown time="2025-02-06T06:50:00"></CountDown>
      
        
        {/* Shop Now Button */}
        <div className="mt-6">
          <Button className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold">Shop Now</Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SponsorsBanner;
