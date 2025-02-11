import Faq from "../../components/FAQ/Faq";
import Hero from "../../components/Hero/Hero";
import HotDeals from "../../components/HotDeals/HotDeals";
import SponsorsBanner from "../../components/SponsorsBanner/SponsorsBanner";

const Home = () => {
  // const [isLoading, setisLoading] = useState(false)

  return (
    <div className=" ">
      {/* Hero secion  */}
      <div className=" my-10">
        <Hero />
      </div>

      {/* {Hot deals } */}
      <HotDeals></HotDeals>

      {/* Sponsors section*/}
      <SponsorsBanner></SponsorsBanner>

      {/* FAQ */}
      <Faq/>

      
    </div>
  );
};

export default Home;
