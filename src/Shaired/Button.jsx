import PropTypes from "prop-types";
import { Button as Mtbtn } from "@material-tailwind/react";
import { PiHandbagBold } from "react-icons/pi";
// Don't chnange 
export const Button = ({
  childrens,
  loading = false,
  size
}) => {
  return (
    <div>
      {/* Button form material tailwind  */}
      <Mtbtn
      size={size}
        
        loading={loading}
        className={`bg-[#00C982] rounded flex items-center gap-3 cursor-pointer `}
      >
        <PiHandbagBold className="text-2xl" />
        {childrens}
      </Mtbtn>
    </div>
  );
};

// Prop validation 
Button.propTypes = {
  childrens: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  size: PropTypes.string
};

export default Button;