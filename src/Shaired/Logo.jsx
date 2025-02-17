import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Logo = ({whiteLogo}) => {
  return (
    <div>
      <Link to="/" className=" flex items-start">
        <img className={`h-8 w-8 md:h-12 md:w-12 ${whiteLogo&&"brightness-0 invert"}` }src="https://i.imgur.com/pZLDPsa.png" alt="" />
        <div className={`hidden md:block text-2xl text-start font-bold ${whiteLogo?"text-white":"text-[#00C982]"}`}>
          <h1>NEO</h1>
          <h1 className=" -mt-3">BAZAR</h1>
        </div>
      </Link>
    </div>
  );
};
Logo.propTypes = {
      whiteLogo:PropTypes.bool
}
export default Logo;
