import Image from "next/image";

import content1 from "../assets/content-1.png";
import content2 from "../assets/content-2.png";
import content3 from "../assets/content-3.png";

export function Content() {
  return (
    <div className="bg-blue-gray-100">
      <div className="container space-y-8 py-[48px] md:space-y-[80px] md:py-[80px]">
        {/* Content part 1 */}
        <div className="flex flex-col items-center justify-center gap-8 text-blue-gray-900 md:flex-row md:justify-between md:gap-[80px]">
          <div className="flex flex-col items-center justify-center gap-8 md:items-start">
            <h2 className="text-center text-[32px] font-bold text-blue-gray-900 md:text-left md:text-[56px]">
              Turpis risus facilisi
            </h2>
            <p className="text-center text-base text-blue-gray-900 md:text-left">
              Augue feugiat mi, massa amet. Id purus aliquam bibendum purus
              dictum elementum nullam odio tellus. Imperdiet feugiat est odio
              fames magna orci. Augue purus aliquam, placerat vestibulum dictum
              pellentesque molestie. Facilisis pretium porta congue proin.
            </p>
          </div>

          <Image src={content1} alt="content-1" />
        </div>

        {/* Content part 2 */}
        <div className="flex flex-col items-center justify-center gap-8 text-blue-gray-900 md:flex-row-reverse md:justify-between md:gap-[80px]">
          <div className="flex flex-col items-center justify-center gap-8 md:items-start">
            <h2 className="text-center text-[32px] font-bold text-blue-gray-900 md:text-left md:text-[56px]">
              Sagittis sapien viverra
            </h2>
            <p className="text-center text-base text-blue-gray-900 md:text-left">
              Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor
              tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate
              facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna
              massa eu vel blandit sed nisi gravida. Imperdiet parturient at
              purus bibendum risus auctor lacus tristique arcu. Arcu hac cursus
              faucibus id. Eu integer parturient risus magna eget massa. Risus
              molestie tempor, faucibus non ultricies. Nam vel mattis quis dui,
              condimentum mi volutpat ut aliquam.
            </p>
          </div>

          <Image src={content2} alt="content-2" />
        </div>

        {/* Content part 3 */}
        <div className="flex flex-col items-center justify-center gap-8 text-blue-gray-900 md:flex-row md:justify-between md:gap-[80px]">
          <div className="flex flex-col items-center justify-center gap-8 md:items-start">
            <h2 className="text-center text-[32px] font-bold text-blue-gray-900 md:text-left md:text-[56px]">
              Non commodo nec
            </h2>
            <p className="text-center text-base text-blue-gray-900 md:text-left">
              Laoreet amet, lacus sed faucibus. Nec, natoque semper rutrum dui.
              Curabitur in commodo pretium lacinia feugiat. A ultricies quis
              commodo, nisl, vestibulum, feugiat dolor. Tincidunt orci
              consequat, pellentesque leo dui nunc ac, amet. A proin pulvinar
              nec nibh bibendum. Nec mi mattis vulputate dictum platea pharetra,
              id id.
            </p>
          </div>

          <Image src={content3} alt="content-3" />
        </div>
      </div>
    </div>
  );
}
