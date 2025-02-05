import { useEffect, useState } from "react";
import Button from "../../Shaired/Button";

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
    <div className="container mx-auto my-10 md:my-16 lg:my-20 flex items-center justify-between bg-white p-10 relative overflow-hidden">
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
        {/* <div className="flex justify-end text-gray-700 text-lg font-medium space-x-2 mt-4">
          <span>281<span className="text-sm block">Days</span></span>
          <span>23<span className="text-sm block">Hours</span></span>
          <span>54<span className="text-sm block">Min</span></span>
          <span>45<span className="text-sm block">Sec</span></span>
        </div> */}
        
        {/* Shop Now Button */}
        <div className="mt-6">
          <Button className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold">Shop Now</Button>
        </div>
      </div>
    </div>
  );
};

export default SponsorsBanner;
