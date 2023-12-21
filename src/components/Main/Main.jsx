import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="h-[90vh]">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
