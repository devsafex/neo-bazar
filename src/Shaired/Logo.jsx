const Logo = () => {
  return (
    <div>
      <div className=" flex items-center">
        <img className=" h-8 w-8 md:h-12 md:w-12" src="https://i.imgur.com/pZLDPsa.png" alt="" />
        <div className=" hidden md:block text-2xl text-start font-bold text-[#00C982]">
          <h1>NEO</h1>
          <h1 className=" -mt-3">BAZAR</h1>
        </div>
      </div>
    </div>
  );
};

export default Logo;
