import { Car } from "phosphor-react";
import { BgSvg } from "../../assets/icons/BgSvg";
import { Button } from "../../libs/shadcn/Button";
import image from "./../../assets/images/home.png";
export const Home = () => {
  return (
    <div className="min-h-[calc(100vh-72px)] flex items-center justify-between mt-[72px] overflow-hidden relative">
      <div className="max-w-[37rem] pl-36 mr-7 space-y-6">
        <h1 className="font-semibold  text-black-10 lg:text-5xl text-3xl ">
          Find, book and rent <br /> a car{" "}
          <span className="text-blue-500">Easily</span>
        </h1>
        <p className="text-black-100">
          Find the right car, at the right price, for any trip. Let’s get you
          moving!
        </p>
        <Button className="gap-2 text-lg p-8">
          Lets Ride <Car size="20" />
        </Button>
      </div>
      <BgSvg className="absolute right-0 top-0 z-[1] lg:block hidden" />
      <div className="max-w-[740px] w-full z-[2]">
        <img className="self-end " src={image} alt="" />
      </div>
    </div>
  );
};
