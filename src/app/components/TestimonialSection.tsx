import React from "react";
import { fetchTestimonial } from "@/lib/fetchTestimonials";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies } from "@/data";
import { fetchClients } from "@/lib/fetchClients";

export default async function TestimonialSection() {
  const testimonialsData = await fetchTestimonial();
  const clientsData = await fetchClients();
 
  return (
    <section id="testimonials" className="max-w-7xl mx-auto w-full relative overflow-hidden py-44 px-4">
      <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
        Kind words from <span className="text-[#c3d740]">satisfied</span> clients
      </h2>
      <p className="text-center text-base md:text-lg font-normal text-gray-500 max-w-md mt-2 mx-auto">
        Don&quot;t just take our word for it. Read the testimonials from our
        satisfied clients and learn about their experiences and the results
        they&quot;ve achieved.
      </p>

      <div className="flex flex-col items-center max-lg:mt-2">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonialsData}
            direction="right"
            speed="slow"
            pauseOnHover
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {clientsData.map((item) => (
            <React.Fragment key={item.uid}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="md:w-24 w-50"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
