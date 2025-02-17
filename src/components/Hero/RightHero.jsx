import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../../Shaired/Button";

const RightHero = () => {
  return (
    <div className=" w-full h-full flex flex-col md:flex-row mt-5 lg:mt-0 lg:flex-col justify-between gap-4">
      <div
        className=" w-full h-60 p-4 flex items-end"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.60)), url('https://i.imgur.com/xNINuXU.png')",
          backgroundSize: "cover",
          
        }}
      >
            <div>
            <h1 className=" text-[#00C982] text-2xl">NEW PRODUCTS</h1>
            <Button>Shop now <FaArrowRightLong /></Button>
            </div>
      </div>
      <div
        className=" w-full h-60 p-4 flex items-end"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.60)), url('https://i.imgur.com/DGqMH3K.png')",
          backgroundSize: "cover",
          
        }}
      >
            <div>
            <h1 className=" text-[#00C982] text-2xl">ON SALE</h1>
            <Button>Shop now <FaArrowRightLong /></Button>
            </div>
      </div>
    </div>
  );
};

export default RightHero;
