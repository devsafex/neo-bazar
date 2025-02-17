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
        <div className="container mx-auto my-10 md:my-16 lg:my-20 grid grid-cols-1 md:grid-cols-5 items-center justify-between p-10 relative overflow-hidden">
      {/* Left Side - Image Section */}
      <div className="relative flex items-center col-span-1 md:col-span-3">
        <img src={sponsorData.img} alt="Sponsor" className="w-full h-auto" />
      </div> 
      
      {/* Right Side - Text and Button */}
      <div className="pl-0 md:pl-10 col-span-1 md:col-span-2">
        <p className="text-gray-500 text-sm uppercase tracking-widest mb-4 relative e after:content-[''] after:w-12 after:h-[4px] after:bg-orange-500/60 after:rounded-2xl after:mb-1 after:inline-block after:ml-2 after:align-middle">Happy Sunday</p>
        <h2 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-orange-500/60">40% <br className="hidden md:block"/> <span className="text-orange-500/60">OFF</span></h2>
        <p className="text-xl font-semibold text-gray-800 mt-1">All Modern Furnitures</p>
        {/* Countdown Timer Placeholder */}
        <CountDown time="2025-02-13T23:59:59"></CountDown>
      
        
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
