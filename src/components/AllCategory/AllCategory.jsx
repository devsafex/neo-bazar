import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { useEffect, useState } from "react";

const AllCategory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="w-full -mb-10">
      <Swiper
        slidesPerView={11}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {items.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="flex flex-col items-center justify-center gap-2 p-2"
          >
            {/* Image Container (Centering Fixed) */}
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full ">
                <img
                  src={item.img}
                  className="w-12 h-12 object-cover rounded-full"
                  alt={item.slug}
                />
              </div>
              {/* Category Name (Centering Fixed) */}
              <p className="text-sm font-medium text-gray-700 text-center w-full">
                {item.slug}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AllCategory;
