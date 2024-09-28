import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../Components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 mx-lg:pb-36 max-md:pt-36 max-md:pb-32 ">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            {/*<div className="relative z-2 max-w-512 max-lg:max-w-388 -ml-4">*/}
            {/*<div className="relative z-2 max-w-512 max-lg:max-w-388 -ml-4 sm:ml-0">*/}
            <div className="caption-bottom small-2 uppercase text-purple-500">
              Akasa Airlines
            </div>
            <h1 className=" mb-6 h1 text-orange-400  max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              It's Your Sky!
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              Akasa Air, India’s new low-cost airline, offers affordable,
              reliable travel with a focus on comfort and sustainability. Enjoy
              a seamless journey across key destinations in India.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Why Akasa?</Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-20 left-[calc(53%-300px)] w-[1200px] pointer-events-none hero-img_res">
            <img
              src="/images/AkasaTH.svg"
              className="size-700 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Hero;
