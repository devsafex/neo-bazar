import PropTypes from "prop-types";

import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render this when the countdown is complete
    return <span className="text-red-500/80 text-lg font-bold">Offer Expired!</span>;
  } else {
    // Render the countdown
    //   <div className="flex justify-end text-gray-700 text-lg font-medium space-x-2 mt-4">
    //           <span>281<span className="text-sm block">Days</span></span>
    //           <span>23<span className="text-sm block">Hours</span></span>
    //           <span>54<span className="text-sm block">Min</span></span>
    //           <span>45<span className="text-sm block">Sec</span></span>
    //         </div>
    return (
      <div className="flex text-[#00C982] my-8 text-2xl gap-2 text-center">
        <span className="font-bold bg-primary-color bg-opacity-10 p-2 border">
          {days}<span className="text-sm block text-black/60">Days</span>
        </span>
        
        <span className="font-bold bg-primary-color bg-opacity-10 p-2 border">
          {hours}<span className="text-sm block text-black/60">Hours</span>
        </span>
        
        <span className="font-bold bg-primary-color bg-opacity-10 p-2 border">
          {minutes}<span className="text-sm block text-black/60">Min</span>
        </span>
        
        <span className="font-bold bg-primary-color bg-opacity-10 p-2 border">
          {seconds}<span className="text-sm block text-black/60">Sec</span>
        </span>.
      </div>
    );
  }
};

const CountDown = ({ time }) => {
  return (
    <div>
      <Countdown date={new Date(time).getTime()} renderer={renderer} />
    </div>
  );
};

CountDown.propTypes = {
  time: PropTypes.string.isRequired,
};

export default CountDown;