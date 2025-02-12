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
    <div className="w-full">
      <Swiper
        slidesPerView={10}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {items.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="flex flex-col items-center justify-center gap-2 p-2 border-2 border-red-400"
          >
            {/* Image Container */}
            <div className="p-2 bg-gray-100 rounded-full w-16 h-16">
              <img
                src={item.img}
                className="w-12 border-2 border-red-400 h-12 object-cover mx-auto rounded-full"
                alt={item.slug}
              />
            </div>
            {/* Category Name */}
            <p className="text-sm font-medium border-2 border-red-400 text-center text-gray-700">
              {item.slug.replace("-", " ")}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AllCategory;
