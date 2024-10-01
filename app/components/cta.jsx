import Image from "next/image";
import bgImage from "../assets/cta-shape.svg";
import phoneImage from "../assets/app-layout.png";

export function Cta() {
  return (
    <div
      className="w-full bg-blue-gray-100 bg-top bg-no-repeat pt-[280px]"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container -mt-[280px] flex flex-col md:-mt-[90px] lg:flex-row lg:gap-[56px]">
        <Image
          src={phoneImage}
          alt="Phone Image"
          width={800}
          className="pb-1 md:pb-1 lg:pb-6"
        />

        <div className="flex flex-col items-center justify-center gap-8 pb-8 lg:items-start">
          <div className="space-y-4 text-center font-bold text-white lg:text-left">
            <h2 className="text-[32px] leading-9 lg:text-[56px]">
              Launch Your App Today
            </h2>
          </div>
          <p className="text-center text-lg font-normal leading-[28.80px] text-white lg:text-left lg:text-2xl">
            Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
            tincidunt viverra lectus pulvinar.
          </p>
          <button className="w-[234px] flex-none rounded-full border-2 border-white px-7 py-3 font-medium text-white">
            Free Launch
          </button>
        </div>
      </div>
    </div>
  );
}
