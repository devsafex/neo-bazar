import Hero from "../../components/Hero/Hero";
import HotDeals from "../../components/HotDeals/HotDeals";

const Home = () => {
      // const [isLoading, setisLoading] = useState(false)
      
      return (
            <div className=" ">
                  {/* Hero secion  */}
                  <div className=" my-14">
                     <Hero/>   
                  </div>

                  {/* {Hot deals } */}
                  <HotDeals></HotDeals>

                   {/* Hello i am home */}
            </div>
      );
};

export default Home;