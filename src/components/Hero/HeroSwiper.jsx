// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

const HeroSwiper = () => {
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    fetch("/banner-data.json")
      .then((res) => res.json())
      .then((data) => setSliders(data));
  }, []);
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        parallax={true}
        className="mySwiper"
        autoplay={{
          delay: 4000,
        }}
      >
        {sliders?.map((slider, idx) => (
          <SwiperSlide key={idx}>
            <div
              className=" w-full h-[500px] bg-cover flex  justify-self-start p-4 md:p-8 items-center"
              style={{ backgroundImage: `url(${slider?.bg_image})` }}
            >
              <div className=" text-start space-y-2">
                <h1 className=" text-xl lg:text-2xl  font-thin">
                  {slider?.product_type}
                </h1>
                <h1 className=" text-xl lg:text-4xl  font-bold text-[#00C982]">
                  {slider?.title}
                </h1>
                <p>{slider?.offer}</p>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
