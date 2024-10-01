import Image from "next/image";
import bgImage from "../assets/bg-shape.svg";
import phoneImage from "../assets/phone-image.png";

export function Hero() {
  return (
    <div
      className="w-full bg-blue-gray-100 bg-bottom bg-no-repeat pt-[96px] lg:pt-[160px]"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container flex flex-col lg:flex-row lg:gap-[56px]">
        <div className="flex flex-col items-center justify-center gap-8 pb-8 lg:items-start">
          <div className="space-y-4 text-center font-bold text-white lg:text-left">
            <h1 className="text-[40px] leading-[44px] lg:text-7xl">
              Launch Your App
            </h1>
            <h2 className="text-[32px] leading-9 text-blue-gray-300 lg:text-[56px]">
              Grow Your Business
            </h2>
          </div>
          <p className="text-center text-lg font-normal leading-[28.80px] text-white lg:text-left lg:text-2xl">
            Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
            tincidunt viverra lectus pulvinar.
          </p>
          <button className="w-[234px] flex-none rounded-full border-2 border-white px-7 py-3 font-medium text-white">
            Login
          </button>
        </div>
        <Image
          src={phoneImage}
          alt="Phone Image"
          width={600}
          className="pb-1 md:pb-1 lg:pb-6"
        />
      </div>
    </div>
  );
}
