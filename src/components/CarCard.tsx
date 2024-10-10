import { ArrowRight, Snowflake, Star, User } from "phosphor-react";
import Car2 from "./../assets/images/car2.png";
import { Divider } from "./Divider";
import { Button } from "../libs/shadcn/Button";
import { DoorIcon } from "../assets/icons/DoorIcon";
import { AutoIcon } from "../assets/icons/AutoIcon";
export const CarCard = () => {
  return (
    <div className="max-w-64 rounded-2xl shadow-md border">
      <img className="p-6" src={Car2} alt="" />
      <div className="px-6 pb-6 ">
        <p className="mb-3">Car name</p>
        <div className="flex gap-1.5 items-center mb-4">
          <Star size={16} weight="fill" fill="#EFBF14" />
          <p className="text-xs">
            4.8 <span className="text-gray-500">(2.436 reviews)</span>
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <User size={20} color="#959595" />
              <p className="text-gray-500 text-xs">4 Passengers</p>
            </div>
            <div className="flex items-center gap-1">
              <AutoIcon />
              <p className="text-gray-500 text-xs">Auto</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Snowflake size={20} color="#959595" />
              <p className="text-gray-500 text-xs">Air Conditioning</p>
            </div>
            <div className="flex items-center gap-1">
              <DoorIcon />
              <p className="text-gray-500 text-xs">4 Doors</p>
            </div>
          </div>
        </div>
        <Divider className="my-6" />
        <footer>
          <div className="flex items-center justify-between my-6">
            <p>Price</p>
            <p>
              $1,800 <span className="text-gray-500"> /day</span>
            </p>
          </div>
          <Button className="gap-2 text-white p-2 w-full">
            Rent Now <ArrowRight size={20} color="#fff" />
          </Button>
        </footer>
      </div>
    </div>
  );
};
