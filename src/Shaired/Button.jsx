import PropTypes from "prop-types";
import { Button as Mtbtn } from "@material-tailwind/react";
// Don't chnange 
const Button = ({
  children,
  loading = false,
  size
}) => {
  return (
    <div>
      {/* Button form material tailwind  */}
      <Mtbtn
      size={size}
        
        loading={loading}
        className={`bg-[#00C982] rounded  cursor-pointer `}
      >
        {children}
      </Mtbtn>
    </div>
  );
};

// Prop validation 
Button.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  size: PropTypes.string
};

export default Button;