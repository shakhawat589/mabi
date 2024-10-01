"use client";

import { AlignJustify, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const currentPath = usePathname();

  return (
    <div className="fixed left-0 top-0 z-10 w-full bg-blue-gray-600 text-white">
      <div className="container flex items-center justify-between py-4 md:py-6">
        {/* Logo and menu links */}
        <div className="flex items-center justify-center gap-12">
          {/* logo */}
          <Link href="/" className="text-[32px] font-bold leading-9">
            mabi
          </Link>

          {/* menulinks */}
          <div className="hidden items-center justify-center font-medium md:gap-12 lg:flex">
            <Link href="/" className={currentPath === "/" ? "border-b-2" : ""}>
              Home
            </Link>
            <Link
              href="#"
              className={currentPath === "/solutions" ? "border-b-2" : ""}
            >
              Solutions
            </Link>
            <Link
              href="#"
              className={currentPath === "/pricing" ? "border-b-2" : ""}
            >
              Pricing
            </Link>
            <Link className="flex items-center justify-center gap-1" href="#">
              <span
                className={currentPath === "/resources" ? "border-b-2" : ""}
              >
                Resources
              </span>
              <ChevronDown width="20px" height="20px" />
            </Link>
          </div>
        </div>

        <button className="lg:hidden">
          <AlignJustify />
        </button>
        <div className="hidden gap-4 lg:flex">
          <button className="rounded-full border-2 border-white px-7 py-2 font-medium">
            Login
          </button>
          <button className="rounded-full border-2 border-white bg-white px-7 py-2 font-medium text-blue-gray-900">
            Free Launch
          </button>
        </div>
      </div>
    </div>
  );
}
