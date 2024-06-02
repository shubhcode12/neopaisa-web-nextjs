import navItems from "../utils/NavItems";
import { Navbar } from "../components/NavBar";
import Marquee from "../components/Marquee";
import { APP_PLAY_STORE_LINK } from "@/data";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="relative bg-[#0c0c10] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <Navbar navItems={navItems} className="custom-classname" />

      <section
        id="testimonials"
        className="max-w-7xl mx-auto w-full relative overflow-hidden py-44 px-4">
        <h2 className="text-center text-4xl md:text-4xl lg:text-7xl font-bold text-black dark:text-white">
          We&apos;re building a world where money can flow effortlessly into the
          things people truly care about.
          <span className="text-[#c3d740]"></span>
        </h2>
        <p className="text-center text-base md:text-lg font-normal text-gray-500 max-w-md mt-2 mx-auto">
          about us
        </p>
      </section>
      <div className="overflow-hidden whitespace-nowrap bg-black p-16 text-[#c3d740]">
        <div className="flex animate-scroll">
          <a href={APP_PLAY_STORE_LINK}>
            <span className="text-6xl font-bold px-8">
              - DOWNLOAD NOW - DOWNLOAD NOW - DOWNLOAD NOW - DOWNLOAD NOW -
              DOWNLOAD NOW - DOWNLOAD NOW - DOWNLOAD NOW - DOWNLOAD NOW -
              DOWNLOAD NOW - DOWNLOAD NOW - DOWNLOAD NOW - DOWNLOAD NOW -
              DOWNLOAD NOW - DOWNLOAD NOW - DOWNLOAD NOW - DOWNLOAD NOW -
              DOWNLOAD NOW - DOWNLOAD NOW - DOWNLOAD NOW - DOWNLOAD NOW -
              DOWNLOAD NOW - DOWNLOAD NOW - DOWNLOAD NOW - DOWNLOAD NOW
            </span>
          </a>
        </div>
      </div>

      <Footer/>
    </main>
  );
}
