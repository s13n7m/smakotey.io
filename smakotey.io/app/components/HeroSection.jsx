"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1  sm:grid-cols-12">
        <div className="col-span-7 text-center sm:text-left">
          <h1
            id="websiteHeader"
            className="text-transparent mb-8 text-3xl sm:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-l from-blue-900 to-green-800 font-extrabold"
          >
            Hello, I&apos;m Matt
            <br></br>
            <span className="text-white sm:text-2xl lg:text-3xl">
              <TypeAnimation
                sequence={[
                  1000,
                  "Data Scientist",
                  1000,
                  "Data Analyst",
                  1000,
                  "Software Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p
            id="bio"
            className="text-[#dee5ea] text-14px sm:text-11px mb-6 lg:text-xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br></br>
          </p>

          <div id="buttons">
            <button className="px-7 py-4 w-full sm:w-fit rounded-full mr-4 bg-[#484848] hover:bg-gradient-to-br from-blue-900 to-green-900 text-white hover:text-white border-white">
              Hire Me
            </button>

            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-[#292929] hover:bg-gradient-to-br from-blue-700 to-green-800 text-white hover:text-white mt-3">
              <span className="block bg-[#1f1f1f] hover:bg-[#1E1E1E] rounded-full px-6 py-3">
                Download my CV
              </span>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg=[#1f1f1f1f] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/memoji.png"
              alt="Matt Akotey"
              className="absolute transform -translate-x-1/2 top=1/2 left-1/2"
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
