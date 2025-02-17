import { PiHandbagBold } from "react-icons/pi";
import Button from "../../Shaired/Button";
import { FaBox, FaRegHeart } from "react-icons/fa6";
import StarRatings from "react-star-ratings";
import { calculateDiscount } from "../../utility/utility";
import ImageZoom from "react-image-magnifier-zoom";
import { ScrollRestoration } from "react-router-dom";
const product = {
  id: 1,
  name: "ASUS ROG Strix G16",
  price: "$1799.99",
  discount_price: "$1599.99",
  image:
    "https://dlcdnwebimgs.asus.com/gain/39783D9F-B9A0-43D3-8179-9BF196C600BB",
  rating: 4.8,
  reviews: 420,
  description:
    "High-performance gaming laptop with an Intel Core i9-13980HX processor, 32GB DDR5 RAM, and a 1TB SSD. Features a 16-inch QHD+ (2560x1600) 240Hz display with NVIDIA GeForce RTX 4070 8GB graphics. Comes with ROG Intelligent Cooling, per-key RGB backlit keyboard, Dolby Atmos audio, Wi-Fi 6E, and AI noise cancellation. Windows 11 Home pre-installed. Long-lasting 90Wh battery and premium Eclipse Gray finish.",
};

const ProductDetails = () => {
  const discountPercentage = calculateDiscount(
    product.price,
    product.discount_price
  );
  return (
    <div>
      <ScrollRestoration />
      <div className=" container mx-auto pt-7 w-11/12 lg:w-full">
        <div className=" flex gap-5 items-start flex-col md:flex-row">
          <div className=" md:w-7xl z-50" id="img-div-details-page">
            {" "}
            <div className=" hidden lg:block">
              <ImageZoom
                src={product?.image}
                width={400}
                height={400}
                magnifierSize={100}
                zoomLevel={3}
                //   enabled={true}
              />
            </div>

            <img className=" w-full lg:hidden" src={product?.image} alt="" />
          </div>
          <div>
            <h1 className=" text-2xl font-bold">{product?.name}</h1>
            <div>
              <p className="text-gray-500 text-xl mt-2  font-bold">
                {product?.discount_price}
                <span className="text-red-400 font-normal ml-2 line-through">
                  {product?.price}
                </span>
              </p>

              <p className="text-green-600">{discountPercentage}% OFF</p>
            </div>
            <div className="flex gap-3">
              <StarRatings
                rating={product.rating}
                starRatedColor="gold"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="0px"
                name="rating"
              />
              <p className="text-black/55">({product.reviews} reviews)</p>
            </div>
            <p className="text-black/65 my-2 lg:my-4  xl:text-lg ">
              {product.description}
            </p>
            <div className="flex gap-5 items-center">
              <div>
                <Button size={"sm"}>
                  <PiHandbagBold className=" text-lg md:text-2xl" />
                  Add to cart
                </Button>
              </div>
              <div>
                <Button size={"sm"}>
                  <FaBox className="text-lg md:text-2xl" />
                  Buy now
                </Button>
              </div>
              <div>
                <FaRegHeart className="text-2xl cursor-pointer hover:text-[#00C982]" />
              </div>
            </div>
          </div>
        </div>
        <div className=" border-b-2 py-6 border-gray-200"></div>
      </div>
    </div>
  );
};

export default ProductDetails;
