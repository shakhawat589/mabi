import {
  CookieIcon,
  Euro,
  Globe,
  MoveRight,
  PersonStanding,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-blue-gray-600">
      <div className="container pt-12 text-white">
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row">
          <Link
            href="/"
            className="text-center text-[32px] font-bold leading-9"
          >
            mabi
          </Link>

          {/* Footer Menu links */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <Link className="text-base font-medium" href="#">
              Product
            </Link>
            <Link className="text-blue-gray-300" href="#">
              Pricing
            </Link>
            <Link className="text-blue-gray-300" href="#">
              Overview
            </Link>
            <Link className="text-blue-gray-300" href="#">
              Browse
            </Link>
            <Link className="text-blue-gray-300" href="#">
              Accessibility{" "}
              <span className="ml-1 rounded bg-white px-2 py-[2px] text-xs leading-none text-purple-600">
                BETA
              </span>
            </Link>
          </div>

          {/* Footer Menu links */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <Link className="text-base font-medium" href="#">
              Solutions
            </Link>
            <Link className="text-blue-gray-300" href="#">
              Brainstorming
            </Link>
            <Link className="text-blue-gray-300" href="#">
              Ideation
            </Link>
            <Link className="text-blue-gray-300" href="#">
              Wireframing
            </Link>
            <Link className="text-blue-gray-300" href="#">
              Research
            </Link>
          </div>

          {/* Footer Menu links */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <Link className="text-base font-medium" href="#">
              Support
            </Link>
            <Link className="text-blue-gray-300" href="#">
              Contact Us
            </Link>
            <Link className="text-blue-gray-300" href="#">
              Developers
            </Link>
            <Link className="text-blue-gray-300" href="#">
              Documentation
            </Link>
            <Link className="text-blue-gray-300" href="#">
              Integrations
            </Link>
          </div>

          {/* Footer Menu links */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <Link className="text-base font-medium" href="#">
              Company
            </Link>
            <Link className="text-blue-gray-300" href="#">
              About
            </Link>
            <Link className="text-blue-gray-300" href="#">
              Press
            </Link>
            <Link className="text-blue-gray-300" href="#">
              Events
            </Link>
            <Link
              className="flex items-center justify-center text-blue-gray-300"
              href="#"
            >
              Request Demo <MoveRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 border-t border-blue-gray-700 py-6 md:flex-row md:justify-between">
          <p className="text-blue-gray-300">
            @ 2023 Mabi. All rights reserved.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="flex gap-4">
              <Link className="text-blue-gray-300" href="#">
                Terms
              </Link>
              <Link className="text-blue-gray-300" href="#">
                Privacy
              </Link>
              <Link className="text-blue-gray-300" href="#">
                Contact
              </Link>
            </div>

            <div className="flex gap-4">
              <Link
                className="flex items-center justify-center gap-2 text-blue-gray-300"
                href="#"
              >
                <Globe className="h-6 w-6" />
                <span>EN</span>
              </Link>
              <Link
                className="flex items-center justify-center gap-2 text-blue-gray-300"
                href="#"
              >
                <Euro className="h-6 w-6" />
                <span>EURO</span>
              </Link>
              <Link
                className="flex items-center justify-center gap-2 text-blue-gray-300"
                href="#"
              >
                <CookieIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
