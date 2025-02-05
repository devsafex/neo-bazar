import HeroSwiper from "./HeroSwiper";
import RightHero from "./RightHero";

const Hero = () => {
  return (
    <div>
      <div className=" container mx-auto flex flex-col lg:flex-row  justify-between">
        <div className=" w-full lg:w-8/11">
          <HeroSwiper />
        </div>
        <div className=" w-full lg:w-3/11 lg:ml-3 h-full">
            <RightHero/>      
        </div>
      </div>
    </div>
  );
};

export default Hero;
