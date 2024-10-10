import { CarCard } from "./CarCard";

export const CarList = () => {
  return (
    <div className="pb-6 space-y-8 px-6">
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="uppercase px-8 py-4 bg-blue-100 bg-opacity-20 text-blue-100  rounded-lg">
          Popular rental deals
        </p>
        <p className="md:text-4xl text-2xl">Most popular cars rental deals</p>
      </div>
      <div className="flex flex-wrap gap-8 items-center justify-center px-8">
        {["ff", "fwfa", "2", 3, 4].map((car) => (
          <CarCard key={car} />
        ))}
      </div>
    </div>
  );
};
