import AllCategory from "../../components/AllCategory/AllCategory";
import Hero from "../../components/Hero/Hero";
import HotDeals from "../../components/HotDeals/HotDeals";
import SponsorsBanner from "../../components/SponsorsBanner/SponsorsBanner";
import { IconButton } from "@material-tailwind/react";
import Faq from "./../../components/FAQ/Faq";
import { IoIosArrowUp } from "react-icons/io";

const Home = () => {
  // const [isLoading, setisLoading] = useState(false)

  return (
    <div className=" ">
      {/* all category section  */}
      <AllCategory />
      {/* Hero secion  */}
      <div className=" my-10">
        <Hero />
      </div>

      {/* {Hot deals } */}
      <HotDeals></HotDeals>

      {/* Sponsors section*/}
      <SponsorsBanner></SponsorsBanner>

      {/* FAQ */}
      <Faq />
      <a href="#nav-top" className="fixed right-8 z-[999] bottom-12 ">
        <IconButton variant="text" className="cursor-pointer ">
          <IoIosArrowUp className=" text-4xl" />
        </IconButton>
      </a>
    </div>
  );
};

export default Home;
