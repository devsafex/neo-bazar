import PropTypes from "prop-types";
import { Button as Mtbtn } from "@material-tailwind/react";

export const Button = ({
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
        className={`bg-[#00C982] rounded flex items-center gap-3 cursor-pointer `}
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