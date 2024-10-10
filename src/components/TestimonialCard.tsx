import { Star } from "phosphor-react";
import user from "./../assets/images/user1.png";
export const TestimonialCard = () => {
  return (
    <div className="rounded-3xl border flex max-w-[600px]  w-full bg-white shadow-lg">
      <img src={user} alt="" className="w-1/2" />
      <div className="w-1/2 md:p-10 p-5">
        <div className="space-y-3">
          <p className="md:text-6xl text-2xl text-black-50">
            5.0<span className="md:text-2xl text-sm">stars</span>
          </p>
          <div className="flex gap-1 items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={24} weight="fill" fill="#EFBF14" />
            ))}
          </div>
        </div>
        <p className="mb-8 mt-5 md:text-lg text-black-50">
          ”I feel very secure when using caretall's services. Your customer care
          team is very enthusiastic and the driver is always on time.”
        </p>
        <div>
          <p className="md:text-2xl text-black-100">Charlie Johnson</p>
          <p className="text-sm text-gray-500">From New York, US</p>
        </div>
      </div>
    </div>
  );
};
