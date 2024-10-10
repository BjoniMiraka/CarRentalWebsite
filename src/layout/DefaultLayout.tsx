import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export const DefaultLayout = () => {
  return (
    <div className="max-w-[1500px] m-auto bg-white">
      <Navigation />
      <Outlet />

      <Footer />
    </div>
  );
};
