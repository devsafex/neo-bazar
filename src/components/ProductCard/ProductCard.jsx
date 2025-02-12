import PropTypes from "prop-types";
import { calculateDiscount } from "../../utility/utility";
import StarRatings from "react-star-ratings";
import Button from "../../Shaired/Button";
import { PiHandbagBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { setItemToLocal } from "../../utility/localStroge";

const ProductCard = ({ product }) => {
  const discountPercentage = calculateDiscount(
    product.price,
    product.discount_price
  );

  const addToCart = () =>{
      setItemToLocal('cart',product.id)
  }
  return (
    <div className=" p-6 bg-white rounded max-w-full ">
      <div className=" flex gap-2 2xl:gap-4 flex-col md:flex-row ">
        <Link to={`/product/${product.id}`}>
          <img className=" w-md object-contain" src={product?.image} alt="" />
        </Link>
        <div>
          <Link to={`{/product/${product.id}}`} className=" text-lg xl:text-xl hover:text-blue-950">{product?.name}</Link>
          <div>
            <p className="text-gray-500 text-sm xl:text-xl mt-2  font-bold">
              {product?.discount_price}
              <span className="text-red-400 font-normal ml-2 line-through">
                {product?.price}
              </span>
            </p>

            <p className="text-green-600">{discountPercentage}% OFF</p>
          </div>
          <div className="flex gap-1 xl:gap-3">
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
          <p className="text-black/65 my-2 xl:my-4 text-xs lg:text-sm">
            {product.description.slice(0, 200)}...
          </p>
          <div className="flex gap-5 items-center">
            <div 
              onClick={addToCart}
             >
              <Button 
              
              size={"sm"}>
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
