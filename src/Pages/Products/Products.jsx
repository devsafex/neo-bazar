import { Checkbox, Option, Select } from "@material-tailwind/react";
import ProductCard from "../../components/ProductCard/ProductCard";

const Products = () => {
  const gamingLaptop = {
    id: 1,
    name: "ASUS ROG Strix G16",
    price: "$1799.99",
    discount_price: "$1599.99",
    image:
      "https://rukminim3.flixcart.com/image/850/1000/xif0q/computer/d/j/m/g614ju-n3200ws-gaming-laptop-asus-original-imah4bjd8gfzvxgn.jpeg",
    rating: 4.8,
    reviews: 420,
    description:
      "High-performance gaming laptop with an Intel Core i9-13980HX processor, 32GB DDR5 RAM, and a 1TB SSD. Features a 16-inch QHD+ (2560x1600) 240Hz display with NVIDIA GeForce RTX 4070 8GB graphics. Comes with ROG Intelligent Cooling, per-key RGB backlit keyboard, Dolby Atmos audio, Wi-Fi 6E, and AI noise cancellation. Windows 11 Home pre-installed. Long-lasting 90Wh battery and premium Eclipse Gray finish.",
  };

  return (
    <div className=" bg-[#00C982]/5 min-h-screen">
      <div className="  container mx-auto h-full w-11/12 md:w-full">
        <div className=" py-4 w-full flex items-center justify-between border-b-2
         border-b-[#00C982]/10 mb-3">
          <div className=" text-xl">All items</div>
          <div>
            <div className="w-fit">
              <Select className=" p-0 " label="Sort by">
                <Option>Price : Low to high</Option>
                <Option>Price : High to low</Option>
                <Option>Newest Arrivals</Option>
                <Option>Avg. Customer Review</Option>
               
              </Select>
            </div>
          </div>
        </div>
        <div className=" md:grid grid-cols-12  gap-5 h-full ">
          <div className=" col-span-3 xl:col-span-2 h-full ">
            {/* filterr  */}
            <div >
              <div className="  flex items-center "><Checkbox /> Free delivery</div>
              <div className=" flex items-center "><Checkbox /> Cash on delivery</div>
            </div>
            {/* <div className=" border-b-2 border-b-[#00C982]/10 my-2"></div> */}
          </div>
          <div className=" col-span-9 xl:col-span-10 h-full space-y-3">
            <ProductCard product={gamingLaptop} />
            <ProductCard product={gamingLaptop} />
            <ProductCard product={gamingLaptop} />
            <ProductCard product={gamingLaptop} />
            <ProductCard product={gamingLaptop} />
            <ProductCard product={gamingLaptop} />
            <ProductCard product={gamingLaptop} />
            <ProductCard product={gamingLaptop} />
            <ProductCard product={gamingLaptop} />
            <ProductCard product={gamingLaptop} />
            <ProductCard product={gamingLaptop} />
            <ProductCard product={gamingLaptop} />
            <ProductCard product={gamingLaptop} />
            <ProductCard product={gamingLaptop} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
