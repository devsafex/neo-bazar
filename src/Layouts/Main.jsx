import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const Main = () => {
  return (
    <div>
      {/* nav bar  */}
      <div>
        <Nav></Nav>
      </div>
      {/* Outlet  */}
      <div>
        <Outlet />
      </div>
      {/* Footer  */}
      <div>
            
      </div>
    </div>
  );
};

export default Main;
