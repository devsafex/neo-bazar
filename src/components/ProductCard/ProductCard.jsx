import PropTypes from "prop-types";
import { calculateDiscount } from "../../utility/utility";
import StarRatings from "react-star-ratings";
import Button from "../../Shaired/Button";
import { PiHandbagBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  const discountPercentage = calculateDiscount(
    product.price,
    product.discount_price
  );
  return (
    <div className=" p-6 bg-white rounded max-w-6xl ">
      <div className=" flex gap-4 ">
        <div>
          <img className=" w-md object-contain" src={product?.image} alt="" />
        </div>
        <div>
          <h1 className=" text-xl">{product?.name}</h1>
          <div>
            <p className="text-gray-500 text-xl mt-2 font-bold">
              {product?.discount_price}
              <span className="text-red-400 font-normal line-through">
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
          <p className="text-black/65 my-2 lg:my-4">
            {product.description.slice(0, 200)}...
          </p>
          <div className="flex gap-5 items-center">
            <div>
              <Button size={"sm"}>
                <PiHandbagBold className="text-2xl" />
                Add to cart
              </Button>
            </div>
            <div>
              <FaRegHeart className="text-2xl cursor-pointer hover:text-[#00C982]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
