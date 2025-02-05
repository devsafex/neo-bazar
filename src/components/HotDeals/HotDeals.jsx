import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import Button from "../../Shaired/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagBold } from "react-icons/pi";

const HotDeals = () => {
  const [sorted, setSorted] = useState([]);
  function calculateDiscount(originalPrice, discountPrice) {
    const original = parseFloat(originalPrice.replace("$", ""));
    const discount = parseFloat(discountPrice.replace("$", ""));
    const discountPercentage = ((original - discount) / original) * 100;
    return parseFloat(discountPercentage.toFixed(2));
  }

  useEffect(() => {
    fetch("/deals.json")
      .then((res) => res.json())
      .then((data) => {
        const dealsWithDiscount = data.map((deal) => ({
          ...deal,
          discountPercentage: calculateDiscount(
            deal.price,
            deal.discount_price
          ),
        }));

        const sortedData = dealsWithDiscount.sort(
          (a, b) => b.discountPercentage - a.discountPercentage
        ).slice(0, 10);

        setSorted(sortedData);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);
  console.log(sorted)

  return (
    <div className="container mx-auto my-10 md:my-14 lg:my-20">
      <div className="flex justify-between items-center font-bold">
      <h2 className="text-2xl font-bold mb-6"> Deals Hot Of The Day</h2>
      <p className="flex items-center gap-2">More Products <IoIosArrowRoundForward /></p>
      </div>

      {/* First Two Big Items */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {sorted.slice(0, 2).map((deal) => (
          <div
            key={deal.id}
            className="border border-[#00C982]/10 flex gap-6 p-3 rounded-lg"
          >
            
            <img
              src={deal.image}
              alt={deal.name}
              className="w-40 h-40 md:p-10 md:w-48 md:h-48 lg:w-80 lg:h-80 bg-[#00C982]/10 p-4 rounded object-contain"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold">{deal.name}</h3>
              <div className="flex gap-3">
                <StarRatings
                  rating={deal.rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="0px"
                  name="rating"
                />
                <p className="text-black/55">({deal.reviews} reviews)</p>
              </div>
              <p className="text-gray-500 text-xl mt-2 font-bold">
                {deal.discount_price}{" "}
                <span className="text-red-400 font-normal line-through">{deal.price}</span>
              </p>

              <p className="text-green-600">{deal.discountPercentage}% OFF</p>
              <p className="text-black/65 my-2 lg:my-4">{deal.description}</p>
              <div className="flex gap-5 items-center">
                <div>
                  <Button size={"sm"}><PiHandbagBold className="text-2xl" />Select options</Button>
                </div>
                <div className="">
                <FaRegHeart className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Smaller Items in Grid Below */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
        {sorted.slice(2).map((deal) => (
          <div key={deal.id} className="flex gap-3 rounded-lg">
            <div className="h-32 bg-[#00C982]/10 flex items-center justify-center ">
            <img
              src={deal.image}
              alt={deal.name}
              className="w-20 h-20 md:w-28 md:h-24"
            />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-sm font-semibold mt-2">{deal.name}</h4>
              <div>
                <StarRatings
                  rating={deal.rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  starDimension="15px"
                  starSpacing="0px"
                  name="rating"
                />
              </div>
              <p className="text-red-500 text-sm mt-1">
                {deal.discount_price}
                <span className="text-gray-500 line-through ml-2">
                  {deal.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotDeals;
