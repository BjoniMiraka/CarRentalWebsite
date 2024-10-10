import { InfiniteCarousel } from "../../components/InfiniteCarousel";
import { TestimonialCard } from "../../components/TestimonialCard";
export const Testimonials = () => {
  return (
    <div className="space-y-16 bg-blue-50 py-20 rounded-lg">
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="uppercase px-8 py-4 bg-blue-100 bg-opacity-20 text-blue-100  rounded-lg">
          TESTIMONIALS
        </p>
        <p className="md:text-4xl text-2xl">What people say about us?</p>
      </div>
      <InfiniteCarousel className="gap-6">
        {Array.from({ length: 1 }).map((_, index) => (
          <div className="flex-shrink-0 " key={index}>
            <TestimonialCard />
          </div>
        ))}
      </InfiniteCarousel>
    </div>
  );
};
