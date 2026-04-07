import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-between mx-0 mt-40 lg:mt-0 items-center bg-center xl:mx-[10%] lg:mx-[7%] md:mx-[7%] lg:min-h-screen relative">
      <section
        className="w-full xl:w-[60%] relative pb-10 flex flex-col gap-4 lg:w-[60%]"
        data-aos="fade-right"
      >
        <div className="flex flex-col gap-2">
          <span className="text-lg">Hi, I'm</span>
          <h1 className="font-bold text-6xl md:text-7xl font-display">
            Lixin Liu
          </h1>
          <span className="text-xl md:text-2xl font-medium text-secondary-color-3">
            (You can also call me Tracy 👋)
          </span>
        </div>

        <div className="relative">
          <p className="mt-4 leading-relaxed text-base md:text-lg">
            I am a <strong className="text-[#E88D67]">Full-Stack Engineer</strong> deeply committed to leveraging technology to empower diverse communities and drive global inclusive development. By combining agile web development, AI innovations, and human-centered design, I strive to build robust, impactful digital solutions that bridge the digital divide.
            <br />
            <br />
            Let’s build something remarkable together.
          </p>
        </div>

        <Button asChild variant={"outline"}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"mailto:liulx25@mails.tsinghua.edu.cn"}
            className="flex items-center border-black justify-center gap-3 px-5 py-2 font-medium w-max border-[1px] mt-5"
          >
            Get in Touch
            <Image
              alt="message"
              src={"/svgs/message-programming.svg"}
              width={25}
              height={25}
            />
          </Link>
        </Button>
      </section>
      <section
        className="w-full relative flex lg:justify-end items-center xl:w-[40%] h-[35rem] lg:h-[40rem] lg:w-[40%] group mt-10 lg:mt-0"
        data-aos="zoom-in"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main central image */}
          <div className="absolute z-20 h-[16rem] w-[16rem] lg:h-[18rem] lg:w-[18rem] shadow-2xl rounded-full border-4 border-white dark:border-gray-800 transition-transform duration-500 hover:scale-105 hover:z-30">
            <Image
              alt="profile image 1"
              src={"/image1.jpg"}
              quality={100}
              className="grayscale-[20%] contrast-[1.15] saturate-[1.1] transition-all rounded-full object-cover"
              layout="fill"
            />
          </div>
          
          {/* Top-left image (scattered further) */}
          <div className="absolute z-10 -translate-x-24 -translate-y-32 lg:-translate-x-36 lg:-translate-y-40 h-[10rem] w-[10rem] lg:h-[12rem] lg:w-[12rem] shadow-xl rounded-full border-4 border-white dark:border-gray-800 opacity-90 transition-all duration-500 hover:opacity-100 hover:scale-110 hover:z-30">
            <Image
              alt="profile image 2"
              src={"/image2.jpg"} // Change this path to your second image when ready
              quality={100}
              className="contrast-[1.15] saturate-[1.1] transition-all rounded-full object-cover"
              layout="fill"
            />
          </div>

          {/* Bottom-right image (scattered further) */}
          <div className="absolute z-10 translate-x-24 translate-y-32 lg:translate-x-36 lg:translate-y-40 h-[11rem] w-[11rem] lg:h-[13rem] lg:w-[13rem] shadow-xl rounded-full border-4 border-white dark:border-gray-800 opacity-90 transition-all duration-500 hover:opacity-100 hover:scale-110 hover:z-30">
            <Image
              alt="profile image 3"
              src={"/image3.jpg"} // Change this path to your third image when ready
              quality={100}
              className="contrast-[1.15] saturate-[1.1] transition-all rounded-full object-cover -rotate-90"
              layout="fill"
            />
          </div>

          {/* Top-right image (scattered) */}
          <div className="absolute z-10 translate-x-20 -translate-y-36 lg:translate-x-32 lg:-translate-y-48 h-[8rem] w-[8rem] lg:h-[10rem] lg:w-[10rem] shadow-xl rounded-full border-4 border-white dark:border-gray-800 opacity-90 transition-all duration-500 hover:opacity-100 hover:scale-110 hover:z-30">
            <Image
              alt="profile image 4"
              src={"/image4.jpg"} // Change this path to your fourth image when ready
              quality={100}
              className="contrast-[1.15] saturate-[1.1] transition-all rounded-full object-cover"
              layout="fill"
            />
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
