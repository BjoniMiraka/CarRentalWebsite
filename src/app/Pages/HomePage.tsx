import { CarList } from "../../components/CarList";
import { Home } from "../Home/Home";
import { Testimonials } from "./Testimonials";

export const HomePage = () => {
  return (
    <div>
      <Home />
      <CarList />
      <Testimonials />
    </div>
  );
};
