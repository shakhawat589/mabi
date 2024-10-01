import { Clock, ListTree, Sparkles } from "lucide-react";

export function How() {
  return (
    <div>
      <div className="container space-y-8 py-[48px] md:space-y-[80px] md:py-[80px]">
        <h2 className="text-center text-[32px] font-bold text-blue-gray-900 md:text-[56px]">
          How it works
        </h2>
        <div className="flex flex-col gap-8 md:gap-[80px] lg:flex-row">
          {/* Card */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-[10px] border-4 border-blue-gray-500 bg-white px-4 py-8 shadow-lg shadow-gray-300">
            <Clock className="h-16 w-16 text-blue-gray-600" />
            <p className="text-center text-base text-blue-gray-900">
              Dui consectetur gravida platea ut dis diam. Enim morbi proin
              auctor et nisl phasellus. Ultricies pharetra, id quam facilisis
              urna, enim.
            </p>
          </div>

          {/* Card */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-[10px] border-4 border-blue-gray-500 bg-white px-4 py-8 shadow-lg shadow-gray-300">
            <ListTree className="h-16 w-16 text-blue-gray-600" />
            <p className="text-center text-base text-blue-gray-900">
              Et sit duis vestibulum proin. Sollicitudin velit, etiam a feugiat
              sagittis. Imperdiet ipsum urna ornare vitae tempus sed massa.
            </p>
          </div>

          {/* Card */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-[10px] border-4 border-blue-gray-500 bg-white px-4 py-8 shadow-lg shadow-gray-300">
            <Sparkles className="h-16 w-16 text-blue-gray-600" />
            <p className="text-center text-base text-blue-gray-900">
              Elit purus magna donec mattis amet, leo varius sed. Ut metus sed
              convallis pretium sollicitudin turpis semper vulputate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
