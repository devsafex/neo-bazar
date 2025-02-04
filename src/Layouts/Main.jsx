import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      {/* nav bar  */}
      <div></div>
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
