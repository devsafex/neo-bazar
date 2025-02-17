import PropTypes from "prop-types";

import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render this when the countdown is complete
    return <span className="text-red-500/80 font-bold">Offer Expired!</span>;
  } else {
    return (
      <div className="flex text-[#00C982] my-8 text-2xl gap-2 text-center">
        <span className="font-bold bg-primary-color bg-opacity-10 p-2 border rounded-xs">
          {days}<span className="text-sm block text-black/60">Days</span>
        </span>
        
        <span className="font-bold bg-primary-color bg-opacity-10 p-2 border rounded-xs">
          {hours}<span className="text-sm block text-black/60">Hours</span>
        </span>
        
        <span className="font-bold bg-primary-color bg-opacity-10 p-2 border rounded-xs">
          {minutes}<span className="text-sm block text-black/60">Mins</span>
        </span>
        
        <span className="font-bold bg-primary-color bg-opacity-10 p-2 border rounded-xs">
          {seconds}<span className="text-sm block text-black/60">Secs</span>
        </span>
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