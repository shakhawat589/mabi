import astrom from "../assets/astrom.svg";
import cicio from "../assets/cicio.svg";
import weavy from "../assets/weavy.svg";
import vrokets from "../assets/vrokets.svg";
import viewio from "../assets/viewio.svg";
import metablu from "../assets/metablu.svg";
import buildaa from "../assets/buildaa.svg";
import hapi from "../assets/hapi.svg";
import logoipsum from "../assets/logoipsum.svg";
import virtu from "../assets/virtuo.svg";
import Image from "next/image";

export function Logos() {
  return (
    <div className="bg-blue-gray-100">
      <div className="container space-y-8 py-[48px] md:space-y-[80px] md:py-[80px]">
        <h2 className="text-center text-[32px] font-bold text-blue-gray-900 md:text-[56px]">
          Our Top Partners
        </h2>
        <div className="flex flex-col gap-4 md:gap-[80px]">
          <div className="grid grid-cols-5 place-content-center place-items-center gap-5">
            <Image
              src={astrom}
              alt="astrom"
              className="contrast-50 grayscale filter transition-all duration-500 hover:filter-none"
            />
            <Image
              src={cicio}
              alt="cicio"
              className="contrast-50 grayscale filter transition-all duration-500 hover:filter-none"
            />
            <Image
              src={weavy}
              alt="weavy"
              className="contrast-50 grayscale filter transition-all duration-500 hover:filter-none"
            />
            <Image
              src={vrokets}
              alt="vrokets"
              className="contrast-50 grayscale filter transition-all duration-500 hover:filter-none"
            />
            <Image
              src={viewio}
              alt="viewio"
              className="contrast-50 grayscale filter transition-all duration-500 hover:filter-none"
            />
          </div>

          <div className="grid grid-cols-5 place-content-center place-items-center gap-5 px-10">
            <Image
              src={metablu}
              alt="metablu"
              className="contrast-50 grayscale filter transition-all duration-500 hover:filter-none"
            />
            <Image
              src={buildaa}
              alt="buildaa"
              className="contrast-50 grayscale filter transition-all duration-500 hover:filter-none"
            />
            <Image
              src={hapi}
              alt="hapi"
              className="contrast-50 grayscale filter transition-all duration-500 hover:filter-none"
            />
            <Image
              src={logoipsum}
              alt="logoipsum"
              className="contrast-50 grayscale filter transition-all duration-500 hover:filter-none"
            />
            <Image
              src={virtu}
              alt="virtu"
              className="contrast-50 grayscale filter transition-all duration-500 hover:filter-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
