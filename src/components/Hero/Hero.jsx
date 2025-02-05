import HeroSwiper from "./HeroSwiper";

const Hero = () => {
  return (
    <div>
      <div className=" container mx-auto flex">
        <div className=" w-8/11">
          <HeroSwiper />
        </div>
        <div className=" w-4/11">

        </div>
      </div>
    </div>
  );
};

export default Hero;
