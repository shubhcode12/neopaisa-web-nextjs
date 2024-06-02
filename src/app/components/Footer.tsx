import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "../components/ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full px-8 md:px-32 pt-20 pb-10 relative" id="footer">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col text-center items-center relative z-10">
        <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black dark:text-white leading-tight sm:leading-snug md:leading-normal">
          Ready to take <span className="text-[#c3d740]">your</span> digital
          presence to the next level?
        </h2>
        <p className="text-center text-sm sm:text-base md:text-lg font-normal text-gray-500 max-w-md mt-2 mx-auto leading-relaxed">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <a href="mailto:neopaisa.com@gmail.com" className="mt-4">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 relative z-10">
        <p className="text-gray-500 text-xs md:text-base font-light">
          Copyright © 2024 NeoPaisa.com
        </p>

        <div className="flex items-center gap-4 md:gap-3 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <a href={info.link}>
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
