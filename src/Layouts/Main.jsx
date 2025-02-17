import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div className=" relative">
      {/* nav bar  */}
      <div>
        <Nav></Nav>
      </div>
      {/* Outlet  */}
      <div className="">
        <Outlet />
      </div>
      {/* Footer  */}
      <div>
        <Footer></Footer>    
      </div>
    </div>
  );
};

export default Main;
